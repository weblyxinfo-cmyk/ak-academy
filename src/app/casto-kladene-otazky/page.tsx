import type { Metadata } from "next";
import Link from "next/link";
import { faqItems, courseFaqItems } from "@/lib/data";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSelector } from "@/components/landing/CourseSelector";

const allFaq = [
  ...faqItems,
  ...Object.values(courseFaqItems).flat(),
];

export const metadata: Metadata = {
  title: "Často kladené otázky – FAQ barber kurzy",
  description:
    "Odpovědi na 35+ otázek o barber kurzech AK BARBERS Academy. Pro koho jsou kurzy, co potřebuji, certifikát, splátky, rozdíly mezi kurzy a pobočky. Vše na jednom místě.",
  alternates: { canonical: "https://barber-kurzy.com/casto-kladene-otazky" },
  openGraph: {
    title: "Často kladené otázky – FAQ barber kurzy",
    description: "Odpovědi na 35+ otázek o barber kurzech AK BARBERS Academy. Pro koho jsou kurzy, certifikát, splátky a rozdíly mezi kurzy.",
    url: "https://barber-kurzy.com/casto-kladene-otazky",
    type: "website",
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AK BARBERS Academy" }],
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(allFaq)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Často kladené otázky", url: "https://barber-kurzy.com/casto-kladene-otazky" },
        ])}
      />

      {/* Úvod */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Často kladené otázky o barber kurzech
            </h1>
            <p className="mt-6 text-center text-base leading-relaxed text-gray">
              Připravili jsme odpovědi na otázky, které od zájemců o naše kurzy dostáváme nejčastěji.
              Ať už vás zajímá{" "}
              <Link
                href="/mesicni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                měsíční kurz
              </Link>
              ,{" "}
              <Link
                href="/dvoutydeni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                2týdenní intenziv
              </Link>{" "}
              nebo{" "}
              <Link
                href="/jednodenni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                jednodenní masterclass
              </Link>
              , najdete zde vše potřebné.
            </p>
            <p className="mt-4 text-center text-base leading-relaxed text-gray">
              Všechny naše kurzy vedou{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                zkušení lektoři
              </Link>{" "}
              s mezinárodními zkušenostmi a více než 40 lety praxe dohromady. Výuka probíhá
              v malých skupinách (maximálně 6–8 studentů), takže se vám lektor může věnovat
              individuálně a poskytnout okamžitou zpětnou vazbu.
            </p>
            <p className="mt-4 text-center text-base leading-relaxed text-gray">
              Pokud na této stránce nenajdete odpověď na svou otázku, neváhejte nás kontaktovat.
              Zavolejte nám na{" "}
              <a
                href="tel:+420775502831"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                +420 775 502 831
              </a>{" "}
              nebo napište e-mail na{" "}
              <a
                href="mailto:ak.barbers.cz@gmail.com"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                ak.barbers.cz@gmail.com
              </a>
              . Můžete také využít{" "}
              <Link
                href="/#contact"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                kontaktní formulář
              </Link>{" "}
              na našem webu – odpovídáme zpravidla do 24 hodin.
            </p>
          </div>
        </div>
      </section>

      {/* Obecné otázky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white">Obecné otázky</h2>
            <p className="mt-2 text-sm text-gray">
              Základní informace o kurzech, vybavení, certifikátech a pobočkách. Kurzy vedou{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                zkušení lektoři
              </Link>{" "}
              s více než 40 lety praxe dohromady. Výuka probíhá v{" "}
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
            <div className="mt-8">
              <CourseFAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Stále máte otázky? – mid-page CTA */}
      <section className="border-b border-border py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border border-border p-8 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Stále máte otázky?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
              Každý kurz má svá specifika – podrobné informace o obsahu, ceně, délce a podmínkách
              najdete přímo na stránkách jednotlivých kurzů. Podívejte se na detailní popis:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mesicni-kurz"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                Měsíční kurz – 35 000 Kč
              </Link>
              <Link
                href="/dvoutydeni-kurz"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                2týdenní kurz – 15 000 Kč
              </Link>
              <Link
                href="/jednodenni-kurz"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                1denní masterclass – 4 999 Kč
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray">
              Na stránce každého kurzu najdete podrobný program, pro koho je kurz určen a co
              v ceně získáte. Můžete se také podívat na naše{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                lektory
              </Link>
              , kteří kurzy vedou.
            </p>
          </div>
        </div>
      </section>

      {/* Měsíční kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white">Měsíční kurz</h2>
            <p className="mt-2 text-sm text-gray">
              Nejkomplexnější barber vzdělání – 180 hodin výuky od základů po profesionální úroveň.
              Kurz vedou{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                naši lektoři
              </Link>{" "}
              včetně Wayera Handa s 20 lety praxe z USA.{" "}
              <Link
                href="/mesicni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Více o měsíčním kurzu →
              </Link>
            </p>
            <div className="mt-8">
              <CourseFAQ items={courseFaqItems.mesicni || []} />
            </div>
          </div>
        </div>
      </section>

      {/* 2týdenní kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white">2týdenní kurz</h2>
            <p className="mt-2 text-sm text-gray">
              Intenzivní 90hodinový program zaměřený na klíčové barber techniky pro pokročilé.
              Výuka probíhá ve všech pobočkách –{" "}
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
              .{" "}
              <Link
                href="/dvoutydeni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Více o 2týdenním kurzu →
              </Link>
            </p>
            <div className="mt-8">
              <CourseFAQ items={courseFaqItems.dvoutydeni || []} />
            </div>
          </div>
        </div>
      </section>

      {/* 1denní workshop */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white">1denní workshop</h2>
            <p className="mt-2 text-sm text-gray">
              Specializovaný masterclass pro aktivní barbery zaměřený na konkrétní techniku.
              Workshopy vedou naši{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                špičkoví lektoři
              </Link>{" "}
              s live demonstracemi a hands-on tréninkem.{" "}
              <Link
                href="/jednodenni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Více o jednodenním workshopu →
              </Link>
            </p>
            <div className="mt-8">
              <CourseFAQ items={courseFaqItems.jednodenni || []} />
            </div>
          </div>
        </div>
      </section>

      {/* Navštivte nás osobně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Navštivte nás osobně"
            subtitle="Přijďte se podívat do našich poboček a promluvte si s lektory"
          />
          <div className="mx-auto mt-12 max-w-3xl px-4">
            <p className="text-center text-base leading-relaxed text-gray">
              Nejlepší způsob, jak se rozhodnout o správném kurzu, je přijít se osobně podívat
              do jedné z našich poboček. Rádi vám ukážeme prostory, představíme{" "}
              <Link
                href="/lektori"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                lektory
              </Link>{" "}
              a odpovíme na všechny vaše otázky. Konzultace je zdarma a bez jakýchkoliv závazků.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/barber-kurz-praha"
                className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/40"
              >
                <div className="text-base font-semibold text-white group-hover:text-accent">
                  Praha
                </div>
                <div className="mt-1 text-sm text-gray">
                  Národní 949/19, Praha 1 a Bělohorská, Praha 6
                </div>
              </Link>
              <Link
                href="/barber-kurz-plzen"
                className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/40"
              >
                <div className="text-base font-semibold text-white group-hover:text-accent">
                  Plzeň
                </div>
                <div className="mt-1 text-sm text-gray">
                  Gerská 2030/23, Plzeň
                </div>
              </Link>
              <Link
                href="/barber-kurz-beroun"
                className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/40"
              >
                <div className="text-base font-semibold text-white group-hover:text-accent">
                  Beroun
                </div>
                <div className="mt-1 text-sm text-gray">
                  Dvě pobočky v centru města, 30 min vlakem z Prahy
                </div>
              </Link>
              <Link
                href="/barber-kurz-slany"
                className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/40"
              >
                <div className="text-base font-semibold text-white group-hover:text-accent">
                  Slaný
                </div>
                <div className="mt-1 text-sm text-gray">
                  Třebízského 182, Slaný
                </div>
              </Link>
            </div>
            <p className="mt-6 text-center text-sm text-gray">
              Chcete si domluvit nezávaznou konzultaci? Zavolejte nám na{" "}
              <a
                href="tel:+420775502831"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                +420 775 502 831
              </a>{" "}
              nebo napište na{" "}
              <a
                href="mailto:ak.barbers.cz@gmail.com"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                ak.barbers.cz@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Nenašli jste odpověď? */}
      <section className="border-b border-border py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Nenašli jste odpověď na svou otázku?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
            Ozvěte se nám a rádi vám pomůžeme s výběrem kurzu i jakoukoliv další otázkou.
            Zavolejte na{" "}
            <a
              href="tel:+420775502831"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              +420 775 502 831
            </a>
            , napište na{" "}
            <a
              href="mailto:ak.barbers.cz@gmail.com"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              ak.barbers.cz@gmail.com
            </a>{" "}
            nebo využijte{" "}
            <Link
              href="/#contact"
              className="text-accent underline underline-offset-2 hover:text-white"
            >
              kontaktní formulář
            </Link>
            . Kurzy probíhají v{" "}
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
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent/90"
            >
              Kontaktujte nás
            </Link>
            <Link
              href="/lektori"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
            >
              Poznejte naše lektory
            </Link>
          </div>
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
