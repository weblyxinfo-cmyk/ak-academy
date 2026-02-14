import type { Metadata } from "next";
import { getCourseBySlug, testimonials, locations, comparisonRows, instructors, faqItems, courseFaqItems } from "@/lib/data";
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CourseProgram } from "@/components/landing/CourseProgram";
import { LocationCards } from "@/components/landing/LocationCards";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { InstructorCards } from "@/components/landing/InstructorCards";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSignupForm } from "@/components/landing/CourseSignupForm";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { CourseSelector } from "@/components/landing/CourseSelector";

const course = getCourseBySlug("dvoutydeni-kurz")!;
const allFaq = [...(courseFaqItems.dvoutydeni || []), ...faqItems.slice(0, 4)];

export const metadata: Metadata = {
  title: course.meta?.title,
  description: course.meta?.description,
  alternates: { canonical: "https://barber-kurzy.com/dvoutydeni-kurz" },
  openGraph: {
    title: course.meta?.title,
    description: course.meta?.description,
    url: "https://barber-kurzy.com/dvoutydeni-kurz",
    type: "website",
  },
};

export default function DvoutydeniKurzPage() {
  return (
    <>
      <JsonLd data={generateCourseSchema(course)} />
      <JsonLd data={generateFAQSchema(allFaq)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "2týdenní kurz", url: "https://barber-kurzy.com/dvoutydeni-kurz" },
        ])}
      />

      <div data-hero>
        <LandingHero
          title="2týdenní barber kurz"
          subtitle="90 hodin intenzivního tréninku. Ideální pro kadeřníky a samoky, kteří se chtějí specializovat na barber techniky."
          price={course.price}
          ctaText="Přihlásit se na kurz"
          ctaHref="#signup"
          secondaryCtaText="Zobrazit program"
          secondaryCtaHref="#program"
          trustBadges={[
            { text: "90 hodin praxe" },
            { text: "Max. 6–8 studentů" },
            { text: "Certifikát" },
            { text: "Možnost splátek" },
          ]}
        />
      </div>

      {/* Pro koho je kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je kurz" subtitle="Zjistěte, jestli je 2týdenní kurz pro vás" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {course.forWho?.map((item) => (
              <div key={item} className="rounded-lg border border-border p-6">
                <p className="text-sm leading-relaxed text-gray">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program kurzu */}
      <section id="program" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Program kurzu" subtitle="2 týdny intenzivního barber tréninku" />
          <div className="mt-12">
            {course.program && <CourseProgram weeks={course.program} />}
          </div>
        </div>
      </section>

      {/* Co je v ceně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co je v ceně" subtitle="Všechno, co potřebujete, v jedné ceně" />
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

      {/* Srovnání s měsíčním */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="2týdenní vs. měsíční kurz" subtitle="Porovnání obou kurzů" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-accent/40 p-6">
              <h3 className="text-lg font-bold text-accent">2týdenní kurz</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray">
                <li>90 hodin výuky</li>
                <li>2 týdny intenzivního tréninku</li>
                <li>Pro pokročilé a kadeřníky</li>
                <li>Zaměření na klíčové techniky</li>
                <li>15 000 Kč</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-white">Měsíční kurz</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray">
                <li>180 hodin výuky</li>
                <li>4 týdny kompletního vzdělání</li>
                <li>Pro úplné začátečníky</li>
                <li>Od základů po pokročilé techniky</li>
                <li>35 000 Kč</li>
              </ul>
            </div>
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

      {/* Porovnání s ostatními */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Proč AK Academy" subtitle="Srovnání s ostatními barber kurzy" />
          <div className="mx-auto mt-12 max-w-3xl">
            <ComparisonTable rows={comparisonRows} />
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

      {/* Pobočky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Kde kurzy probíhají" subtitle="6 poboček po celé České republice" />
          <div className="mx-auto mt-12 max-w-4xl">
            <LocationCards locations={locations} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Časté otázky" subtitle="Odpovědi na nejčastější dotazy k 2týdennímu kurzu" />
          <div className="mt-12">
            <CourseFAQ items={allFaq} />
          </div>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se na kurz" subtitle="Vyplňte formulář a my se vám ozveme s detaily" />
          <div className="mt-12">
            <CourseSignupForm defaultCourse="2týdenní kurz" />
          </div>
        </div>
      </section>

      {/* Nevíte který kurz? */}
      <section className="py-20">
        <div className="container">
          <CourseSelector />
        </div>
      </section>

      <StickyCTA price={course.price} ctaHref="#signup" />
    </>
  );
}
