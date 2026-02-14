import { IconCircle } from "@/components/IconCircle";
import { courses } from "@/lib/data";

export function CourseSelector() {
  return (
    <div className="mx-auto max-w-4xl rounded-lg border border-border bg-bg-card p-8 text-center">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Nevíte, který kurz je pro vás?
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-gray">
        Podívejte se na všechny naše kurzy a vyberte si ten, který odpovídá vašim zkušenostem a cílům.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/${course.slug}`}
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
          >
            {course.title}
            <span className="text-xs text-gray">({course.price})</span>
            <IconCircle />
          </a>
        ))}
      </div>
    </div>
  );
}
