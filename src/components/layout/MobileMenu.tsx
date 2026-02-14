"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavItem[];
  isHome: boolean;
}

function resolveHref(href: string, isHome: boolean) {
  if (href.startsWith("#")) {
    return isHome ? href : `/${href}`;
  }
  return href;
}

export function MobileMenu({ open, onClose, links, isHome }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
        {links.map((item, index) => (
          <div key={item.href}>
            {item.children ? (
              <>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex w-full items-center justify-between border-b border-border py-4"
                >
                  <span className="text-2xl font-semibold text-white">{item.label}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className={`h-5 w-5 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {expandedIndex === index && (
                  <div className="space-y-1 pb-2 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-3 text-lg text-gray transition-colors hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={resolveHref(item.href, isHome)}
                onClick={onClose}
                className="border-b border-border py-4 text-2xl font-semibold text-white block"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
