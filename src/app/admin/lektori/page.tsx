import Link from "next/link";
import { db } from "@/db";
import { instructors } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { deleteInstructor } from "./actions";

export default async function InstructorsListPage() {
  const all = await db
    .select()
    .from(instructors)
    .orderBy(asc(instructors.sortOrder));

  return (
    <div>
      <AdminPageHeader
        title="Lektoři"
        actionLabel="Nový lektor"
        actionHref="/admin/lektori/novy"
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Jméno</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Zkušenosti</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Akce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((inst) => (
              <tr key={inst.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{inst.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{inst.role}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{inst.experience}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/lektori/${inst.id}`} className="rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">Upravit</Link>
                    <AdminDeleteButton action={deleteInstructor.bind(null, inst.id)} />
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
