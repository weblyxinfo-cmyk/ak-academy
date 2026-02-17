import Link from "next/link";
import { db } from "@/db";
import { faqItems, courses } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteFaq } from "./actions";

export default async function FaqListPage() {
  const all = await db.select().from(faqItems).orderBy(asc(faqItems.sortOrder));
  const allCourses = await db.select({ id: courses.id, title: courses.title }).from(courses);
  const courseMap = Object.fromEntries(allCourses.map((c) => [c.id, c.title]));

  return (
    <div>
      <AdminPageHeader title="FAQ" actionLabel="Nová otázka" actionHref="/admin/faq/nova" />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Otázka</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategorie</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kurz</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Akce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((faq) => (
              <tr key={faq.id} className="hover:bg-gray-50">
                <td className="max-w-xs truncate px-4 py-3 text-sm font-medium text-gray-900">{faq.question}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{faq.category || "–"}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{faq.courseId ? courseMap[faq.courseId] || "–" : "Obecná"}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/faq/${faq.id}`} className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">Upravit</Link>
                    <AdminDeleteButton action={deleteFaq.bind(null, faq.id)} />
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
