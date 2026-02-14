"use client";

import { useEffect } from "react";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavItem[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-bg">
      <div className="container flex h-[72px] items-center justify-end">
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-white"
          aria-label="Zavřít menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="container flex flex-col gap-2 pt-8">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-border py-4 text-2xl font-semibold text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
