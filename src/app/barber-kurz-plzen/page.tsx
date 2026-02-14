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

const city = getCityBySlug("plzen")!;
const cityLocations = getLocationsByCity("plzen");
const cityTestimonials = testimonials.filter((t) => t.city === "plzen" || !t.city);

export const metadata: Metadata = {
  title: city.seoTitle,
  description: city.seoDescription,
  alternates: { canonical: "https://barber-kurzy.com/barber-kurz-plzen" },
  openGraph: {
    title: city.seoTitle,
    description: city.seoDescription,
    url: "https://barber-kurzy.com/barber-kurz-plzen",
    type: "website",
  },
};

export default function BarberKurzPlzenPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city, "Gerská 2030/23", "323 00")} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Barber kurzy Plzeň", url: "https://barber-kurzy.com/barber-kurz-plzen" },
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
            { text: "Pobočka v Plzni" },
            { text: "Trolejbus 13 – 1 min" },
            { text: "Certifikát AK Barbers" },
          ]}
        />
      </div>

      {/* Úvod – barber kurzy Plzeň */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Barber kurzy v Plzni – kvalita bez dojíždění do Prahy
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray sm:text-base">
              AK BARBERS Academy přináší profesionální barber vzdělání přímo do Plzně. Naše pobočka na adrese
              Gerská 2030/23 je snadno dostupná trolejbusem č. 13 a nabízí stejné vybavení a stejné{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                zkušené lektory
              </Link>{" "}
              jako naše hlavní pobočka v Praze. Studenti ze západních Čech tak nemusí dojíždět a mohou
              získat špičkové barber vzdělání přímo ve svém regionu.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              V Plzni nabízíme kompletní nabídku kurzů:{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz (180 hodin)
              </Link>{" "}
              pro kompletní přípravu na kariéru barbera,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                2týdenní intenzivní kurz (90 hodin)
              </Link>{" "}
              ideální pro kadeřníky, kteří se chtějí specializovat, a{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní masterclass (10 hodin)
              </Link>{" "}
              zaměřenou na zdokonalení konkrétních technik.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              Plzeň je dynamicky rostoucí město s rostoucí poptávkou po kvalitních barberech. Po absolvování
              kurzu získáte certifikát AK Barbers Academy uznávaný po celé České republice a budete
              připraveni nastoupit do barbershopu nebo si otevřít vlastní podnikání.{" "}
              <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-4 hover:text-white">
                Přečtěte si časté otázky
              </Link>{" "}
              nebo se rovnou{" "}
              <Link href="#signup" className="text-accent underline underline-offset-4 hover:text-white">
                přihlaste na kurz
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pobočka */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title={`Naše pobočka v ${city.nameLocativ}`} />
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
              Plzeňská pobočka nabízí komfortní prostory vybavené profesionálním barber nábytkem a veškerým
              potřebným nářadím. Výuku vedou{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                certifikovaní lektoři AK BARBERS Academy
              </Link>{" "}
              s praxí v předních českých barbershopech. Studenti se v průběhu kurzu učí na reálných
              zákaznících a získávají tak cenné praktické zkušenosti od prvního týdne.
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              Nabízíme také kurzy na dalších pobočkách – v{" "}
              <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-4 hover:text-white">
                Praze
              </Link>,{" "}
              <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-4 hover:text-white">
                Berouně
              </Link>{" "}
              a{" "}
              <Link href="/barber-kurz-slany" className="text-accent underline underline-offset-4 hover:text-white">
                Slaném
              </Link>
              . Vyberte si termín a pobočku, která vám nejlépe vyhovuje.
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
            <CourseSignupForm defaultCity="Plzeň" />
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
              href="/barber-kurz-beroun"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Beroun
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
