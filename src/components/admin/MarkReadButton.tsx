"use client";

import { useTransition } from "react";

interface MarkReadButtonProps {
  action: () => Promise<void>;
  label: string;
  variant: "read" | "unread";
}

export function MarkReadButton({ action, label, variant }: MarkReadButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => action())}
      className={`rounded px-2 py-1 text-xs transition-colors disabled:opacity-50 ${
        variant === "read"
          ? "bg-green-100 text-green-700 hover:bg-green-200"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {isPending ? "..." : label}
    </button>
  );
}
