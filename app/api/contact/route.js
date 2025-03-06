import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import Redis from "ioredis";

// Redis configuration with retry strategy
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379", {
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
  enableReadyCheck: false,
});

const RATE_LIMIT_WINDOW = 60 * 60; // 1 hour in seconds
const MAX_REQUESTS = 5; // 5 requests per hour

async function isRateLimited(ip) {
  const key = `rate_limit:${ip}`;

  try {
    // Get current count
    const count = await redis.get(key);

    if (!count) {
      // First request, set initial count with expiration
      await redis.setex(key, RATE_LIMIT_WINDOW, "1");
      return false;
    }

    const currentCount = parseInt(count);

    if (currentCount >= MAX_REQUESTS) {
      return true;
    }

    // Increment count
    await redis.incr(key);
    return false;
  } catch (error) {
    console.error("Redis error:", error);
    // If Redis fails, allow the request
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
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";

    // Rate limiting check
    const limited = await isRateLimited(ip);
    if (limited) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, lastName, company, email, reasonForContact, message } =
      await req.json();

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
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Website Message Submission from ${sanitizedData.name} ${sanitizedData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name} ${sanitizedData.lastName}</p>
        <p><strong>Company:</strong> ${sanitizedData.company}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Reason for Contact:</strong> ${sanitizedData.reasonForContact}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

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
