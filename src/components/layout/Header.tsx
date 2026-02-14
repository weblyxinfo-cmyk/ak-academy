"use client";

import { useState } from "react";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg">
        <div className="container flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="relative h-12 w-auto shrink-0">
              <Image
                src="/images/logo.svg"
                alt="AK BARBERS Academy"
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </a>
            <a
              href={siteConfig.parentUrl}
              className="hidden text-xs text-gray transition-colors hover:text-white sm:block"
            >
              &larr; AK BARBERS
            </a>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              Přihlásit se
              <IconCircle />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden text-sm font-medium text-gray transition-colors hover:text-white lg:block"
            >
              {siteConfig.phone}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navItems}
      />
    </>
  );
}
