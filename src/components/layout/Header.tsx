"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/data";
import { MobileMenu } from "./MobileMenu";
import type { NavItem } from "@/types";

function resolveHref(href: string, isHome: boolean) {
  if (href.startsWith("#")) {
    return isHome ? href : `/${href}`;
  }
  return href;
}

function DesktopDropdown({ item, isHome }: { item: NavItem; isHome: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={resolveHref(item.href, isHome)}
        className="flex items-center gap-1 text-sm font-medium text-gray transition-colors hover:text-white"
      >
        {item.label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>

      {open && item.children && (
        <div className="absolute left-0 top-full z-50 min-w-[180px] rounded-lg border border-border bg-bg p-2 pt-3 shadow-xl before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
          {item.children.map((child) => (
            <a
              key={child.href}
              href={child.href}
              className="block rounded-md px-3 py-2 text-sm text-gray transition-colors hover:bg-bg-card hover:text-white"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg">
        <div className="container flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="relative shrink-0">
              <Image
                src="/images/logo-academy-black.jpeg"
                alt="AK BARBERS Academy"
                width={64}
                height={64}
                className="h-14 w-14 rounded-full object-cover"
                priority
              />
            </Link>
            <a
              href={siteConfig.parentUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hidden text-xs text-gray transition-colors hover:text-white sm:block"
            >
              &larr; AK BARBERS
            </a>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} isHome={isHome} />
              ) : (
                <a
                  key={item.href}
                  href={resolveHref(item.href, isHome)}
                  className="text-sm font-medium text-gray transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-6">
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
        isHome={isHome}
      />
    </>
  );
}
