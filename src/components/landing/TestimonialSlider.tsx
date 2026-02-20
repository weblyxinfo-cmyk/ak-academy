"use client";

import type { Testimonial } from "@/types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:mx-0 sm:gap-6 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
      {testimonials.map((t) => (
        <div
          key={t.id || t.name}
          className="min-w-[85vw] max-w-[85vw] shrink-0 snap-start rounded-lg border border-border p-6 sm:min-w-0 sm:max-w-none"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 ${i < t.rating ? "text-white" : "text-gray-dark"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="mt-4 text-sm italic leading-relaxed text-gray">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="mt-4 border-t border-border pt-4">
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-gray">{t.course}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
