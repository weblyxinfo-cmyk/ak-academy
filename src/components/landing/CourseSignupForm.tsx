"use client";

import { useState, useEffect, FormEvent } from "react";
import confetti from "canvas-confetti";
import { IconCircle } from "@/components/IconCircle";
import { courses, locations, siteConfig } from "@/lib/data";

interface CourseSignupFormProps {
  defaultCourse?: string;
  defaultCity?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function CourseSignupForm({ defaultCourse, defaultCity }: CourseSignupFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const consent = form.get("consent");

    if (!name?.trim()) errs.name = "Vyplňte jméno";
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Vyplňte platný email";
    if (!phone?.trim()) errs.phone = "Vyplňte telefon";
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
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          course: formData.get("course"),
          city: formData.get("city"),
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
      console.error("Signup form error:", err);
      setErrorMsg("Nepodařilo se odeslat formulář. Zkontrolujte připojení k internetu.");
      setStatus("error");
    }
  }

  useEffect(() => {
    if (status === "success") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.3 },
      });
    }
  }, [status]);

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-lg border border-border p-12 text-center">
        <h3 className="text-3xl font-bold text-white">Děkujeme!</h3>
        <p className="mt-4 text-gray">
          Vaše přihláška byla odeslána. Ozveme se vám co nejdříve s detaily kurzu.
        </p>
      </div>
    );
  }

  const uniqueCities = [...new Set(locations.map((l) => l.city))];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl flex-col gap-4 rounded-lg border border-border p-8"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Jméno a příjmení *"
          className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Telefon *"
          className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white placeholder:text-gray-light outline-none transition-colors focus:border-white"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
      </div>

      <select
        name="course"
        defaultValue={defaultCourse || ""}
        className="w-full appearance-none border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-white"
      >
        <option value="" className="bg-neutral-900 text-gray-light">Vyberte kurz</option>
        {courses.map((c) => (
          <option key={c.id} value={c.title} className="bg-neutral-900 text-white">
            {c.title} – {c.price}
          </option>
        ))}
      </select>

      <select
        name="city"
        defaultValue={defaultCity || ""}
        className="w-full appearance-none border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-white"
      >
        <option value="" className="bg-neutral-900 text-gray-light">Preferovaná pobočka</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city} className="bg-neutral-900 text-white">
            {city}
          </option>
        ))}
      </select>

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
        {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
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
  );
}
