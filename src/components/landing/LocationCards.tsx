import type { Location } from "@/types";

interface LocationCardsProps {
  locations: Location[];
}

export function LocationCards({ locations }: LocationCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="group relative overflow-hidden rounded-xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(46,184,166,0.15)]"
        >
          <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-accent">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" fill="#141414" stroke="none" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white">
                {loc.city}
                {loc.isMain && (
                  <span className="ml-2 text-xs font-normal text-accent">Hlavní pobočka</span>
                )}
              </p>
              <p className="mt-1 text-sm text-gray">{loc.address}</p>
              <p className="text-sm text-gray-light">{loc.zip}</p>
              {loc.transport && (
                <p className="mt-2 text-xs text-gray-light">{loc.transport}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
