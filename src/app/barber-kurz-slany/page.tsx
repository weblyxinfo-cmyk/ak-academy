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

const city = getCityBySlug("slany")!;
const cityLocations = getLocationsByCity("slany");
const cityTestimonials = testimonials.filter((t) => t.city === "slany" || !t.city);

export const metadata: Metadata = {
  title: city.seoTitle,
  description: city.seoDescription,
  alternates: { canonical: "https://barber-kurzy.com/barber-kurz-slany" },
  openGraph: {
    title: city.seoTitle,
    description: city.seoDescription,
    url: "https://barber-kurzy.com/barber-kurz-slany",
    type: "website",
  },
};

export default function BarberKurzSlanyPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city, "Třebízského 182", "274 01")} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Barber kurzy Slaný", url: "https://barber-kurzy.com/barber-kurz-slany" },
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
            { text: "Pobočka ve Slaném" },
            { text: "5 min od nádraží" },
            { text: "Certifikát AK Barbers" },
          ]}
        />
      </div>

      {/* Úvod – barber kurzy Slaný */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Barber kurzy ve Slaném – osobní přístup v klidném prostředí
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray sm:text-base">
              AK BARBERS Academy ve Slaném nabízí profesionální barber vzdělání v klidném prostředí
              menšího města. Pobočka na adrese Třebízského 182 se nachází pouhých 5 minut chůze od
              vlakového nádraží, takže je snadno dostupná i pro studenty z okolních obcí a z Prahy.
              Výuku vedou{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                certifikovaní lektoři AK BARBERS Academy
              </Link>{" "}
              s mnohaletou praxí v profesionálním barberingu.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              I ve Slaném máte na výběr ze tří typů kurzů:{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                měsíční kurz (180 hodin)
              </Link>{" "}
              pro úplné začátečníky i pokročilé,{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                2týdenní intenzivní kurz (90 hodin)
              </Link>{" "}
              pro kadeřníky, kteří se chtějí specializovat na pánské stříhání, a{" "}
              <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                jednodenní masterclass (10 hodin)
              </Link>{" "}
              pro aktivní barbery, kteří si chtějí prohloubit konkrétní dovednosti.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
              Slaný je skvělou volbou pro ty, kteří preferují individuálnější přístup a menší skupiny
              studentů. Lektoři se vám mohou věnovat intenzivněji a přizpůsobit výuku vašemu tempu.
              Po absolvování obdržíte certifikát AK Barbers Academy.{" "}
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
              Slaný je jednou z našich komorních poboček, kde se studenti cítí jako doma. Výuka probíhá
              v malých skupinách pod vedením{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                profesionálních lektorů
              </Link>
              , kteří vás provedou všemi technikami od základního stříhání nůžkami a strojkem až po
              pokročilé fade techniky, práci s břitvou a styling. Ať už zvolíte{" "}
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
              , vždy získáte praktické zkušenosti na reálných zákaznících.
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray sm:text-base">
              Pokud vám nevyhovuje lokalita Slaného, nabízíme stejné kurzy také v{" "}
              <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-4 hover:text-white">
                Praze
              </Link>,{" "}
              <Link href="/barber-kurz-plzen" className="text-accent underline underline-offset-4 hover:text-white">
                Plzni
              </Link>{" "}
              a{" "}
              <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-4 hover:text-white">
                Berouně
              </Link>
              . Kvalita výuky je na všech pobočkách stejná.
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
            <CourseSignupForm defaultCity="Slaný" />
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
              href="/barber-kurz-beroun"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Barber kurzy Beroun
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
