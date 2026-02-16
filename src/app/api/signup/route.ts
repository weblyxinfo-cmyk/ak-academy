import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, consent } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !consent) {
      return NextResponse.json(
        { error: "Vyplňte všechna povinná pole a udělte souhlas." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Neplatný formát emailu." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL_TO || "ak.barbers.cz@gmail.com";

    await transporter.sendMail({
      from: `"AK Academy Web" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: email,
      subject: `Nová přihláška z LP od ${name}${body.course ? ` – ${body.course}` : ""}`,
      html: `
        <h2>Nová přihláška z landing page</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Kurz:</strong> ${body.course || "Nezvolen"}</p>
        <p><strong>Město:</strong> ${body.city || "Nezvoleno"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat přihlášku." },
      { status: 500 }
    );
  }
}
