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
  title: "Lektoři – Profesionální barber instruktoři",
  description:
    "Poznejte lektory AK BARBERS Academy – mezinárodní tým barberů s 10–20 lety praxe. Wayer Hand (USA), Tony, Oddy. Učte se od profesionálů, kteří denně pracují v barbershopech.",
  alternates: { canonical: "https://barber-kurzy.com/lektori" },
  openGraph: {
    title: "Lektoři – Profesionální barber instruktoři",
    description:
      "Poznejte lektory AK BARBERS Academy – mezinárodní tým barberů s 10–20 lety praxe. Učte se od profesionálů.",
    url: "https://barber-kurzy.com/lektori",
    type: "website",
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AK BARBERS Academy" }],
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
                rel="nofollow noopener noreferrer"
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

      {/* Náš přístup k výuce */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Náš přístup k výuce"
            subtitle="Učíme tak, jak se řemeslo učí nejlépe – praxí od prvního dne"
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-6 px-4">
            <p className="text-base leading-relaxed text-gray">
              V AK BARBERS Academy věříme, že barbering se nejlépe naučíte s nůžkami a strojkem
              v ruce – ne jen sledováním videí. Proto je <strong className="text-white">praxe základem každého
              našeho kurzu</strong>. Už od prvního dne{" "}
              <Link
                href="/mesicni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                měsíčního kurzu
              </Link>{" "}
              se studenti učí na cvičných hlavách a postupně přecházejí k práci na reálných zákaznících.
              Stejný přístup platí i pro{" "}
              <Link
                href="/dvoutydeni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                2týdenní intenziv
              </Link>{" "}
              a{" "}
              <Link
                href="/jednodenni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                jednodenní masterclass
              </Link>
              , kde je hands-on trénink klíčovou součástí programu.
            </p>
            <p className="text-base leading-relaxed text-gray">
              Malé skupiny o <strong className="text-white">maximálně 6–8 studentech</strong> jsou
              pro nás nepřekročitelným pravidlem. Díky tomu se vám lektor může věnovat skutečně
              individuálně – sleduje vaši techniku, opravuje držení nástrojů, ukazuje vám přesný
              úhel strojku a okamžitě reaguje na vaše dotazy. Nejde o masovou výrobu absolventů,
              ale o kvalitní řemeslné vzdělání, kde každý student odchází s reálnými dovednostmi.
            </p>
            <p className="text-base leading-relaxed text-gray">
              Každý lektor má svůj styl výuky, ale všichni sdílejí společnou filozofii:{" "}
              <strong className="text-white">trpělivost, důraz na detail a respekt k individualitě
              studenta</strong>. Wayer Hand přináší americkou preciznost ve fade technikách, Tony
              exceluje ve všestrannosti a moderních trendech, Oddy je mistrem detailní práce
              a čistých přechodů. Společně pokrývají celé spektrum barber dovedností, které budete
              v praxi potřebovat.
            </p>
            <p className="text-base leading-relaxed text-gray">
              Na konci každého kurzu absolventi získají <strong className="text-white">certifikát
              AK Barbers Academy</strong> a ti nejlepší mají možnost nastoupit přímo do jedné
              z poboček AK Barbers. Nejde však jen o papír – jde o skutečné dovednosti,
              sebevědomí a schopnost postavit se ke křeslu a stříhat na profesionální úrovni.
              Naši absolventi to potvrzují – přečtěte si{" "}
              <Link
                href="/casto-kladene-otazky"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                často kladené otázky
              </Link>
              , kde se dozvíte více o průběhu kurzů.
            </p>
          </div>
        </div>
      </section>

      {/* Mezinárodní zkušenosti */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Mezinárodní zkušenosti"
            subtitle="Techniky ze světa přímo ve vaší učebně"
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-6 px-4">
            <p className="text-base leading-relaxed text-gray">
              To, co odlišuje AK BARBERS Academy od ostatních barber škol v České republice,
              je <strong className="text-white">mezinárodní rozměr našeho týmu</strong>. Wayer Hand
              přináší více než dvacet let zkušeností z americké barber scény – z Philadelphie,
              kde je barbering hluboce zakořeněnou kulturou s vlastními tradicemi, styly a standardy
              kvality. Americký přístup klade obrovský důraz na precizní fade přechody, ostré linie
              a konzistentní výsledky, které uvidíte na každém studentovi, kterého Wayer vede.
            </p>
            <p className="text-base leading-relaxed text-gray">
              Spojení americké školy barberingu s evropskou precizností a českým smyslem pro detail
              vytváří unikátní vzdělávací mix, který jinde nenajdete. Studenti se v rámci{" "}
              <Link
                href="/mesicni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                měsíčního kurzu
              </Link>{" "}
              naučí pracovat s různými typy vlasů a různými kulturními očekáváními klientů –
              což je dnes v kosmopolitních městech jako Praha naprosto zásadní dovednost.
              V{" "}
              <Link
                href="/dvoutydeni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                2týdenním kurzu
              </Link>{" "}
              se pak mohou pokročilí barbeři ponořit hlouběji do specifických technik, které
              naši lektoři přivezli ze zahraničí. A na{" "}
              <Link
                href="/jednodenni-kurz"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                jednodenním workshopu
              </Link>{" "}
              si můžete osvojit konkrétní techniku, která vás zaujala.
            </p>
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

      {/* Kde nás najdete */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Kde nás najdete"
            subtitle="Naši lektoři učí ve 4 městech po celých Čechách"
          />
          <div className="mx-auto mt-12 max-w-4xl px-4">
            <p className="text-base leading-relaxed text-gray">
              Kurzy AK BARBERS Academy probíhají ve čtyřech městech, takže kvalitní barber
              vzdělání máte vždy na dosah. V{" "}
              <Link
                href="/barber-kurz-praha"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Praze
              </Link>{" "}
              najdete naši hlavní pobočku na Národní třídě v samém centru města
              i druhou pobočku na Praze 6. V{" "}
              <Link
                href="/barber-kurz-plzen"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Plzni
              </Link>{" "}
              máme pobočku na Gerské ulici, která je ideální pro studenty ze západních Čech.{" "}
              <Link
                href="/barber-kurz-beroun"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Beroun
              </Link>{" "}
              nabízí dvě pobočky v centru města a je skvělou volbou pro studenty
              ze Středočeského kraje – z Prahy se sem dostanete vlakem za 30 minut. A{" "}
              <Link
                href="/barber-kurz-slany"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                Slaný
              </Link>{" "}
              nabízí klidné prostředí pro soustředěnou výuku v menší skupině.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Bez ohledu na to, kterou pobočku si vyberete, vždy se setkáte se stejným týmem
              zkušených lektorů a stejně vysokou kvalitou výuky. Lektoři rotují mezi pobočkami
              a přizpůsobují výuku konkrétní skupině studentů. Pokud si nejste jistí, která
              pobočka je pro vás nejlepší,{" "}
              <Link
                href="/#contact"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                kontaktujte nás
              </Link>{" "}
              a rádi vám poradíme.
            </p>
          </div>
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

      {/* Chceš se učit od nejlepších? CTA */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Chceš se učit od nejlepších?"
            subtitle="Vyber si kurz, který sedí tvým zkušenostem a ambicím"
          />
          <div className="mx-auto mt-12 max-w-4xl px-4">
            <p className="text-center text-base leading-relaxed text-gray">
              Naši lektoři jsou připraveni tě provést cestou od začátečníka po profesionálního
              barbera. Stačí si vybrat ten správný kurz a začít.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Link
                href="/mesicni-kurz"
                className="group rounded-lg border border-border p-6 text-center transition-colors hover:border-accent/40"
              >
                <div className="text-lg font-bold text-white group-hover:text-accent">
                  Měsíční kurz
                </div>
                <div className="mt-1 text-sm text-gray">180 hodin intenzivní výuky</div>
                <div className="mt-3 text-2xl font-bold text-accent">35 000 Kč</div>
                <div className="mt-1 text-xs text-gray">
                  Kompletní vzdělání od základů po profesionální úroveň
                </div>
              </Link>
              <Link
                href="/dvoutydeni-kurz"
                className="group rounded-lg border border-border p-6 text-center transition-colors hover:border-accent/40"
              >
                <div className="text-lg font-bold text-white group-hover:text-accent">
                  2týdenní kurz
                </div>
                <div className="mt-1 text-sm text-gray">90 hodin intenzivního tréninku</div>
                <div className="mt-3 text-2xl font-bold text-accent">15 000 Kč</div>
                <div className="mt-1 text-xs text-gray">
                  Ideální pro kadeřníky a samouky s částečnými zkušenostmi
                </div>
              </Link>
              <Link
                href="/jednodenni-kurz"
                className="group rounded-lg border border-border p-6 text-center transition-colors hover:border-accent/40"
              >
                <div className="text-lg font-bold text-white group-hover:text-accent">
                  1denní masterclass
                </div>
                <div className="mt-1 text-sm text-gray">10 hodin specializovaného workshopu</div>
                <div className="mt-3 text-2xl font-bold text-accent">4 999 Kč</div>
                <div className="mt-1 text-xs text-gray">
                  Pro aktivní barbery, kteří chtějí zdokonalit konkrétní techniku
                </div>
              </Link>
            </div>
            <p className="mt-8 text-center text-sm text-gray">
              Nevíte, který kurz je pro vás ten pravý? Podívejte se na{" "}
              <Link
                href="/casto-kladene-otazky"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                často kladené otázky
              </Link>{" "}
              nebo nám{" "}
              <Link
                href="/#contact"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                napište
              </Link>{" "}
              – rádi vám poradíme.
            </p>
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
