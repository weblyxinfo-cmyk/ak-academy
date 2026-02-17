import { CourseForm } from "@/components/admin/CourseForm";
import { createCourse } from "../actions";

export default function NewCoursePage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nový kurz</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <CourseForm action={createCourse} />
      </div>
    </div>
  );
}
