import { CityForm } from "@/components/admin/CityForm";
import { createCity } from "../actions";

export default function NewCityPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nové město</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <CityForm action={createCity} isNew />
      </div>
    </div>
  );
}
