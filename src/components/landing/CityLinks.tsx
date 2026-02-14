import { cityData } from "@/lib/data";

export function CityLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {cityData.map((city) => (
        <a
          key={city.slug}
          href={`/barber-kurz-${city.slug}`}
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
        >
          {city.name}
        </a>
      ))}
    </div>
  );
}
