import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Simple in-memory rate limiting (for development)
// In production, use Redis or a database
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

function isRateLimited(ip) {
  const now = Date.now();
  const userRequests = rateLimit.get(ip) || { count: 0, timestamp: now };

  if (now - userRequests.timestamp > RATE_LIMIT_WINDOW) {
    userRequests.count = 1;
    userRequests.timestamp = now;
  } else {
    userRequests.count++;
  }

  rateLimit.set(ip, userRequests);
  return userRequests.count > MAX_REQUESTS;
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
    if (isRateLimited(ip)) {
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
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
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
