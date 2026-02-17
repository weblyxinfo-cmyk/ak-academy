"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Users,
  MapPin,
  Building2,
  Star,
  HelpCircle,
  GitCompare,
  FileText,
  Mail,
  LayoutDashboard,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/kurzy", label: "Kurzy", icon: BookOpen },
  { href: "/admin/lektori", label: "Lektoři", icon: Users },
  { href: "/admin/lokace", label: "Lokace", icon: MapPin },
  { href: "/admin/mesta", label: "Města", icon: Building2 },
  { href: "/admin/reference", label: "Reference", icon: Star },
  { href: "/admin/faq", label: "FAQ", icon: HelpCircle },
  { href: "/admin/porovnani", label: "Porovnání", icon: GitCompare },
  { href: "/admin/prihlasky", label: "Přihlášky", icon: FileText },
  { href: "/admin/kontakty", label: "Kontakty", icon: Mail },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-4">
        <Link href="/admin" className="text-lg font-bold text-gray-900">
          AK Academy
        </Link>
        <p className="text-xs text-gray-500">Admin Panel</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
