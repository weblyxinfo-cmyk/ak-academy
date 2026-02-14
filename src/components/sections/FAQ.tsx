"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Často kladené otázky
        </h2>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqItems.map((item, i) => {
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

                {isOpen && (
                  <div className="pb-5">
                    <p className="text-sm leading-relaxed text-gray">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
