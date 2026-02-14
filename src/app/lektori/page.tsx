import type { Metadata } from "next";
import Link from "next/link";
import { instructors, testimonials, faqItems } from "@/lib/data";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { InstructorCards } from "@/components/landing/InstructorCards";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSelector } from "@/components/landing/CourseSelector";

const instructorFaq = faqItems.filter(
  (f) => f.category === "obecne" || f.category === "kurzy"
);

export const metadata: Metadata = {
  title: "Lektoři – AK BARBERS Academy | Profesionální barber instruktoři",
  description:
    "Poznejte lektory AK BARBERS Academy. Mezinárodní tým zkušených barberů s 10–20 lety praxe. Wayer Hand (USA), Tony, Oddy – učte se od těch nejlepších v Praze, Plzni, Berouně a Slaném.",
  alternates: { canonical: "https://barber-kurzy.com/lektori" },
  openGraph: {
    title: "Lektoři – AK BARBERS Academy",
    description:
      "Poznejte lektory AK BARBERS Academy. Mezinárodní tým zkušených barberů s 10–20 lety praxe.",
    url: "https://barber-kurzy.com/lektori",
    type: "website",
  },
};

export default function LektoriPage() {
  return (
    <>
      {generatePersonSchema(instructors).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Lektoři", url: "https://barber-kurzy.com/lektori" },
        ])}
      />

      {/* Úvod */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lektoři AK BARBERS Academy – mezinárodní tým profesionálů
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray">
              Za kvalitou našich{" "}
              <Link
                href="/mesicni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                barber kurzů
              </Link>{" "}
              stojí tým lektorů s dohromady přes <strong className="text-white">40 lety praxe</strong> v oboru.
              Každý z nich přináší unikátní přístup a specializaci – od americké školy barberingu po
              precizní evropské techniky. Naši instruktoři aktivně pracují v barbershopech sítě{" "}
              <a
                href="https://www.akbarber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                AK Barbers
              </a>
              , takže vám předají nejen teorii, ale hlavně praktické know-how ze skutečné praxe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Díky malým skupinám (maximálně 6–8 studentů na kurz) se vám každý lektor věnuje
              individuálně. Dostanete okamžitou zpětnou vazbu na svou práci a můžete se ptát na
              cokoliv – od správného držení strojku po budování klientely. Naši lektoři učí ve
              všech pobočkách:{" "}
              <Link
                href="/barber-kurz-praha"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Praha
              </Link>
              ,{" "}
              <Link
                href="/barber-kurz-plzen"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Plzeň
              </Link>
              ,{" "}
              <Link
                href="/barber-kurz-beroun"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Beroun
              </Link>{" "}
              a{" "}
              <Link
                href="/barber-kurz-slany"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Slaný
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Karty lektorů */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Poznejte náš tým"
            subtitle="Každý lektor přináší svou unikátní specializaci a roky zkušeností z praxe"
          />
          <div className="mt-12">
            <InstructorCards instructors={instructors} showLongBio />
          </div>
        </div>
      </section>

      {/* Proč se učit od profesionálů */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Proč se učit od našich lektorů"
            subtitle="Co odlišuje naše instruktory od ostatních barber škol"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <div className="text-2xl font-bold text-accent">40+</div>
              <h3 className="mt-2 text-base font-semibold text-white">Let praxe dohromady</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Naši lektoři nejsou čerství absolventi – mají za sebou tisíce spokojených klientů
                a roky práce v prémiových barbershopech.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <div className="text-2xl font-bold text-accent">3</div>
              <h3 className="mt-2 text-base font-semibold text-white">Různé přístupy</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Americká škola precizních fade přechodů, moderní styling a kreativní střihy,
                detailní česká přesnost – poznáte všechny styly.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <div className="text-2xl font-bold text-accent">6–8</div>
              <h3 className="mt-2 text-base font-semibold text-white">Studentů maximálně</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Malé skupiny znamenají individuální přístup. Lektor se vám věnuje osobně a
                poskytne okamžitou zpětnou vazbu na vaši práci.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Naši lektoři vedou všechny typy kurzů –{" "}
            <Link
              href="/mesicni-kurz"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              měsíční kurz (180 hodin)
            </Link>
            ,{" "}
            <Link
              href="/dvoutydeni-kurz"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              2týdenní intenziv (90 hodin)
            </Link>{" "}
            i{" "}
            <Link
              href="/jednodenni-kurz"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              jednodenní masterclass
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Reference */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Co říkají absolventi o výuce"
            subtitle="Přečtěte si zkušenosti lidí, kteří se pod vedením našich lektorů naučili řemeslo"
          />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Časté otázky o kurzech a lektorech"
            subtitle="Odpovědi na nejčastější dotazy – pokud nenajdete odpověď, ozvěte se nám"
          />
          <div className="mt-12">
            <CourseFAQ items={instructorFaq} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Máte další otázky? Podívejte se na{" "}
            <Link
              href="/casto-kladene-otazky"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              kompletní seznam FAQ
            </Link>{" "}
            nebo nás{" "}
            <Link
              href="/#contact"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              kontaktujte přímo
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Připraveni začít svou barber kariéru?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
            Vyberte si kurz, který odpovídá vašim zkušenostem a cílům. Naši lektoři vás provedou
            od prvního střihu až po profesionální úroveň. Kurzy probíhají v{" "}
            <Link
              href="/barber-kurz-praha"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              Praze
            </Link>
            ,{" "}
            <Link
              href="/barber-kurz-plzen"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              Plzni
            </Link>
            ,{" "}
            <Link
              href="/barber-kurz-beroun"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              Berouně
            </Link>{" "}
            a{" "}
            <Link
              href="/barber-kurz-slany"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              Slaném
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Výběr kurzu */}
      <section className="py-20">
        <div className="container">
          <CourseSelector />
        </div>
      </section>
    </>
  );
}
