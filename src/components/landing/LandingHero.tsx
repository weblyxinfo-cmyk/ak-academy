import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";

interface TrustBadge {
  text: string;
}

interface LandingHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  price?: string;
  trustBadges?: TrustBadge[];
}

export function LandingHero({
  title,
  subtitle,
  ctaText = "Přihlásit se",
  ctaHref = "#signup",
  secondaryCtaText,
  secondaryCtaHref,
  price,
  trustBadges,
}: LandingHeroProps) {
  return (
    <section className="relative flex min-h-[50svh] items-center justify-center overflow-hidden border-b border-border sm:min-h-[70vh]">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 px-6 py-16 text-center sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray sm:mt-6 sm:text-lg">
          {subtitle}
        </p>

        {price && (
          <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {price}
          </p>
        )}

        {trustBadges && trustBadges.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge) => (
              <span
                key={badge.text}
                className="rounded-full border border-accent/70 bg-accent/20 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_12px_rgba(46,184,166,0.3)] backdrop-blur-sm"
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href={ctaHref}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray sm:bg-transparent sm:p-0 sm:text-white sm:hover:bg-transparent"
          >
            {ctaText}
            <IconCircle />
          </a>
          {secondaryCtaText && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              className="text-sm font-medium text-gray transition-colors hover:text-white"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
