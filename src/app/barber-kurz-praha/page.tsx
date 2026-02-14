import type { Metadata } from "next";
import { getCityBySlug, getLocationsByCity, courses, testimonials, comparisonRows, faqItems } from "@/lib/data";
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { LocationCards } from "@/components/landing/LocationCards";
import { CourseCard } from "@/components/landing/CourseCard";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSignupForm } from "@/components/landing/CourseSignupForm";
import { CityLinks } from "@/components/landing/CityLinks";

const city = getCityBySlug("praha")!;
const cityLocations = getLocationsByCity("praha");
const cityTestimonials = testimonials.filter((t) => t.city === "praha" || !t.city);

export const metadata: Metadata = {
  title: city.seoTitle,
  description: city.seoDescription,
  alternates: { canonical: "https://barber-kurzy.com/barber-kurz-praha" },
  openGraph: {
    title: city.seoTitle,
    description: city.seoDescription,
    url: "https://barber-kurzy.com/barber-kurz-praha",
    type: "website",
  },
};

export default function BarberKurzPrahaPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city, "Národní 949/19", "110 00")} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Barber kurzy Praha", url: "https://barber-kurzy.com/barber-kurz-praha" },
        ])}
      />

      <div data-hero>
        <LandingHero
          title={city.heroTitle}
          subtitle={city.heroSubtitle}
          ctaText="Přihlásit se"
          ctaHref="#signup"
          secondaryCtaText="Zobrazit kurzy"
          secondaryCtaHref="#courses"
          trustBadges={[
            { text: "2 pobočky v Praze" },
            { text: "Hlavní pobočka: Národní" },
            { text: "Metro B – 1 min" },
          ]}
        />
      </div>

      {/* Pobočky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title={`Naše pobočky v ${city.nameLocativ}`} subtitle="Vyberte si pobočku, která vám vyhovuje" />
          <div className="mx-auto mt-12 max-w-4xl">
            <LocationCards locations={cityLocations} />
          </div>
        </div>
      </section>

      {/* Kurzy */}
      <section id="courses" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title={`Barber kurzy v ${city.nameLocativ}`} subtitle="Vyberte si kurz, který vám vyhovuje" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Proč v tomto městě */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title={`Proč studovat v ${city.nameLocativ}`} />
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray sm:text-base">
            {city.whyText}
          </p>
        </div>
      </section>

      {/* Porovnání */}
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
          <SectionHeading title="Reference" subtitle={`Co říkají absolventi z ${city.nameLocativ.charAt(0).toUpperCase() + city.nameLocativ.slice(1)}`} />
          <div className="mt-12">
            <TestimonialSlider testimonials={cityTestimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Časté otázky" />
          <div className="mt-12">
            <CourseFAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se" subtitle={`Začněte svou barber kariéru v ${city.nameLocativ}`} />
          <div className="mt-12">
            <CourseSignupForm defaultCity="Praha 1" />
          </div>
        </div>
      </section>

      {/* Další města */}
      <section className="py-20">
        <div className="container text-center">
          <h3 className="text-lg font-semibold text-white">Kurzy v dalších městech</h3>
          <div className="mt-6">
            <CityLinks />
          </div>
        </div>
      </section>
    </>
  );
}
