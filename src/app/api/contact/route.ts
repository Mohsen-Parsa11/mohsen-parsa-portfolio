import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is missing");
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);

      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    console.log("✅ Email sent:", data);

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 },
    );
  }
}
