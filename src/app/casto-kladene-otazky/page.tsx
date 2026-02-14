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
  title: "Často kladené otázky – AK BARBERS Academy | FAQ barber kurzy",
  description:
    "Odpovědi na nejčastější otázky o barber kurzech AK BARBERS Academy. Pro koho jsou kurzy, co potřebuji, certifikát, splátky, rozdíly mezi kurzy, pobočky v Praze, Plzni, Berouně a Slaném.",
  alternates: { canonical: "https://barber-kurzy.com/casto-kladene-otazky" },
  openGraph: {
    title: "Často kladené otázky – AK BARBERS Academy",
    description: "Odpovědi na nejčastější otázky o barber kurzech AK BARBERS Academy.",
    url: "https://barber-kurzy.com/casto-kladene-otazky",
    type: "website",
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
              , najdete zde vše potřebné. Pokud vaše otázka chybí, neváhejte nás{" "}
              <Link
                href="/#contact"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                kontaktovat
              </Link>
              .
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
              s více než 40 lety praxe dohromady.
            </p>
            <div className="mt-8">
              <CourseFAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Měsíční kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white">Měsíční kurz</h2>
            <p className="mt-2 text-sm text-gray">
              Nejkomplexnější barber vzdělání – 180 hodin výuky od základů po profesionální úroveň.{" "}
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
              Intenzivní 90hodinový program zaměřený na klíčové barber techniky pro pokročilé.{" "}
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
              Specializovaný masterclass pro aktivní barbery zaměřený na konkrétní techniku.{" "}
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

      {/* Nenašli jste odpověď? */}
      <section className="border-b border-border py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Nenašli jste odpověď na svou otázku?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
            Ozvěte se nám a rádi vám pomůžeme s výběrem kurzu i jakoukoliv další otázkou.
            Kurzy probíhají v{" "}
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
