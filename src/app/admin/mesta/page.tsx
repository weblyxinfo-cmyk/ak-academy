import Link from "next/link";
import { db } from "@/db";
import { cities } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteCity } from "./actions";

export default async function CitiesListPage() {
  const all = await db.select().from(cities).orderBy(asc(cities.sortOrder));

  return (
    <div>
      <AdminPageHeader
        title="Města"
        actionLabel="Nové město"
        actionHref="/admin/mesta/nove"
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Slug</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Název</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Lokace</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Akce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((city) => (
              <tr key={city.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-500">{city.slug}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{city.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{city.locationIds.join(", ")}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/mesta/${city.slug}`} className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">Upravit</Link>
                    <AdminDeleteButton action={deleteCity.bind(null, city.slug)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
