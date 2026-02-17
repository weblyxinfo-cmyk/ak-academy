import { InstructorForm } from "@/components/admin/InstructorForm";
import { createInstructor } from "../actions";

export default function NewInstructorPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nový lektor</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <InstructorForm action={createInstructor} />
      </div>
    </div>
  );
}
