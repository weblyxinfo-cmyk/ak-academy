import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Reference
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray">
          Co říkají naši absolventi
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 ${i < t.rating ? "text-white" : "text-gray-dark"}`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
