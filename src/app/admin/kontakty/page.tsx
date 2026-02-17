import { db } from "@/db";
import { contacts } from "@/db/schema";
import { desc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { MarkReadButton } from "@/components/admin/MarkReadButton";
import { markContactAsRead, markContactAsUnread } from "./actions";

export default async function ContactsPage() {
  const all = await db
    .select()
    .from(contacts)
    .orderBy(desc(contacts.createdAt));

  return (
    <div>
      <AdminPageHeader title="Kontakty" />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Datum</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Jméno</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kurz</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Zpráva</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Stav</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((c) => (
              <tr
                key={c.id}
                className={c.isRead ? "bg-white" : "bg-orange-50"}
              >
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(c.createdAt).toLocaleString("cs-CZ")}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {c.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{c.email}</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {c.course || "–"}
                </td>
                <td className="max-w-xs truncate px-4 py-3 text-sm text-gray-500">
                  {c.message}
                </td>
                <td className="px-4 py-3 text-sm">
                  {c.isRead ? (
                    <MarkReadButton
                      action={markContactAsUnread.bind(null, c.id)}
                      label="Označit jako nepřečtené"
                      variant="unread"
                    />
                  ) : (
                    <MarkReadButton
                      action={markContactAsRead.bind(null, c.id)}
                      label="Přečteno"
                      variant="read"
                    />
                  )}
                </td>
              </tr>
            ))}
            {all.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500">
                  Žádné kontakty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
