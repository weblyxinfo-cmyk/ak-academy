"use client";

import { AdminFormField } from "./AdminFormField";
import { SubmitButton } from "./SubmitButton";

interface LocationFormProps {
  action: (formData: FormData) => Promise<void>;
  isNew?: boolean;
  defaultValues?: {
    id?: string;
    city?: string;
    address?: string;
    zip?: string;
    transport?: string | null;
    isMain?: boolean;
    sortOrder?: number;
  };
}

export function LocationForm({ action, isNew, defaultValues }: LocationFormProps) {
  return (
    <form action={action} className="space-y-6">
      {isNew && (
        <AdminFormField
          label="ID"
          name="id"
          required
          defaultValue={defaultValues?.id}
          placeholder="praha-1"
        />
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Město"
          name="city"
          required
          defaultValue={defaultValues?.city}
          placeholder="Praha 1"
        />
        <AdminFormField
          label="Adresa"
          name="address"
          required
          defaultValue={defaultValues?.address}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="PSČ"
          name="zip"
          required
          defaultValue={defaultValues?.zip}
        />
        <AdminFormField
          label="Řazení"
          name="sortOrder"
          type="number"
          defaultValue={defaultValues?.sortOrder || 0}
        />
      </div>

      <AdminFormField
        label="Doprava"
        name="transport"
        type="textarea"
        defaultValue={defaultValues?.transport || ""}
        rows={3}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isMain"
          name="isMain"
          defaultChecked={defaultValues?.isMain}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="isMain" className="text-sm text-gray-700">
          Hlavní pobočka
        </label>
      </div>

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
