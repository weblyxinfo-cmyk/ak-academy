"use client";

import { useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [onClose]);

  useEffect(() => {
    if (!open || !canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, { resize: true });

    const shoot = () => {
      myConfetti({ particleCount: 80, spread: 70, origin: { x: 0.3, y: 0.5 } });
      myConfetti({ particleCount: 80, spread: 70, origin: { x: 0.7, y: 0.5 } });
    };

    shoot();
    const t1 = setTimeout(shoot, 600);
    const t2 = setTimeout(shoot, 1400);
    const t3 = setTimeout(shoot, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      myConfetti.reset();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative w-full max-w-md rounded-lg border border-border bg-neutral-900 p-10 text-center shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray transition-colors hover:text-white"
          aria-label="Zavřít"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h3 className="text-4xl font-bold text-white">Děkujeme!</h3>
        <p className="mt-6 text-lg text-gray">
          Vaše přihláška byla odeslána. Ozveme se vám co nejdříve s detaily kurzu.
        </p>
      </div>
    </div>
  );
}
