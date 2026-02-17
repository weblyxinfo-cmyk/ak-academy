import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { createTestimonial } from "../actions";

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Nová reference</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <TestimonialForm action={createTestimonial} />
      </div>
    </div>
  );
}
