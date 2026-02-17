import { db } from "@/db";
import { courses } from "@/db/schema";
import { FaqForm } from "@/components/admin/FaqForm";
import { createFaq } from "../actions";

export default async function NewFaqPage() {
  const allCourses = await db
    .select({ id: courses.id, title: courses.title })
    .from(courses);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nová FAQ otázka</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <FaqForm action={createFaq} courses={allCourses} />
      </div>
    </div>
  );
}
