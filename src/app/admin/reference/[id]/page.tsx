import { notFound } from "next/navigation";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { updateTestimonial } from "../actions";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [testimonial] = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, Number(id)))
    .limit(1);

  if (!testimonial) notFound();

  const action = updateTestimonial.bind(null, testimonial.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Upravit referenci: {testimonial.name}
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <TestimonialForm action={action} defaultValues={testimonial} />
      </div>
    </div>
  );
}
