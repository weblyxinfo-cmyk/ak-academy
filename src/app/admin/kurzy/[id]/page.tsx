import { notFound } from "next/navigation";
import { db } from "@/db";
import { courses, programWeeks } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { CourseForm } from "@/components/admin/CourseForm";
import { updateCourse } from "../actions";

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const courseId = Number(id);

  const [course] = await db
    .select()
    .from(courses)
    .where(eq(courses.id, courseId))
    .limit(1);

  if (!course) notFound();

  const weeks = await db
    .select()
    .from(programWeeks)
    .where(eq(programWeeks.courseId, courseId))
    .orderBy(asc(programWeeks.week));

  const action = updateCourse.bind(null, courseId);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Upravit kurz: {course.title}
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <CourseForm
          action={action}
          defaultValues={{
            ...course,
            programWeeks: weeks.map((w) => ({
              week: w.week,
              title: w.title,
              topics: w.topics,
            })),
          }}
        />
      </div>
    </div>
  );
}
