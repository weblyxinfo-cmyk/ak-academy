import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";
import { courses } from "@/lib/data";

const levelLabels: Record<string, string> = {
  beginner: "Začátečník",
  advanced: "Pokročilý",
  masterclass: "Masterclass",
};

export function Courses() {
  return (
    <section id="courses" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Naše kurzy
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray">
          Vyberte si kurz, který odpovídá vašim zkušenostem a cílům
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(46,184,166,0.15)]"
            >
              <div className="relative aspect-video">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white">
                  {levelLabels[course.level]}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="mt-1 text-sm text-gray">{course.duration}</p>
                <p className="mt-3 text-2xl font-bold text-white">{course.price}</p>
                {course.slug && (
                  <a
                    href={`/${course.slug}`}
                    className="mt-3 flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    Více o kurzu
                    <IconCircle />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-lg font-semibold text-white">
            Po absolvování kurzu máte šanci získat práci v AK Barbers
          </p>
          <p className="mt-2 text-sm text-gray">
            Nejlepší absolventi dostávají nabídku nástupu přímo do jedné z našich poboček.
          </p>
        </div>
      </div>
    </section>
  );
}
