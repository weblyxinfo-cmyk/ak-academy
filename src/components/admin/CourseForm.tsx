"use client";

import { useState } from "react";
import { AdminFormField } from "./AdminFormField";
import { StringArrayInput } from "./StringArrayInput";
import { SubmitButton } from "./SubmitButton";
import { Plus, X } from "lucide-react";

interface ProgramWeek {
  week: number;
  title: string;
  topics: string[];
}

interface CourseFormProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    slug?: string;
    title?: string;
    level?: string;
    duration?: string;
    hours?: number;
    price?: string;
    priceNum?: number;
    image?: string;
    description?: string;
    longDescription?: string | null;
    highlights?: string[];
    forWho?: string[] | null;
    includes?: string[] | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    sortOrder?: number;
    programWeeks?: ProgramWeek[];
  };
}

export function CourseForm({ action, defaultValues }: CourseFormProps) {
  const [weeks, setWeeks] = useState<ProgramWeek[]>(
    defaultValues?.programWeeks || []
  );

  const addWeek = () => {
    setWeeks([
      ...weeks,
      { week: weeks.length + 1, title: "", topics: [] },
    ]);
  };

  const removeWeek = (index: number) => {
    setWeeks(weeks.filter((_, i) => i !== index));
  };

  const updateWeekTitle = (index: number, title: string) => {
    const updated = [...weeks];
    updated[index] = { ...updated[index], title };
    setWeeks(updated);
  };

  const updateWeekTopics = (index: number, topics: string[]) => {
    const updated = [...weeks];
    updated[index] = { ...updated[index], topics };
    setWeeks(updated);
  };

  return (
    <form action={action} className="space-y-6">
      <input
        type="hidden"
        name="programWeeks"
        value={JSON.stringify(weeks)}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Název"
          name="title"
          required
          defaultValue={defaultValues?.title}
        />
        <AdminFormField
          label="Slug (URL)"
          name="slug"
          required
          defaultValue={defaultValues?.slug}
          placeholder="mesicni-kurz"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <AdminFormField label="Úroveň" name="level" required>
          <select
            id="level"
            name="level"
            defaultValue={defaultValues?.level || "beginner"}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            <option value="beginner">Začátečník</option>
            <option value="advanced">Pokročilý</option>
            <option value="masterclass">Masterclass</option>
          </select>
        </AdminFormField>
        <AdminFormField
          label="Délka"
          name="duration"
          required
          defaultValue={defaultValues?.duration}
          placeholder="180 hodin"
        />
        <AdminFormField
          label="Počet hodin"
          name="hours"
          type="number"
          required
          defaultValue={defaultValues?.hours}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <AdminFormField
          label="Cena (text)"
          name="price"
          required
          defaultValue={defaultValues?.price}
          placeholder="35 000 Kč"
        />
        <AdminFormField
          label="Cena (číslo)"
          name="priceNum"
          type="number"
          required
          defaultValue={defaultValues?.priceNum}
        />
        <AdminFormField
          label="Řazení"
          name="sortOrder"
          type="number"
          defaultValue={defaultValues?.sortOrder || 0}
        />
      </div>

      <AdminFormField
        label="Obrázek (URL)"
        name="image"
        required
        defaultValue={defaultValues?.image}
      />

      <AdminFormField
        label="Krátký popis"
        name="description"
        type="textarea"
        required
        defaultValue={defaultValues?.description}
        rows={3}
      />

      <AdminFormField
        label="Dlouhý popis"
        name="longDescription"
        type="textarea"
        defaultValue={defaultValues?.longDescription || ""}
        rows={6}
      />

      <StringArrayInput
        name="highlights"
        label="Highlights"
        defaultValue={defaultValues?.highlights || []}
      />

      <StringArrayInput
        name="forWho"
        label="Pro koho je kurz"
        defaultValue={defaultValues?.forWho || []}
      />

      <StringArrayInput
        name="includes"
        label="Co je v ceně"
        defaultValue={defaultValues?.includes || []}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <AdminFormField
          label="Meta title"
          name="metaTitle"
          defaultValue={defaultValues?.metaTitle || ""}
        />
        <AdminFormField
          label="Meta description"
          name="metaDescription"
          defaultValue={defaultValues?.metaDescription || ""}
        />
      </div>

      {/* Program weeks */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Program kurzu (týdny)
          </label>
          <button
            type="button"
            onClick={addWeek}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
          >
            <Plus className="h-3 w-3" /> Přidat týden
          </button>
        </div>
        <div className="space-y-4">
          {weeks.map((week, idx) => (
            <WeekEditor
              key={idx}
              week={week}
              index={idx}
              onTitleChange={(title) => updateWeekTitle(idx, title)}
              onTopicsChange={(topics) => updateWeekTopics(idx, topics)}
              onRemove={() => removeWeek(idx)}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}

function WeekEditor({
  week,
  index,
  onTitleChange,
  onTopicsChange,
  onRemove,
}: {
  week: ProgramWeek;
  index: number;
  onTitleChange: (title: string) => void;
  onTopicsChange: (topics: string[]) => void;
  onRemove: () => void;
}) {
  const [topicInput, setTopicInput] = useState("");

  const addTopic = () => {
    const trimmed = topicInput.trim();
    if (trimmed) {
      onTopicsChange([...week.topics, trimmed]);
      setTopicInput("");
    }
  };

  const removeTopic = (topicIdx: number) => {
    onTopicsChange(week.topics.filter((_, i) => i !== topicIdx));
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          Týden {index + 1}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <input
        type="text"
        value={week.title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Název týdne"
        className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
      />
      <div className="space-y-2">
        {week.topics.map((topic, tIdx) => (
          <div
            key={tIdx}
            className="flex items-start gap-2 rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
          >
            <span className="flex-1">{topic}</span>
            <button
              type="button"
              onClick={() => removeTopic(tIdx)}
              className="shrink-0 text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTopic();
              }
            }}
            placeholder="Přidat téma..."
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={addTopic}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
