"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

interface Row {
  id: number;
  feature: string;
  us: string;
  others: string;
  sortOrder: number;
}

interface ComparisonEditorProps {
  rows: Row[];
  onUpdate: (id: number, formData: FormData) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onCreate: (formData: FormData) => Promise<void>;
}

export function ComparisonEditor({
  rows,
  onUpdate,
  onDelete,
  onCreate,
}: ComparisonEditorProps) {
  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <ComparisonRowEditor
          key={row.id}
          row={row}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
      <NewRowForm onCreate={onCreate} />
    </div>
  );
}

function ComparisonRowEditor({
  row,
  onUpdate,
  onDelete,
}: {
  row: Row;
  onUpdate: (id: number, formData: FormData) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => onUpdate(row.id, formData)}
      className="flex items-end gap-3 rounded-lg border border-gray-200 bg-white p-4"
    >
      <div className="flex-1">
        <label className="mb-1 block text-xs text-gray-500">Vlastnost</label>
        <input
          name="feature"
          defaultValue={row.feature}
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-32">
        <label className="mb-1 block text-xs text-gray-500">My</label>
        <input
          name="us"
          defaultValue={row.us}
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-32">
        <label className="mb-1 block text-xs text-gray-500">Ostatní</label>
        <input
          name="others"
          defaultValue={row.others}
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-16">
        <label className="mb-1 block text-xs text-gray-500">Pořadí</label>
        <input
          name="sortOrder"
          type="number"
          defaultValue={row.sortOrder}
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-gray-900 px-3 py-1.5 text-xs text-white hover:bg-gray-800"
      >
        Uložit
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          if (confirm("Smazat tento řádek?")) {
            startTransition(() => onDelete(row.id));
          }
        }}
        className="rounded p-1.5 text-red-500 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </form>
  );
}

function NewRowForm({
  onCreate,
}: {
  onCreate: (formData: FormData) => Promise<void>;
}) {
  return (
    <form
      action={onCreate}
      className="flex items-end gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4"
    >
      <div className="flex-1">
        <label className="mb-1 block text-xs text-gray-500">Nová vlastnost</label>
        <input
          name="feature"
          required
          placeholder="Název..."
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-32">
        <label className="mb-1 block text-xs text-gray-500">My</label>
        <input
          name="us"
          required
          defaultValue="true"
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-32">
        <label className="mb-1 block text-xs text-gray-500">Ostatní</label>
        <input
          name="others"
          required
          defaultValue="false"
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div className="w-16">
        <label className="mb-1 block text-xs text-gray-500">Pořadí</label>
        <input
          name="sortOrder"
          type="number"
          defaultValue={0}
          className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-green-600 px-3 py-1.5 text-xs text-white hover:bg-green-700"
      >
        Přidat
      </button>
    </form>
  );
}
