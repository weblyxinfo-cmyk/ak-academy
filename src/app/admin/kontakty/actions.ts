"use server";

import { db } from "@/db";
import { contacts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function markContactAsRead(id: number) {
  await db.update(contacts).set({ isRead: true }).where(eq(contacts.id, id));
  revalidatePath("/admin/kontakty");
}

export async function markContactAsUnread(id: number) {
  await db.update(contacts).set({ isRead: false }).where(eq(contacts.id, id));
  revalidatePath("/admin/kontakty");
}
