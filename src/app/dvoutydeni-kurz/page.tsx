import type { Metadata } from "next";
import Link from "next/link";
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
          title="2týdenní barber kurz – 90 hodin intenzivního tréninku"
          subtitle="Kompaktní a intenzivní program pro kadeřníky a samoky, kteří se chtějí specializovat na barber techniky. Za dva týdny zvládnete fade, vousy i styling."
          price={course.price}
          ctaText="Přihlásit se na kurz"
          ctaHref="#signup"
          secondaryCtaText="Zobrazit program kurzu"
          secondaryCtaHref="#program"
          trustBadges={[
            { text: "90 hodin praxe" },
            { text: "Max. 6–8 studentů" },
            { text: "Certifikát" },
            { text: "Možnost splátek" },
          ]}
        />
      </div>

      {/* Úvod ke kurzu */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Intenzivní barber specializace za 2 týdny
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray">
              Dvoutýdenní kurz je ideální volba pro ty, kteří už mají základní zkušenosti s kadeřnictvím nebo stříháním a chtějí se specializovat na moderní barber techniky. Za <strong className="text-white">90 hodin</strong> intenzivního tréninku získáte všechny klíčové dovednosti potřebné pro práci v moderním barbershopu.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Kurz je kondenzovanou verzí našeho{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">měsíčního programu</Link>
              , zaměřenou na to nejdůležitější: fade techniky, přechody, práci s vousy a styling. Pod vedením{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">zkušených lektorů</Link>
              {" "}se posunete na profesionální úroveň během jediných dvou týdnů.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Po dokončení obdržíte <strong className="text-white">certifikát AK Barbers Academy</strong>, který potvrdí vaši novou specializaci. Kurz probíhá v{" "}
              <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-2 hover:text-white">Praze</Link>
              {" "}a dalších městech po celé ČR.
            </p>
          </div>
        </div>
      </section>

      {/* Pro koho je kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je 2týdenní kurz určen" subtitle="Zjistěte, jestli je tento kurz tou správnou volbou právě pro vás" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {course.forWho?.map((item, i) => (
              <div key={item} className="rounded-lg border border-border p-6">
                <span className="text-2xl font-bold text-accent">{i + 1}.</span>
                <p className="mt-3 text-sm leading-relaxed text-gray">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Jste úplný začátečník? Podívejte se na{" "}
            <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">měsíční kurz</Link>
            , který vás provede od naprostých základů. Nebo zvažte{" "}
            <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-2 hover:text-white">jednodenní masterclass</Link>
            {" "}pro zdokonalení konkrétní techniky.
          </p>
        </div>
      </section>

      {/* Program kurzu */}
      <section id="program" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Program 2týdenního kurzu" subtitle="2 týdny intenzivního barber tréninku" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray">
            Výuka probíhá každý pracovní den a kombinuje teorii s okamžitou praxí. Druhý týden se zaměřujete na práci s reálnými zákazníky.
          </p>
          <div className="mt-12">
            {course.program && <CourseProgram weeks={course.program} />}
          </div>
        </div>
      </section>

      {/* Co je v ceně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co je zahrnuto v ceně" subtitle="Kompletní balíček pro vaši barber specializaci" />
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
            <p className="mt-8 text-sm text-gray">
              Cena kurzu je <strong className="text-white">{course.price}</strong>. Nabízíme také{" "}
              <strong className="text-white">možnost platby na splátky</strong> – pro více informací nás{" "}
              <Link href="/#contact" className="text-accent underline underline-offset-2 hover:text-white">kontaktujte</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Srovnání s měsíčním */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="2týdenní vs. měsíční kurz" subtitle="Porovnání obou kurzů – vyberte si ten, který odpovídá vašim zkušenostem" />
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
              <Link href="/mesicni-kurz" className="mt-4 inline-block text-sm text-accent underline underline-offset-2 hover:text-white">
                Více o měsíčním kurzu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lektoři */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Vaši lektoři" subtitle="Mezinárodní tým s více než 40 lety praxe dohromady" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray">
            <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">Poznejte celý tým lektorů →</Link>
          </p>
          <div className="mt-12">
            <InstructorCards instructors={instructors} />
          </div>
        </div>
      </section>

      {/* Porovnání s ostatními */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Proč AK Academy" subtitle="Srovnání s ostatními barber kurzy v ČR" />
          <div className="mx-auto mt-12 max-w-3xl">
            <ComparisonTable rows={comparisonRows} />
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co říkají naši absolventi" subtitle="Zkušenosti lidí, kteří kurzem už prošli" />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Pobočky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Kde 2týdenní kurz probíhá" subtitle="Vyberte si pobočku, která je vám nejblíž" />
          <div className="mx-auto mt-12 max-w-4xl">
            <LocationCards locations={locations} />
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
            <Link href="/barber-kurz-praha" className="text-sm text-accent underline underline-offset-2 hover:text-white">Kurzy v Praze</Link>
            <span className="text-gray-dark">•</span>
            <Link href="/barber-kurz-plzen" className="text-sm text-accent underline underline-offset-2 hover:text-white">Kurzy v Plzni</Link>
            <span className="text-gray-dark">•</span>
            <Link href="/barber-kurz-beroun" className="text-sm text-accent underline underline-offset-2 hover:text-white">Kurzy v Berouně</Link>
            <span className="text-gray-dark">•</span>
            <Link href="/barber-kurz-slany" className="text-sm text-accent underline underline-offset-2 hover:text-white">Kurzy ve Slaném</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Časté otázky k 2týdennímu kurzu" />
          <div className="mt-12">
            <CourseFAQ items={allFaq} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-2 hover:text-white">Zobrazit všechny otázky →</Link>
          </p>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se na 2týdenní kurz" subtitle="Vyplňte formulář a ozveme se vám do 24 hodin" />
          <div className="mt-12">
            <CourseSignupForm defaultCourse="2týdenní kurz" />
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Zvažujete i jiné kurzy?</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-gray">Porovnejte všechny naše programy a vyberte si ten pravý.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/mesicni-kurz" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent">
                Měsíční kurz – <span className="text-gray">35 000 Kč</span>
              </Link>
              <Link href="/jednodenni-kurz" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent">
                1denní masterclass – <span className="text-gray">4 999 Kč</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA price={course.price} ctaHref="#signup" />
    </>
  );
}
