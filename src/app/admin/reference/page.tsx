import Link from "next/link";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteTestimonial } from "./actions";

export default async function TestimonialsListPage() {
  const all = await db.select().from(testimonials).orderBy(asc(testimonials.sortOrder));

  return (
    <div>
      <AdminPageHeader title="Reference" actionLabel="Nová reference" actionHref="/admin/reference/nova" />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Jméno</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kurz</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Hodnocení</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Viditelná</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Akce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{t.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{t.course}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{"★".repeat(t.rating)}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{t.isVisible ? "Ano" : "Ne"}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/reference/${t.id}`} className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">Upravit</Link>
                    <AdminDeleteButton action={deleteTestimonial.bind(null, t.id)} />
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
