import { notFound } from "next/navigation";
import { db } from "@/db";
import { cities } from "@/db/schema";
import { eq } from "drizzle-orm";
import { CityForm } from "@/components/admin/CityForm";
import { updateCity } from "../actions";

export default async function EditCityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [city] = await db
    .select()
    .from(cities)
    .where(eq(cities.slug, slug))
    .limit(1);

  if (!city) notFound();

  const action = updateCity.bind(null, city.slug);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Upravit město: {city.name}
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <CityForm action={action} defaultValues={city} />
      </div>
    </div>
  );
}
