import Link from "next/link";
import { db } from "@/db";
import { courses } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteCourse } from "./actions";

export default async function CoursesListPage() {
  const allCourses = await db
    .select()
    .from(courses)
    .orderBy(asc(courses.sortOrder));

  return (
    <div>
      <AdminPageHeader
        title="Kurzy"
        actionLabel="Nový kurz"
        actionHref="/admin/kurzy/novy"
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Název
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Slug
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Úroveň
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Cena
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Akce
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {allCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {course.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {course.slug}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {course.level}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {course.price}
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/kurzy/${course.id}`}
                      className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50"
                    >
                      Upravit
                    </Link>
                    <AdminDeleteButton
                      action={deleteCourse.bind(null, course.id)}
                    />
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
