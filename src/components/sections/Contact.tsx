"use client";

import { useState, FormEvent } from "react";
import { IconCircle } from "@/components/IconCircle";
import { SuccessModal } from "@/components/SuccessModal";
import { courses, siteConfig } from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;
    const consent = form.get("consent");

    if (!name?.trim()) errs.name = "Vyplňte jméno";
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Vyplňte platný email";
    if (!message?.trim()) errs.message = "Vyplňte zprávu";
    if (!consent) errs.consent = "Musíte souhlasit se zpracováním údajů";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          course: formData.get("course"),
          message: formData.get("message"),
          consent: true,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error || `Chyba serveru (${res.status})`);
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorMsg("Nepodařilo se odeslat formulář. Zkontrolujte připojení k internetu.");
      setStatus("error");
    }
  }

  return (
    <>
    <SuccessModal
      open={status === "success"}
      onClose={() => setStatus("idle")}
    />
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Kontakt & přihlášení
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray">
          Máte zájem o kurz? Vyplňte formulář a my se vám ozveme
        </p>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold text-white">Kontaktní informace</h3>
                <div className="mt-4 space-y-3">
                  <div className="text-sm text-gray">
                    <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="text-sm text-gray">
                    <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray">Národní 949/19, Praha 1</div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg" style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}>
                <iframe
                  src="https://storage.googleapis.com/maps-solutions-4w0wr9cfwd/locator-plus/q9yy/locator-plus.html"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Mapa AK Barbers Academy"
                />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-lg border border-border p-8"
            >
              <div>
                <label htmlFor="contact-name" className="sr-only">Jméno a příjmení</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Jméno, příjmení *"
                  className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-phone" className="sr-only">Telefon</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="contact-course" className="sr-only">Výběr kurzu</label>
                <select
                  id="contact-course"
                  name="course"
                  className="w-full appearance-none border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-white"
                >
                  <option value="" className="bg-neutral-900 text-gray-light">Vyberte kurz (volitelné)</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title} className="bg-neutral-900 text-white">
                      {c.title} – {c.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">Zpráva</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Zpráva *"
                  rows={3}
                  className="w-full resize-y border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-xs text-gray">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-white"
                  />
                  <span>
                    Souhlasím se{" "}
                    <a
                      href={siteConfig.legal.privacy}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="underline transition-colors hover:text-white"
                    >
                      zpracováním osobních údajů
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-400">{errors.consent}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  {errorMsg || "Něco se pokazilo. Zkuste to prosím znovu."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 flex items-center gap-2 self-start text-sm font-semibold text-white disabled:opacity-50"
              >
                {status === "loading" ? "Odesílání..." : "Odeslat přihlášku"}
                <IconCircle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
