"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/types";

interface CourseFAQProps {
  items: FAQItem[];
}

export function CourseFAQ({ items }: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="pr-4 text-base font-semibold text-white sm:text-lg">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-dark transition-all ${
                  isOpen ? "rotate-180 bg-white" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isOpen ? "black" : "white"}
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-gray">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
