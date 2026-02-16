"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-bg-card/95 px-6 py-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1 text-sm leading-relaxed text-gray">
          Tento web používá soubory cookie pro zajištění správného fungování a
          zlepšení vašeho zážitku.{" "}
          <a
            href={siteConfig.legal.cookies}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-white"
          >
            Více informací
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border border-border px-4 py-2 text-sm text-gray transition-colors hover:border-gray-light hover:text-white"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
}
