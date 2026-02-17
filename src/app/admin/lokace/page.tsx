import Link from "next/link";
import { db } from "@/db";
import { locations } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteLocation } from "./actions";

export default async function LocationsListPage() {
  const all = await db
    .select()
    .from(locations)
    .orderBy(asc(locations.sortOrder));

  return (
    <div>
      <AdminPageHeader
        title="Lokace"
        actionLabel="Nová lokace"
        actionHref="/admin/lokace/nova"
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Město</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Adresa</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Hlavní</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Akce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((loc) => (
              <tr key={loc.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-500">{loc.id}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{loc.city}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{loc.address}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{loc.isMain ? "Ano" : ""}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/lokace/${loc.id}`} className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">Upravit</Link>
                    <AdminDeleteButton action={deleteLocation.bind(null, loc.id)} />
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
