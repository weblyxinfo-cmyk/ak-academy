"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

interface AdminDeleteButtonProps {
  action: () => Promise<void>;
  label?: string;
}

export function AdminDeleteButton({
  action,
  label = "Smazat",
}: AdminDeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        if (confirm("Opravdu chcete tento záznam smazat?")) {
          startTransition(() => action());
        }
      }}
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
    >
      <Trash2 className="h-3 w-3" />
      {isPending ? "Mazání..." : label}
    </button>
  );
}
