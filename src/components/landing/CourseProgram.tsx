"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProgramWeek } from "@/types";

interface CourseProgramProps {
  weeks: ProgramWeek[];
}

export function CourseProgram({ weeks }: CourseProgramProps) {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {weeks.map((week, i) => {
        const isOpen = openWeek === i;

        return (
          <div key={week.week} className="border-b border-border">
            <button
              onClick={() => setOpenWeek(isOpen ? null : i)}
              className="flex w-full items-center gap-4 py-5 text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-card text-sm font-bold text-accent">
                {week.week}
              </span>
              <span className="flex-1 text-base font-semibold text-white sm:text-lg">
                {week.title}
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
                  <ul className="space-y-2 pb-5 pl-14">
                    {week.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-gray"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
