import Link from "next/link";
import { db } from "@/db";
import { courses, instructors, locations, signups, contacts } from "@/db/schema";
import { eq, count } from "drizzle-orm";
import {
  BookOpen,
  Users,
  MapPin,
  FileText,
  Mail,
} from "lucide-react";

export default async function AdminDashboard() {
  const [courseCount] = await db.select({ count: count() }).from(courses);
  const [instructorCount] = await db.select({ count: count() }).from(instructors);
  const [locationCount] = await db.select({ count: count() }).from(locations);
  const [unreadSignups] = await db
    .select({ count: count() })
    .from(signups)
    .where(eq(signups.isRead, false));
  const [unreadContacts] = await db
    .select({ count: count() })
    .from(contacts)
    .where(eq(contacts.isRead, false));

  const stats = [
    {
      label: "Kurzy",
      value: courseCount.count,
      icon: BookOpen,
      href: "/admin/kurzy",
    },
    {
      label: "Lektoři",
      value: instructorCount.count,
      icon: Users,
      href: "/admin/lektori",
    },
    {
      label: "Lokace",
      value: locationCount.count,
      icon: MapPin,
      href: "/admin/lokace",
    },
    {
      label: "Nepřečtené přihlášky",
      value: unreadSignups.count,
      icon: FileText,
      href: "/admin/prihlasky",
      highlight: unreadSignups.count > 0,
    },
    {
      label: "Nepřečtené kontakty",
      value: unreadContacts.count,
      icon: Mail,
      href: "/admin/kontakty",
      highlight: unreadContacts.count > 0,
    },
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className={`rounded-xl border p-6 transition-colors hover:bg-gray-50 ${
              stat.highlight
                ? "border-orange-200 bg-orange-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <stat.icon
                className={`h-5 w-5 ${
                  stat.highlight ? "text-orange-600" : "text-gray-400"
                }`}
              />
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
            <p
              className={`mt-2 text-3xl font-bold ${
                stat.highlight ? "text-orange-600" : "text-gray-900"
              }`}
            >
              {stat.value}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
