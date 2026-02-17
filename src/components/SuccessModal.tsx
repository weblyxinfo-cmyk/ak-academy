"use client";

import { useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Confetti
  useEffect(() => {
    if (!open || !canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, { resize: true });

    const shoot = () => {
      myConfetti({ particleCount: 80, spread: 70, origin: { x: 0.3, y: 0.5 } });
      myConfetti({ particleCount: 80, spread: 70, origin: { x: 0.7, y: 0.5 } });
    };

    const t0 = setTimeout(shoot, 300);
    const t1 = setTimeout(shoot, 900);
    const t2 = setTimeout(shoot, 1700);
    const t3 = setTimeout(shoot, 2800);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      myConfetti.reset();
    };
  }, [open]);

  const handleClose = useCallback(() => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      <button
        onClick={handleClose}
        className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border text-gray transition-colors hover:border-white hover:text-white"
        aria-label="Zavřít"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="relative w-full max-w-md rounded-lg border border-border bg-neutral-900 p-12 text-center shadow-2xl">
        <h3 className="text-4xl font-bold text-white">Děkujeme!</h3>
        <p className="mt-6 text-lg text-gray">
          Vaše přihláška byla odeslána.<br />Ozveme se vám co nejdříve s detaily kurzu.
        </p>
      </div>
    </div>
  );
}
