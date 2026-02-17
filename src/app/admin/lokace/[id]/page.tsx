import { notFound } from "next/navigation";
import { db } from "@/db";
import { locations } from "@/db/schema";
import { eq } from "drizzle-orm";
import { LocationForm } from "@/components/admin/LocationForm";
import { updateLocation } from "../actions";

export default async function EditLocationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [location] = await db
    .select()
    .from(locations)
    .where(eq(locations.id, id))
    .limit(1);

  if (!location) notFound();

  const action = updateLocation.bind(null, location.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Upravit lokaci: {location.city} – {location.address}
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <LocationForm action={action} defaultValues={location} />
      </div>
    </div>
  );
}
