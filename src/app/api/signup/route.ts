import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from: `AK Academy Web <${from}>`,
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
