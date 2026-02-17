"use server";

import { db } from "@/db";
import { courses, programWeeks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCourse(formData: FormData) {
  const data = extractCourseData(formData);

  const [course] = await db
    .insert(courses)
    .values(data.course)
    .returning({ id: courses.id });

  // Insert program weeks
  const weeks = JSON.parse(
    (formData.get("programWeeks") as string) || "[]"
  ) as { week: number; title: string; topics: string[] }[];
  for (const w of weeks) {
    await db.insert(programWeeks).values({
      courseId: course.id,
      week: w.week,
      title: w.title,
      topics: w.topics,
    });
  }

  revalidatePath("/", "layout");
  redirect("/admin/kurzy");
}

export async function updateCourse(id: number, formData: FormData) {
  const data = extractCourseData(formData);

  await db.update(courses).set(data.course).where(eq(courses.id, id));

  // Replace program weeks
  await db.delete(programWeeks).where(eq(programWeeks.courseId, id));
  const weeks = JSON.parse(
    (formData.get("programWeeks") as string) || "[]"
  ) as { week: number; title: string; topics: string[] }[];
  for (const w of weeks) {
    await db.insert(programWeeks).values({
      courseId: id,
      week: w.week,
      title: w.title,
      topics: w.topics,
    });
  }

  revalidatePath("/", "layout");
  redirect("/admin/kurzy");
}

export async function deleteCourse(id: number) {
  await db.delete(courses).where(eq(courses.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/kurzy");
}

function extractCourseData(formData: FormData) {
  return {
    course: {
      slug: formData.get("slug") as string,
      title: formData.get("title") as string,
      level: formData.get("level") as string,
      duration: formData.get("duration") as string,
      hours: Number(formData.get("hours")),
      price: formData.get("price") as string,
      priceNum: Number(formData.get("priceNum")),
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      longDescription: (formData.get("longDescription") as string) || null,
      highlights: JSON.parse(
        (formData.get("highlights") as string) || "[]"
      ) as string[],
      forWho: JSON.parse(
        (formData.get("forWho") as string) || "[]"
      ) as string[],
      includes: JSON.parse(
        (formData.get("includes") as string) || "[]"
      ) as string[],
      metaTitle: (formData.get("metaTitle") as string) || null,
      metaDescription: (formData.get("metaDescription") as string) || null,
      sortOrder: Number(formData.get("sortOrder") || 0),
    },
  };
}
