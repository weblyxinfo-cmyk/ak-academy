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
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AK BARBERS Academy" }],
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

      {/* Plzeň – kvalitní výuka bez stresu velkoměsta */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Plzeň – kvalitní výuka bez stresu velkoměsta" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5">
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Plzeňská barber scéna prožívá v posledních letech dynamický rozvoj. Město, známé především
                díky svému pivovarskému dědictví, se stává stále atraktivnějším místem pro moderní pánskou
                péči. Počet barbershopů v Plzni za poslední tři roky vzrostl téměř dvojnásobně a poptávka
                po kvalifikovaných barberech stále roste. Studiem v Plzni se připravíte na kariéru v regionu,
                kde je konkurence menší, ale zákaznická základna loajální a stále se rozšiřující.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Oproti Praze nabízí Plzeň klidnější a soustředěnější studijní prostředí. Studenti se
                nemusí potýkat se stresem velkoměstského dojíždění, hledáním parkování nebo přeplněnou MHD.
                Pobočka na Gerské ulici je obklopena zelení a nabízí příjemnou atmosféru, ve které se
                můžete plně soustředit na praktickou výuku. Menší město znamená i nižší náklady na
                ubytování a stravu pro studenty, kteří dojíždějí z větší vzdálenosti.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Kvalita výuky na plzeňské pobočce je naprosto shodná s pražskou. Naši{" "}
                <Link href="/lektori" className="text-accent underline underline-offset-4 hover:text-white">
                  lektoři
                </Link>{" "}
                pravidelně rotují mezi pobočkami a přinášejí nejnovější trendy a techniky přímo z centra
                dění. Používáme stejné profesionální vybavení značek BaByliss, Wahl a Andis a výuka
                probíhá podle identických osnov jako v Praze – včetně praxe na reálných zákaznících od
                prvního týdne.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Plzeň je také skvělou základnou pro barbery, kteří chtějí pracovat v rámci celého
                Plzeňského kraje. Po absolvování kurzu můžete najít uplatnění nejen v Plzni samotné, ale
                i v Klatovech, Rokycanech, Domažlicích či Sušici, kde kvalifikovaných barberů stále
                není dostatek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Okolí pobočky v Plzni */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Okolí pobočky v Plzni" subtitle="Gerská 2030/23, Plzeň 1-Bolevec" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5">
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Naše plzeňská pobočka se nachází na adrese Gerská 2030/23 v části Plzeň 1-Bolevec. Zastávka
                trolejbusu č. 13 &ldquo;Gerská&rdquo; je pouhé 1 minutu chůze od vstupu do prostor akademie.
                Z centra Plzně se sem dostanete za přibližně 15 minut MHD. Pro studenty, kteří přijíždějí
                autem, je v okolí dostatek parkovacích míst – na rozdíl od centra Prahy zde parkování není
                problém.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                V blízkém okolí najdete restaurace a rychlá občerstvení vhodná pro oběd během přestávky.
                Oblíbená je zejména místní pizzerie a bistro vzdálené pár minut chůze. Pro milovníky
                přírody je v docházkové vzdálenosti Bolevecký rybník – ideální místo na procházku
                o polední pauze nebo po skončení výuky. Supermarket pro základní nákupy najdete necelých
                5 minut od pobočky.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Plzeňský vlakový i autobusový nádraží jsou vzdáleny cca 20 minut MHD, takže pobočka je
                pohodlně dostupná i pro studenty dojíždějící z Klatov, Rokycan, Stříbra či dalších měst
                Plzeňského kraje. Pokud hledáte pobočku blíže k Praze, zvažte naše kurzy v{" "}
                <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-4 hover:text-white">
                  Berouně
                </Link>{" "}
                nebo přímo na{" "}
                <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-4 hover:text-white">
                  pražské pobočce
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proč studovat v Plzni místo Prahy */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Proč studovat v Plzni místo Prahy" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5">
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Mnoho studentů ze západních Čech zvažuje, zda se vydat na kurz do Prahy, nebo zůstat
                v Plzni. Odpověď je jednoduchá: kvalita výuky je na obou pobočkách naprosto identická.
                Stejní lektoři, stejné osnovy, stejné vybavení. Jediný rozdíl je v tom, že v Plzni ušetříte
                čas, peníze a energii za dojíždění.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Náklady na život v Plzni jsou výrazně nižší než v Praze. Pokud potřebujete ubytování
                na dobu kurzu, najdete v Plzni cenově dostupné penziony a podnájmy za zlomek pražských cen.
                Obědy v okolí pobočky vás vyjdou levněji a nemusíte řešit drahé pražské MHD ani parkování
                v centru.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Menší město také přináší méně rozptýlení. V Praze je lákadel mnoho – v Plzni se studenti
                přirozeně více soustředí na studium a praktický trénink. Naši lektoři navíc potvrzují,
                že menší skupiny na plzeňské pobočce umožňují věnovat každému studentovi více individuální
                pozornosti.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Přihlaste se na{" "}
                <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                  měsíční kurz
                </Link>,{" "}
                <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                  dvoutýdenní intenziv
                </Link>{" "}
                nebo{" "}
                <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                  jednodenní masterclass
                </Link>{" "}
                v Plzni. Pokud vám přeci jen vyhovuje jiná lokalita, najdete nás i v{" "}
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
                .
              </p>
            </div>
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
