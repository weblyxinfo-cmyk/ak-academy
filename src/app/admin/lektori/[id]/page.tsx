import { notFound } from "next/navigation";
import { db } from "@/db";
import { instructors } from "@/db/schema";
import { eq } from "drizzle-orm";
import { InstructorForm } from "@/components/admin/InstructorForm";
import { updateInstructor } from "../actions";

export default async function EditInstructorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [instructor] = await db
    .select()
    .from(instructors)
    .where(eq(instructors.id, Number(id)))
    .limit(1);

  if (!instructor) notFound();

  const action = updateInstructor.bind(null, instructor.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Upravit lektora: {instructor.name}
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <InstructorForm action={action} defaultValues={instructor} />
      </div>
    </div>
  );
}
