import type { Metadata } from "next";
import Link from "next/link";
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

const city = getCityBySlug("beroun")!;
const cityLocations = getLocationsByCity("beroun");
const cityTestimonials = testimonials.filter((t) => t.city === "beroun" || !t.city);

export const metadata: Metadata = {
  title: city.seoTitle,
  description: city.seoDescription,
  alternates: { canonical: "https://barber-kurzy.com/barber-kurz-beroun" },
  openGraph: {
    title: city.seoTitle,
    description: city.seoDescription,
    url: "https://barber-kurzy.com/barber-kurz-beroun",
    type: "website",
  },
};

export default function BarberKurzBerounPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city, "Havlíčkova 128", "266 01")} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Barber kurzy Beroun", url: "https://barber-kurzy.com/barber-kurz-beroun" },
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
            { text: "2 pobočky v Berouně" },
            { text: "30 min vlakem z Prahy" },
            { text: "Certifikát AK Barbers" },
          ]}
        />
      </div>

      {/* Úvod – barber kurzy Beroun */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Barber kurzy v Berouně – soustředěná výuka blízko Prahy
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray sm:text-base">
              AK BARBERS Academy provozuje v Berouně dvě pobočky přímo v centru města. Beroun je ideální
              místo pro barber vzdělání – nabízí klidnější prostředí než velkoměsto a zároveň skvělou
              dostupnost vlakem z Prahy (pouhých 30 minut). Kurzy vedou{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                zkušení lektoři
              </Link>{" "}
              ze sítě AK Barbers, kteří vás naučí vše od základních technik stříhání po pokročilé
              fade a práci s břitvou.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              V Berouně si můžete vybrat ze tří typů kurzů:{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz (180 hodin)
              </Link>{" "}
              s kompletní přípravou na kariéru barbera,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                2týdenní intenzivní kurz (90 hodin)
              </Link>{" "}
              pro rychlý profesní posun, nebo{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní masterclass (10 hodin)
              </Link>{" "}
              zaměřenou na specifické dovednosti.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              Berounská pobočka je oblíbená především studenty ze Středočeského kraje, kteří oceňují
              menší skupiny a osobnější přístup lektorů. Po absolvování získáte certifikát AK Barbers
              Academy platný po celé ČR.{" "}
              <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-4 hover:text-white">
                Máte otázky? Podívejte se na FAQ
              </Link>{" "}
              nebo se rovnou{" "}
              <Link href="#signup" className="text-accent underline underline-offset-4 hover:text-white">
                přihlaste
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pobočky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title={`Naše pobočky v ${city.nameLocativ}`} />
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
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-center text-sm leading-relaxed text-gray sm:text-base">
              {city.whyText}
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              V Berouně klademe důraz na individuální přístup. Díky menším skupinám se vám naši{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                lektoři
              </Link>{" "}
              věnují intenzivněji a mohou přizpůsobit tempo výuky vašim potřebám. Ať už vybíráte{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz
              </Link>,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                dvoutýdenní program
              </Link>{" "}
              nebo{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní workshop
              </Link>
              , vždy budete pracovat pod odborným dohledem a na reálných zákaznících.
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              Beroun je skvělou volbou i pro studenty z Prahy, kteří hledají klidnější prostředí.
              Další pobočky najdete v{" "}
              <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-4 hover:text-white">
                Praze
              </Link>,{" "}
              <Link href="/barber-kurz-plzen" className="text-accent underline underline-offset-4 hover:text-white">
                Plzni
              </Link>{" "}
              a{" "}
              <Link href="/barber-kurz-slany" className="text-accent underline underline-offset-4 hover:text-white">
                Slaném
              </Link>
              .
            </p>
          </div>
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
          <SectionHeading title="Reference" subtitle="Co říkají naši absolventi" />
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
          <p className="mt-8 text-center text-sm text-gray">
            Nenašli jste odpověď na svou otázku?{" "}
            <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-4 hover:text-white">
              Podívejte se na kompletní seznam častých otázek
            </Link>{" "}
            nebo nás kontaktujte přímo.
          </p>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se" subtitle={`Začněte svou barber kariéru v ${city.nameLocativ}`} />
          <div className="mt-12">
            <CourseSignupForm defaultCity="Beroun" />
          </div>
        </div>
      </section>

      {/* Další města */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-lg font-semibold text-white">Kurzy v dalších městech</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray">
            AK BARBERS Academy nabízí barber kurzy po celých Čechách. Vyberte si pobočku nejblíže vašemu bydlišti.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/barber-kurz-praha"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Praha
            </Link>
            <Link
              href="/barber-kurz-plzen"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Plzeň
            </Link>
            <Link
              href="/barber-kurz-slany"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Slaný
            </Link>
          </div>
          <div className="mt-6">
            <CityLinks />
          </div>
        </div>
      </section>
    </>
  );
}
