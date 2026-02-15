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
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AK BARBERS Academy" }],
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

      {/* Praha – centrum českého barberingu */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Praha – centrum českého barberingu" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5">
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Praha je bezpochyby hlavním městem českého barberingu. Najdete tu nejvyšší koncentraci
                barbershopů v celé republice – od prémiových salonů na Vinohradech a ve Starém Městě až po
                trendy podniky na Žižkově a Letné. Právě tato rozmanitost dělá z Prahy ideální místo, kde
                se stát barberem. Během studia na AK BARBERS Academy v Praze budete obklopeni pulzující
                barber kulturou, která vás bude motivovat a inspirovat k vlastnímu růstu.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Jednou z největších výhod studia v Praze je přístup k mezinárodní klientele. Praha jako
                turistická metropole přitahuje zákazníky z celého světa – naučíte se komunikovat s klienty
                různých národností a pracovat s rozmanitými typy vlasů a vousů. Tato zkušenost je
                neocenitelná, pokud plánujete kariéru v zahraničí nebo v prémiových salonech.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Networking je další silnou stránkou pražské scény. Během kurzu se potkáte s dalšími studenty,
                aktivními barbery i majiteli barbershopů. Mnoho našich absolventů získalo první pracovní
                nabídku právě díky kontaktům navázaným během studia. Praha také pravidelně hostí barber
                eventy, soutěže a workshopy, kde můžete sledovat nejlepší barbery v akci.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Po absolvování kurzu máte v Praze nejširší možnosti uplatnění – desítky barbershopů aktivně
                hledají kvalifikované barbery a poptávka stále převyšuje nabídku. Ať už chcete nastoupit
                do zavedného salonu, nebo si otevřít vlastní podnikání, Praha vám dává nejlepší startovní
                pozici. Podívejte se na naše{" "}
                <Link href="/mesicni-kurz" className="text-accent underline underline-offset-4 hover:text-white">
                  kurzy
                </Link>{" "}
                a začněte svou cestu k úspěšné barber kariéře.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Okolí naší pobočky */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Okolí naší pobočky" subtitle="Národní třída, Praha 1" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5">
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Naše hlavní pobočka na adrese Národní 949/19 se nachází přímo v srdci Prahy, na jedné
                z nejznámějších ulic hlavního města. Stanice metra Národní třída (linka B) je doslova
                minutu chůze od vstupu do budovy, což činí dojíždění maximálně pohodlným z jakéhokoli
                koutu Prahy. Na Národní třídě zastavují i tramvajové linky 2, 9, 18, 22 a další, takže
                se k nám dostanete opravdu odkudkoli.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                V bezprostředním okolí pobočky najdete vše, co během studia potřebujete. Na oběd si můžete
                zajít do některé z desítek restaurací a kaváren na Národní třídě a v přilehlých uličkách –
                od rychlého občerstvení přes bistro jídla až po tradiční českou kuchyni. V okolí jsou
                i obchody, lékárna a oblíbená kavárna přímo na rohu. Studenti často využívají přestávky
                k procházce podél Vltavy, která je vzdálená pouhé dvě minuty.
              </p>
              <p className="text-sm leading-relaxed text-[#999] sm:text-base">
                Druhá pražská pobočka na Bělohorské 1393/44 v Praze 6 je dostupná tramvají č. 22 (zastávka
                Malovanka). Tato pobočka nabízí klidnější atmosféru a je ideální pro studenty z Prahy 6,
                Dejvic, Střešovic a okolí. Obě pobočky jsou plně vybavené profesionálním barber nábytkem
                a nářadím značek BaByliss, Wahl a Andis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Absolventi z Prahy */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading title="Absolventi z Prahy" subtitle="Kam to dotáhli naši studenti" />
            <div className="mx-auto mt-10 max-w-3xl space-y-8">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#141414] p-6">
                <p className="text-sm italic leading-relaxed text-[#999] sm:text-base">
                  &ldquo;Po absolvování měsíčního kurzu na Národní jsem dostal nabídku hned ze dvou
                  barbershopů na Vinohradech. Dnes mám vlastní křeslo a stálou klientelu. Bez AK Academy
                  bych si na to netroufnul.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-white">— Martin K., absolvent 2024</p>
              </div>
              <div className="rounded-xl border border-[#2a2a2a] bg-[#141414] p-6">
                <p className="text-sm italic leading-relaxed text-[#999] sm:text-base">
                  &ldquo;Přešla jsem z dámského kadeřnictví na barbering a dvoutýdenní intenzivní kurz
                  mi dal přesně to, co jsem potřebovala. Fade techniky, práci s břitvou, sebevědomí.
                  Teď pracuji v barber studiu na Letné a baví mě to víc než kdy dřív.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-white">— Tereza S., absolventka 2024</p>
              </div>
              <div className="rounded-xl border border-[#2a2a2a] bg-[#141414] p-6">
                <p className="text-sm italic leading-relaxed text-[#999] sm:text-base">
                  &ldquo;Jednodenní masterclass na skin fade mi otevřel oči. Za jeden den jsem se naučil
                  techniky, na které bych sám přišel za měsíce pokusů. Jednoznačně doporučuji i zkušeným
                  barberům.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-white">— David R., absolvent 2025</p>
              </div>
              <p className="text-center text-sm leading-relaxed text-[#999] sm:text-base">
                Chcete se přidat k desítkám úspěšných absolventů? Vyberte si{" "}
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
                a začněte svou barber kariéru v Praze. Nebo zvažte studium v{" "}
                <Link href="/barber-kurz-plzen" className="text-accent underline underline-offset-4 hover:text-white">
                  Plzni
                </Link>,{" "}
                <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-4 hover:text-white">
                  Berouně
                </Link>{" "}
                či{" "}
                <Link href="/barber-kurz-slany" className="text-accent underline underline-offset-4 hover:text-white">
                  Slaném
                </Link>{" "}
                – kvalita výuky je na všech pobočkách stejná.
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
