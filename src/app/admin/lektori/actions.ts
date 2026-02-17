"use server";

import { db } from "@/db";
import { instructors } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createInstructor(formData: FormData) {
  await db.insert(instructors).values({
    name: formData.get("name") as string,
    role: formData.get("role") as string,
    experience: formData.get("experience") as string,
    focus: formData.get("focus") as string,
    bio: formData.get("bio") as string,
    longBio: (formData.get("longBio") as string) || null,
    image: formData.get("image") as string,
    instagram: (formData.get("instagram") as string) || null,
    sortOrder: Number(formData.get("sortOrder") || 0),
  });

  revalidatePath("/", "layout");
  redirect("/admin/lektori");
}

export async function updateInstructor(id: number, formData: FormData) {
  await db
    .update(instructors)
    .set({
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      experience: formData.get("experience") as string,
      focus: formData.get("focus") as string,
      bio: formData.get("bio") as string,
      longBio: (formData.get("longBio") as string) || null,
      image: formData.get("image") as string,
      instagram: (formData.get("instagram") as string) || null,
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(instructors.id, id));

  revalidatePath("/", "layout");
  redirect("/admin/lektori");
}

export async function deleteInstructor(id: number) {
  await db.delete(instructors).where(eq(instructors.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/lektori");
}
