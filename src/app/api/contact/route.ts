import { NextResponse } from "next/server";

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

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO || "ak.barbers.cz@gmail.com";

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "AK Academy Web <onboarding@resend.dev>",
        to: [to],
        subject: `Nová přihláška z webu od ${name}${body.course ? ` – ${body.course}` : ""}`,
        html: `
          <h2>Nová přihláška z kontaktního formuláře Academy</h2>
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${body.phone || "Nevyplněno"}</p>
          <p><strong>Kurz:</strong> ${body.course || "Nezvolen"}</p>
          <p><strong>Zpráva:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu." },
      { status: 500 }
    );
  }
}
