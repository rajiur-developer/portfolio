import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (![name, email, subject, message].every((value) => typeof value === "string" && value.trim())) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (name.length > 100 || email.length > 254 || subject.length > 180 || message.length > 5000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "rajiurrahman2003@gmail.com";
    const from = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json({ error: "The contact form is not configured yet. Please try again later." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email.trim(),
        subject: `Portfolio contact: ${subject.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend email error:", response.status, detail);
      return NextResponse.json({ error: "Message could not be sent right now. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
