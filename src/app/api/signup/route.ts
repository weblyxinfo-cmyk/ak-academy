import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/db";
import { signups } from "@/db/schema";

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

    // Persist to database (skip if DB not configured)
    if (process.env.TURSO_DATABASE_URL) {
      try {
        await db.insert(signups).values({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          course: body.course || null,
          city: body.city || null,
          consent: true,
        });
      } catch (dbError) {
        console.error("DB insert failed (signup):", dbError);
      }
    }

    const to = (process.env.CONTACT_EMAIL_TO || "ak.barbers.cz@gmail.com").trim();
    const from = (process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev").trim();

    const { data, error: sendError } = await resend.emails.send({
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

    if (sendError) {
      console.error("Resend error (signup):", sendError);
      return NextResponse.json(
        { error: "Nepodařilo se odeslat přihlášku.", detail: sendError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Signup form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat přihlášku." },
      { status: 500 }
    );
  }
}
