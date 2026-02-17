import { db } from "@/db";
import { signups } from "@/db/schema";
import { desc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { MarkReadButton } from "@/components/admin/MarkReadButton";
import { markSignupAsRead, markSignupAsUnread } from "./actions";

export default async function SignupsPage() {
  const all = await db.select().from(signups).orderBy(desc(signups.createdAt));

  return (
    <div>
      <AdminPageHeader title="Přihlášky" />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Datum</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Jméno</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Telefon</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kurz</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Město</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Stav</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {all.map((s) => (
              <tr
                key={s.id}
                className={s.isRead ? "bg-white" : "bg-orange-50"}
              >
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(s.createdAt).toLocaleString("cs-CZ")}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {s.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{s.email}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{s.phone}</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {s.course || "–"}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {s.city || "–"}
                </td>
                <td className="px-4 py-3 text-sm">
                  {s.isRead ? (
                    <MarkReadButton
                      action={markSignupAsUnread.bind(null, s.id)}
                      label="Označit jako nepřečtené"
                      variant="unread"
                    />
                  ) : (
                    <MarkReadButton
                      action={markSignupAsRead.bind(null, s.id)}
                      label="Přečteno"
                      variant="read"
                    />
                  )}
                </td>
              </tr>
            ))}
            {all.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-500">
                  Žádné přihlášky
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
