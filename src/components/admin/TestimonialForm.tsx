"use client";

import { AdminFormField } from "./AdminFormField";
import { SubmitButton } from "./SubmitButton";

interface TestimonialFormProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    name?: string;
    course?: string;
    rating?: number;
    text?: string;
    city?: string | null;
    isVisible?: boolean;
    sortOrder?: number;
  };
}

export function TestimonialForm({ action, defaultValues }: TestimonialFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField label="Jméno" name="name" required defaultValue={defaultValues?.name} />
        <AdminFormField label="Kurz" name="course" required defaultValue={defaultValues?.course} placeholder="Měsíční kurz" />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <AdminFormField label="Hodnocení (1-5)" name="rating" type="number" required defaultValue={defaultValues?.rating || 5} />
        <AdminFormField label="Město" name="city" defaultValue={defaultValues?.city || ""} placeholder="praha" />
        <AdminFormField label="Řazení" name="sortOrder" type="number" defaultValue={defaultValues?.sortOrder || 0} />
      </div>

      <AdminFormField label="Text" name="text" type="textarea" required defaultValue={defaultValues?.text} rows={4} />

      <div className="flex items-center gap-2">
        <input type="checkbox" id="isVisible" name="isVisible" defaultChecked={defaultValues?.isVisible ?? true} className="h-4 w-4 rounded border-gray-300" />
        <label htmlFor="isVisible" className="text-sm text-gray-700">Viditelná</label>
      </div>

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
