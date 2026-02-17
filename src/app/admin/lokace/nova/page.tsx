import { LocationForm } from "@/components/admin/LocationForm";
import { createLocation } from "../actions";

export default function NewLocationPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nová lokace</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <LocationForm action={createLocation} isNew />
      </div>
    </div>
  );
}
