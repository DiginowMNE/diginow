import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { cookies } from "next/headers";

// Improved rate limiting using cookies
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

async function isRateLimited() {
  const cookieStore = cookies();
  const rateLimitCookie = cookieStore.get("rateLimit");

  if (!rateLimitCookie) {
    return false;
  }

  const { count, timestamp } = JSON.parse(rateLimitCookie.value);
  const now = Date.now();

  if (now - timestamp > RATE_LIMIT_WINDOW) {
    return false;
  }

  return count >= MAX_REQUESTS;
}

async function updateRateLimit() {
  const cookieStore = cookies();
  const rateLimitCookie = cookieStore.get("rateLimit");

  if (!rateLimitCookie) {
    cookieStore.set(
      "rateLimit",
      JSON.stringify({ count: 1, timestamp: Date.now() }),
      {
        maxAge: RATE_LIMIT_WINDOW / 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      }
    );
    return;
  }

  const { count, timestamp } = JSON.parse(rateLimitCookie.value);
  const now = Date.now();

  if (now - timestamp > RATE_LIMIT_WINDOW) {
    cookieStore.set("rateLimit", JSON.stringify({ count: 1, timestamp: now }), {
      maxAge: RATE_LIMIT_WINDOW / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  } else {
    cookieStore.set(
      "rateLimit",
      JSON.stringify({ count: count + 1, timestamp }),
      {
        maxAge: RATE_LIMIT_WINDOW / 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      }
    );
  }
}

async function verifyRecaptcha(token) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  return input.replace(/[<>]/g, "");
}

export async function POST(req) {
  try {
    // Rate limiting check
    if (await isRateLimited()) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const {
      name,
      lastName,
      company,
      email,
      reasonForContact,
      message,
      captchaToken,
    } = await req.json();

    // Verify reCAPTCHA
    if (!captchaToken || !(await verifyRecaptcha(captchaToken))) {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA verification" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      lastName: sanitizeInput(lastName),
      company: sanitizeInput(company),
      email: sanitizeInput(email),
      reasonForContact: sanitizeInput(reasonForContact),
      message: sanitizeInput(message),
    };

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Diginow Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      subject: `New Contact Form Submission from ${sanitizedData.name} ${sanitizedData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${
              sanitizedData.name
            } ${sanitizedData.lastName}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Company:</strong> ${
              sanitizedData.company || "Not provided"
            }</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> ${
              sanitizedData.email
            }</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Reason for Contact:</strong> ${
              sanitizedData.reasonForContact || "Not specified"
            }</p>
            <div style="margin-top: 20px;">
              <strong style="color: #555;">Message:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                <p style="margin: 0; line-height: 1.5;">${
                  sanitizedData.message
                }</p>
              </div>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
            This email was sent from the contact form on diginow.me
          </p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${sanitizedData.name} ${
        sanitizedData.lastName
      }\nCompany: ${sanitizedData.company || "Not provided"}\nEmail: ${
        sanitizedData.email
      }\nReason: ${
        sanitizedData.reasonForContact || "Not specified"
      }\n\nMessage:\n${
        sanitizedData.message
      }\n\nThis email was sent from the contact form on diginow.me`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Update rate limit after successful validation
    await updateRateLimit();

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
