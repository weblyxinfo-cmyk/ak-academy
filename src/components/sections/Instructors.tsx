import Image from "next/image";
import { instructors } from "@/lib/data";

export function Instructors() {
  return (
    <section id="instructors" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Naši lektoři
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray">
          Učte se od těch nejlepších v oboru
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(46,184,166,0.15)]"
            >
              <div className="flex flex-col items-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-accent/30 transition-all duration-300 group-hover:border-accent/60">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">{inst.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent">{inst.role}</p>
                <p className="mt-1 text-xs text-gray">{inst.experience}</p>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-center text-sm leading-relaxed text-gray">
                  {inst.bio}
                </p>
              </div>

              {inst.instagram && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={inst.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
