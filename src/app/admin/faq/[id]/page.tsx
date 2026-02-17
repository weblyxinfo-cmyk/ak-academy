import { notFound } from "next/navigation";
import { db } from "@/db";
import { faqItems, courses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { FaqForm } from "@/components/admin/FaqForm";
import { updateFaq } from "../actions";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [faq] = await db
    .select()
    .from(faqItems)
    .where(eq(faqItems.id, Number(id)))
    .limit(1);

  if (!faq) notFound();

  const allCourses = await db
    .select({ id: courses.id, title: courses.title })
    .from(courses);

  const action = updateFaq.bind(null, faq.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Upravit FAQ</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <FaqForm action={action} courses={allCourses} defaultValues={faq} />
      </div>
    </div>
  );
}
