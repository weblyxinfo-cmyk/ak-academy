"use client";

import { useState, useEffect } from "react";

interface StickyCTAProps {
  price: string;
  ctaText?: string;
  ctaHref?: string;
}

export function StickyCTA({ price, ctaText = "Přihlásit se", ctaHref = "#signup" }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const hero = document.querySelector("[data-hero]");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg/95 backdrop-blur-sm lg:hidden">
      <div className="container flex items-center justify-between py-3">
        <p className="text-lg font-bold text-white">{price}</p>
        <a
          href={ctaHref}
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
