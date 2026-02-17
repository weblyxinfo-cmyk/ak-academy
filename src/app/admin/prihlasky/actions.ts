"use server";

import { db } from "@/db";
import { signups } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function markSignupAsRead(id: number) {
  await db.update(signups).set({ isRead: true }).where(eq(signups.id, id));
  revalidatePath("/admin/prihlasky");
}

export async function markSignupAsUnread(id: number) {
  await db.update(signups).set({ isRead: false }).where(eq(signups.id, id));
  revalidatePath("/admin/prihlasky");
}
