"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface StringArrayInputProps {
  name: string;
  label: string;
  defaultValue?: string[];
}

export function StringArrayInput({
  name,
  label,
  defaultValue = [],
}: StringArrayInputProps) {
  const [items, setItems] = useState<string[]>(defaultValue);
  const [input, setInput] = useState("");

  const addItem = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setItems([...items, trimmed]);
      setInput("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input type="hidden" name={name} value={JSON.stringify(items)} />
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
          >
            <span className="flex-1">{item}</span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="shrink-0 text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addItem();
              }
            }}
            placeholder="Přidat položku..."
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <button
            type="button"
            onClick={addItem}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
