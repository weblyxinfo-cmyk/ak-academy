"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ label = "Uložit" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
    >
      {pending ? "Ukládání..." : label}
    </button>
  );
}
