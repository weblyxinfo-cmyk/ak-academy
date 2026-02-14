import type { Metadata } from "next";
import { getCourseBySlug, testimonials, instructors, faqItems, courseFaqItems } from "@/lib/data";
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { InstructorCards } from "@/components/landing/InstructorCards";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSignupForm } from "@/components/landing/CourseSignupForm";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { CourseSelector } from "@/components/landing/CourseSelector";

const course = getCourseBySlug("jednodenni-kurz")!;
const allFaq = [...(courseFaqItems.jednodenni || []), ...faqItems.slice(0, 4)];

export const metadata: Metadata = {
  title: course.meta?.title,
  description: course.meta?.description,
  alternates: { canonical: "https://barber-kurzy.com/jednodenni-kurz" },
  openGraph: {
    title: course.meta?.title,
    description: course.meta?.description,
    url: "https://barber-kurzy.com/jednodenni-kurz",
    type: "website",
  },
};

export default function JednodennikurzPage() {
  return (
    <>
      <JsonLd data={generateCourseSchema(course)} />
      <JsonLd data={generateFAQSchema(allFaq)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "1denní kurz", url: "https://barber-kurzy.com/jednodenni-kurz" },
        ])}
      />

      <div data-hero>
        <LandingHero
          title="1denní barber masterclass"
          subtitle="10 hodin intenzivního workshopu. Live demonstrace, hands-on trénink a zpětná vazba od špičkového lektora."
          price={course.price}
          ctaText="Přihlásit se na workshop"
          ctaHref="#signup"
          trustBadges={[
            { text: "10 hodin výuky" },
            { text: "Live demonstrace" },
            { text: "Certifikát" },
          ]}
        />
      </div>

      {/* Jak probíhá */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Jak workshop probíhá" subtitle="Intenzivní den plný praxe a nových poznatků" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">1.</p>
              <h3 className="mt-2 font-semibold text-white">Teorie & ukázka</h3>
              <p className="mt-2 text-sm text-gray">
                Lektor vysvětlí techniku a předvede ji live na modelu. Uvidíte každý detail naživo.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">2.</p>
              <h3 className="mt-2 font-semibold text-white">Hands-on trénink</h3>
              <p className="mt-2 text-sm text-gray">
                Vyzkoušíte si techniku sami pod vedením lektora. Okamžitá zpětná vazba a korekce.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">3.</p>
              <h3 className="mt-2 font-semibold text-white">Diskuze & networking</h3>
              <p className="mt-2 text-sm text-gray">
                Q&A session s lektorem, sdílení zkušeností s ostatními barbery a certifikát.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro koho je kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je workshop" subtitle="Zjistěte, jestli je masterclass pro vás" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {course.forWho?.map((item) => (
              <div key={item} className="rounded-lg border border-border p-6">
                <p className="text-sm leading-relaxed text-gray">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co je v ceně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co je v ceně" />
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-3">
              {course.includes?.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lektoři */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Naši lektoři" subtitle="Učte se od těch nejlepších v oboru" />
          <div className="mt-12">
            <InstructorCards instructors={instructors} />
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Reference" subtitle="Co říkají naši absolventi" />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Časté otázky" />
          <div className="mt-12">
            <CourseFAQ items={allFaq} />
          </div>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se na workshop" subtitle="Vyplňte formulář a my se vám ozveme s detaily" />
          <div className="mt-12">
            <CourseSignupForm defaultCourse="1denní kurz" />
          </div>
        </div>
      </section>

      {/* Nevíte který kurz? */}
      <section className="py-20">
        <div className="container">
          <CourseSelector />
        </div>
      </section>

      <StickyCTA price={course.price} ctaHref="#signup" ctaText="Přihlásit se" />
    </>
  );
}
