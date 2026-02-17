"use client";

import { AdminFormField } from "./AdminFormField";
import { SubmitButton } from "./SubmitButton";

interface FaqFormProps {
  action: (formData: FormData) => Promise<void>;
  courses: { id: number; title: string }[];
  defaultValues?: {
    question?: string;
    answer?: string;
    category?: string | null;
    courseId?: number | null;
    sortOrder?: number;
  };
}

export function FaqForm({ action, courses, defaultValues }: FaqFormProps) {
  return (
    <form action={action} className="space-y-6">
      <AdminFormField label="Otázka" name="question" required defaultValue={defaultValues?.question} />

      <AdminFormField label="Odpověď" name="answer" type="textarea" required defaultValue={defaultValues?.answer} rows={5} />

      <div className="grid gap-6 sm:grid-cols-3">
        <AdminFormField label="Kategorie" name="category" defaultValue={defaultValues?.category || ""} placeholder="obecne" />

        <AdminFormField label="Kurz (volitelné)" name="courseId">
          <select
            id="courseId"
            name="courseId"
            defaultValue={defaultValues?.courseId || ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            <option value="">Obecná otázka</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </AdminFormField>

        <AdminFormField label="Řazení" name="sortOrder" type="number" defaultValue={defaultValues?.sortOrder || 0} />
      </div>

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
