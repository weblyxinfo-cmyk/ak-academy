"use client";

import { AdminFormField } from "./AdminFormField";
import { SubmitButton } from "./SubmitButton";

interface InstructorFormProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    name?: string;
    role?: string;
    experience?: string;
    focus?: string;
    bio?: string;
    longBio?: string | null;
    image?: string;
    instagram?: string | null;
    sortOrder?: number;
  };
}

export function InstructorForm({ action, defaultValues }: InstructorFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Jméno"
          name="name"
          required
          defaultValue={defaultValues?.name}
        />
        <AdminFormField
          label="Role"
          name="role"
          required
          defaultValue={defaultValues?.role}
          placeholder="Lektor"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Zkušenosti"
          name="experience"
          required
          defaultValue={defaultValues?.experience}
          placeholder="20 let zkušeností"
        />
        <AdminFormField
          label="Zaměření"
          name="focus"
          required
          defaultValue={defaultValues?.focus}
        />
      </div>

      <AdminFormField
        label="Krátký bio"
        name="bio"
        type="textarea"
        required
        defaultValue={defaultValues?.bio}
        rows={3}
      />

      <AdminFormField
        label="Dlouhý bio"
        name="longBio"
        type="textarea"
        defaultValue={defaultValues?.longBio || ""}
        rows={5}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <AdminFormField
          label="Obrázek (cesta)"
          name="image"
          required
          defaultValue={defaultValues?.image}
          placeholder="/images/instructors/name.jpg"
        />
        <AdminFormField
          label="Instagram"
          name="instagram"
          defaultValue={defaultValues?.instagram || ""}
          placeholder="https://instagram.com/..."
        />
        <AdminFormField
          label="Řazení"
          name="sortOrder"
          type="number"
          defaultValue={defaultValues?.sortOrder || 0}
        />
      </div>

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
