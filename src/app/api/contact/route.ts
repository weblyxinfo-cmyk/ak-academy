import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/db";
import { contacts } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, consent } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
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

    // Persist to database (skip if DB not configured)
    if (process.env.TURSO_DATABASE_URL) {
      try {
        await db.insert(contacts).values({
          name: name.trim(),
          email: email.trim(),
          phone: body.phone?.trim() || null,
          course: body.course || null,
          message: message.trim(),
          consent: true,
        });
      } catch (dbError) {
        console.error("DB insert failed (contact):", dbError);
      }
    }

    const to = (process.env.CONTACT_EMAIL_TO || "ak.barbers.cz@gmail.com").trim();
    const from = (process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev").trim();

    await resend.emails.send({
      from: `AK Academy Web <${from}>`,
      to,
      replyTo: email,
      subject: `Nová zpráva z webu od ${name}${body.course ? ` – ${body.course}` : ""}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${body.phone || "Nevyplněno"}</p>
        <p><strong>Kurz:</strong> ${body.course || "Nezvolen"}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu." },
      { status: 500 }
    );
  }
}
