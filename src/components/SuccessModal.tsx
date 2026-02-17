"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import confetti from "canvas-confetti";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        padding: "1rem",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          zIndex: 10,
          display: "flex",
          width: "2.5rem",
          height: "2.5rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid #444",
          background: "transparent",
          color: "#aaa",
          cursor: "pointer",
        }}
        aria-label="Zavřít"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem",
          borderRadius: "0.5rem",
          border: "1px solid #333",
          backgroundColor: "#171717",
          padding: "3rem 2.5rem",
          textAlign: "center",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        <h3 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#fff", margin: 0 }}>
          Děkujeme!
        </h3>
        <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#999", lineHeight: 1.6 }}>
          Vaše přihláška byla odeslána.<br />Ozveme se vám co nejdříve s detaily kurzu.
        </p>
      </div>
    </div>,
    document.body
  );
}
