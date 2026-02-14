import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";
import { courses } from "@/lib/data";

const levelLabels = {
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border"
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

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>

                <p className="mt-1 text-sm text-gray">{course.duration}</p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray">
                  {course.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-2xl font-bold text-white">{course.price}</p>
                  <a
                    href="#contact"
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    Mám zájem
                    <IconCircle />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
