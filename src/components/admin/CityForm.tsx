"use client";

import { AdminFormField } from "./AdminFormField";
import { StringArrayInput } from "./StringArrayInput";
import { SubmitButton } from "./SubmitButton";

interface CityFormProps {
  action: (formData: FormData) => Promise<void>;
  isNew?: boolean;
  defaultValues?: {
    slug?: string;
    name?: string;
    nameLocativ?: string;
    locationIds?: string[];
    seoTitle?: string;
    seoDescription?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    whyText?: string;
    sortOrder?: number;
  };
}

export function CityForm({ action, isNew, defaultValues }: CityFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-3">
        {isNew && (
          <AdminFormField
            label="Slug"
            name="slug"
            required
            defaultValue={defaultValues?.slug}
            placeholder="praha"
          />
        )}
        <AdminFormField
          label="Název"
          name="name"
          required
          defaultValue={defaultValues?.name}
          placeholder="Praha"
        />
        <AdminFormField
          label="Název (lokativ)"
          name="nameLocativ"
          required
          defaultValue={defaultValues?.nameLocativ}
          placeholder="Praze"
        />
        <AdminFormField
          label="Řazení"
          name="sortOrder"
          type="number"
          defaultValue={defaultValues?.sortOrder || 0}
        />
      </div>

      <StringArrayInput
        name="locationIds"
        label="ID lokací"
        defaultValue={defaultValues?.locationIds || []}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="SEO Title"
          name="seoTitle"
          required
          defaultValue={defaultValues?.seoTitle}
        />
        <AdminFormField
          label="SEO Description"
          name="seoDescription"
          required
          defaultValue={defaultValues?.seoDescription}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Hero Title"
          name="heroTitle"
          required
          defaultValue={defaultValues?.heroTitle}
        />
        <AdminFormField
          label="Hero Subtitle"
          name="heroSubtitle"
          required
          defaultValue={defaultValues?.heroSubtitle}
        />
      </div>

      <AdminFormField
        label="Why text"
        name="whyText"
        type="textarea"
        required
        defaultValue={defaultValues?.whyText}
        rows={6}
      />

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
