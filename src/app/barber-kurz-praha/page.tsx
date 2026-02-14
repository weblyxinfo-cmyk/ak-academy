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

      {/* Úvod – barber kurzy Praha */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Profesionální barber vzdělání v srdci Prahy
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray sm:text-base">
              AK BARBERS Academy nabízí komplexní barber kurzy přímo v centru Prahy na adrese Národní 949/19.
              Naše hlavní pobočka se nachází pouhou minutu od stanice metra Národní třída (linka B), takže
              je snadno dostupná z celé Prahy i pro studenty dojíždějící z okolních měst. Kurzy vedou{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                zkušení lektoři
              </Link>{" "}
              s mnohaletou praxí v oboru, kteří vás provedou od úplných základů až po pokročilé fade techniky.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              Nabízíme tři typy kurzů přizpůsobené vašim potřebám a zkušenostem:{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz (180 hodin)
              </Link>{" "}
              pro kompletní přípravu na kariéru barbera,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                2týdenní intenzivní kurz (90 hodin)
              </Link>{" "}
              pro ty, kteří se chtějí rychle posunout, a{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní masterclass (10 hodin)
              </Link>{" "}
              zaměřenou na konkrétní techniky.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              Praha je centrem českého barberingu s desítkami barbershopů, kde najdete uplatnění hned po
              absolvování kurzu. Naši absolventi pravidelně nacházejí zaměstnání do několika týdnů od
              ukončení studia a někteří z nich nastupují přímo do sítě AK Barbers. Máte otázky ohledně
              průběhu studia nebo cen?{" "}
              <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-4 hover:text-white">
                Přečtěte si naše FAQ
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
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-center text-sm leading-relaxed text-gray sm:text-base">
              {city.whyText}
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              Pražská pobočka je naší vlajkovou lodí – najdete tu nejmodernější vybavení, největší tým{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                profesionálních lektorů
              </Link>{" "}
              a pravidelně nabíráme nové studenty do všech typů kurzů. Ať už zvolíte{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz
              </Link>,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                dvoutýdenní intenziv
              </Link>{" "}
              nebo{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní masterclass
              </Link>
              , v Praze získáte praxi na reálných zákaznících v jednom z nejrušnějších barbershopů v centru města.
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              Pokud bydlíte mimo Prahu, podívejte se na naše pobočky v{" "}
              <Link href="/barber-kurz-plzen" className="text-accent underline underline-offset-4 hover:text-white">
                Plzni
              </Link>,{" "}
              <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-4 hover:text-white">
                Berouně
              </Link>{" "}
              nebo{" "}
              <Link href="/barber-kurz-slany" className="text-accent underline underline-offset-4 hover:text-white">
                Slaném
              </Link>{" "}
              – všude nabízíme stejnou kvalitu výuky se stejnými lektory.
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
            <CourseSignupForm defaultCity="Praha 1" />
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
              href="/barber-kurz-plzen"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Plzeň
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
