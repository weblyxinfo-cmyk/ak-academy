"use server";

import { db } from "@/db";
import { faqItems } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createFaq(formData: FormData) {
  const courseIdRaw = formData.get("courseId") as string;
  await db.insert(faqItems).values({
    question: formData.get("question") as string,
    answer: formData.get("answer") as string,
    category: (formData.get("category") as string) || null,
    courseId: courseIdRaw ? Number(courseIdRaw) : null,
    sortOrder: Number(formData.get("sortOrder") || 0),
  });

  revalidatePath("/", "layout");
  redirect("/admin/faq");
}

export async function updateFaq(id: number, formData: FormData) {
  const courseIdRaw = formData.get("courseId") as string;
  await db
    .update(faqItems)
    .set({
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
      category: (formData.get("category") as string) || null,
      courseId: courseIdRaw ? Number(courseIdRaw) : null,
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(faqItems.id, id));

  revalidatePath("/", "layout");
  redirect("/admin/faq");
}

export async function deleteFaq(id: number) {
  await db.delete(faqItems).where(eq(faqItems.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/faq");
}
