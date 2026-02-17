import Link from "next/link";

interface AdminPageHeaderProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}

export function AdminPageHeader({
  title,
  actionLabel,
  actionHref,
}: AdminPageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
