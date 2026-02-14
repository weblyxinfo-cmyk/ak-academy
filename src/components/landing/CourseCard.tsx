import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";
import type { Course } from "@/types";

const levelLabels = {
  beginner: "Začátečník",
  advanced: "Pokročilý",
  masterclass: "Masterclass",
};

interface CourseCardProps {
  course: Course;
  showLink?: boolean;
}

export function CourseCard({ course, showLink = true }: CourseCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border transition-all hover:border-accent/40">
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

        <div className="mt-6 border-t border-border pt-4">
          <p className="text-2xl font-bold text-white">{course.price}</p>
          {showLink && course.slug && (
            <a
              href={`/${course.slug}`}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-white"
            >
              Více o kurzu
              <IconCircle />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
