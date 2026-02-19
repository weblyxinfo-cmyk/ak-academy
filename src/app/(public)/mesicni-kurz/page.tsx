import type { Metadata } from "next";
import Link from "next/link";
import { getCourseWithProgram, getAllInstructors, getAllLocations, getComparisonRows, getAllTestimonials, getGeneralFaq, getCourseFaq } from "@/db/queries";
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

export async function generateMetadata(): Promise<Metadata> {
  const course = await getCourseWithProgram("mesicni-kurz");
  return {
    title: course?.metaTitle,
    description: course?.metaDescription,
    alternates: { canonical: "https://barber-kurzy.com/mesicni-kurz" },
    openGraph: {
      title: course?.metaTitle || undefined,
      description: course?.metaDescription || undefined,
      url: "https://barber-kurzy.com/mesicni-kurz",
      type: "website",
      siteName: "AK BARBERS Academy",
      locale: "cs_CZ",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AK BARBERS Academy" }],
    },
  };
}

export default async function MesicniKurzPage() {
  const course = (await getCourseWithProgram("mesicni-kurz"))!;
  const instructors = await getAllInstructors();
  const testimonials = await getAllTestimonials();
  const locations = await getAllLocations();
  const comparisonRows = await getComparisonRows();
  const courseFaq = course ? await getCourseFaq(course.id) : [];
  const generalFaq = await getGeneralFaq();
  const allFaq = [...courseFaq, ...generalFaq.slice(0, 4)];
  return (
    <>
      <JsonLd data={generateCourseSchema(course)} />
      <JsonLd data={generateFAQSchema(allFaq)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Měsíční kurz", url: "https://barber-kurzy.com/mesicni-kurz" },
        ])}
      />

      <div data-hero>
        <LandingHero
          title="Měsíční barber kurz – 180 hodin profesionální výuky"
          subtitle="Kompletní barber vzdělání od základů po profesionální úroveň. Za jeden měsíc se z úplného začátečníka stanete sebevědomým barberem s certifikátem AK Barbers Academy."
          price={course.price}
          image="/images/courses/mesicni.jpeg"
          ctaText="Přihlásit se na kurz"
          ctaHref="#signup"
          secondaryCtaText="Zobrazit program kurzu"
          secondaryCtaHref="#program"
          trustBadges={[
            { text: "180 hodin praxe" },
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
              Nejkomplexnější barber kurz v České republice
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray">
              Náš vlajkový měsíční kurz je nejintenzivnější barber vzdělání, které v ČR najdete. Za <strong className="text-white">180 hodin</strong> praktické výuky projdete cestu od naprostého začátečníka k sebevědomému profesionálovi. Kurz kombinuje teorii, živé demonstrace od <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">zkušených lektorů</Link> a především praxi na reálných zákaznících.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Na rozdíl od jiných kurzů nezůstáváme jen u cvičných hlav. Už od třetího týdne pracujete na skutečných zákaznících pod dohledem lektora, který vám poskytne okamžitou zpětnou vazbu. Díky malým skupinám (maximálně 6–8 studentů) se vám lektor může věnovat individuálně.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Po úspěšném absolvování získáte <strong className="text-white">certifikát AK Barbers Academy</strong> a nejlepší absolventi mají možnost nastoupit přímo do jedné z <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-2 hover:text-white">poboček AK Barbers</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Jak probíhá typický den v kurzu */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Jak probíhá typický den v kurzu" subtitle="Každý den je naplánován tak, aby maximalizoval vaše učení a praxi" />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-gray">
              <p>
                Výuka začíná každé ráno v <strong className="text-white">9:00 teoretickým blokem</strong>, kde lektor představí techniku dne – vysvětlí principy, ukáže anatomické souvislosti a zodpoví dotazy z předchozího dne. Teorie trvá přibližně hodinu a je doplněna vizuálními pomůckami, diagramy a ukázkami na cvičných hlavách. Důraz klademe na to, abyste rozuměli nejen „jak", ale i „proč" – to vás odliší od barberů, kteří se učili pouze napodobováním.
              </p>
              <p>
                Kolem <strong className="text-white">10:00 přichází live demonstrace</strong>, kde lektor předvede kompletní postup na modelu nebo cvičné hlavě. Můžete se ptát, přistoupit blíž a sledovat každý detail. Naši{" "}
                <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">lektoři</Link>
                {" "}mají desítky let praxe a dokáží srozumitelně vysvětlit i ty nejsložitější techniky. Demonstrace trvá 45–60 minut a vždy zahrnuje komentář ke každému kroku.
              </p>
              <p>
                Dopolední praktický blok od <strong className="text-white">11:00 do 13:00</strong> je věnován tréninku na cvičných hlavách. Každý student pracuje samostatně a lektor obchází, koriguje a radí. Tady si budujete svalovou paměť a jistotu v pohybech. Pracujeme v malých skupinách 6–8 studentů, takže se vám lektor může věnovat individuálně.
              </p>
              <p>
                Po obědové pauze následuje <strong className="text-white">odpolední blok od 14:00 do 17:00</strong>, který je od třetího týdne zaměřen na práci s reálnými zákazníky. Ti přicházejí přímo do{" "}
                <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-2 hover:text-white">barbershopu na pobočce</Link>
                {" "}a vy je stříháte pod přímým dohledem lektora. Právě tento prvek odlišuje AK Academy od většiny barber kurzů v ČR – neučíte se jen na plastových hlavách, ale na skutečných lidech s reálnými vlasy a přáními.
              </p>
              <p>
                Den zakončuje <strong className="text-white">závěrečný review od 17:00</strong>, kde celá skupina rozebere, co se povedlo a co je potřeba zlepšit. Lektor dá každému individuální zpětnou vazbu a zadá doporučení na další den. Tento strukturovaný přístup zajišťuje, že každý den navazuje na předchozí a vaše dovednosti rostou konzistentně.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co se naučíš – grid dovedností */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co se naučíš" subtitle="Konkrétní dovednosti, které ovládnete po absolvování měsíčního kurzu" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { skill: "Fade techniky", desc: "Low fade, mid fade, high fade, skin fade, drop fade a burst fade – ovládnete všechny varianty přechodů se strojkem i nůžkami." },
              { skill: "Taper a blending", desc: "Plynulé přechody mezi délkami, práce s různými nástavci a přesné napojení na kontury hlavy a krku." },
              { skill: "Scissor over comb", desc: "Klasická technika stříhání nůžkami přes hřeben pro přirozenější výsledek a větší kontrolu nad délkou." },
              { skill: "Tvarování vousů", desc: "Design, symetrie a tvarování vousů včetně linek, přechodů a práce s břitvou na konturách." },
              { skill: "Hot towel shave", desc: "Kompletní rituál klasického holení – příprava pokožky, horký ručník, holení břitvou a péče po holení." },
              { skill: "Styling a finishing", desc: "Práce s pomádou, hlínou, voskem, sprejem a dalšími produkty. Naučíte se vybrat správný produkt pro každý typ vlasů." },
              { skill: "Komunikace se zákazníkem", desc: "Profesionální konzultace – analýza tvaru obličeje, doporučení střihu a budování dlouhodobého vztahu s klientem." },
              { skill: "Kreativní designy", desc: "Hair tattoo, linie, parting a další kreativní prvky, které oživí každý střih a odliší vás od konkurence." },
              { skill: "Podnikání v barberingu", desc: "Základy živnostenského podnikání, cenotvorba, marketing a budování osobního brandu na sociálních sítích." },
            ].map((item) => (
              <div key={item.skill} className="rounded-lg border border-border bg-bg-card p-5">
                <h3 className="font-semibold text-accent">{item.skill}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Chcete se zaměřit jen na vybrané techniky? Zvažte náš{" "}
            <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenní intenzivní kurz</Link>
            {" "}nebo{" "}
            <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-2 hover:text-white">jednodenní masterclass</Link>
            {" "}zaměřenou na jednu konkrétní dovednost.
          </p>
        </div>
      </section>

      {/* Kariérní vyhlídky po absolvování */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Kariérní vyhlídky po absolvování" subtitle="Co dělají naši absolventi a kam je kurz posunul" />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-gray">
              <p>
                Absolvování měsíčního kurzu vám otevírá dveře k několika kariérním cestám. Mnozí naši absolventi nastupují přímo do <strong className="text-white">prémiových barbershopů</strong> po celé České republice – a nejlepší z nich dostávají nabídku přímo od AK Barbers. Poptávka po kvalifikovaných barberech neustále roste a s certifikátem AK Academy máte významnou konkurenční výhodu na trhu práce.
              </p>
              <p>
                Řada absolventů se rozhodne pro <strong className="text-white">vlastní podnikání</strong>. Měsíční kurz vás na to připraví nejen po řemeslné stránce, ale i v oblasti podnikání – od živnostenského listu přes cenotvorbu až po marketing na sociálních sítích. Někteří naši absolventi si otevřeli barbershopy v{" "}
                <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-2 hover:text-white">Praze</Link>, {" "}
                <Link href="/barber-kurz-plzen" className="text-accent underline underline-offset-2 hover:text-white">Plzni</Link>, {" "}
                <Link href="/barber-kurz-beroun" className="text-accent underline underline-offset-2 hover:text-white">Berouně</Link>
                {" "}a dalších městech.
              </p>
              <p>
                Pro ambiciózní absolventy existuje i <strong className="text-white">mezinárodní kariéra</strong>. Barber dovednosti jsou univerzální a certifikát AK Academy je uznávaný i v zahraničí. Někteří naši absolventi pracují v Londýně, Dubaji nebo Berlíně. Naši{" "}
                <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">lektoři</Link>
                {" "}sami mají mezinárodní zkušenosti a mohou vás nasměrovat.
              </p>
              <p>
                Nezapomínáme na vás ani po skončení kurzu. AK Academy nabízí <strong className="text-white">post-kurzovou podporu</strong> – můžete se na nás obrátit s dotazy, přijít na{" "}
                <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-2 hover:text-white">jednodenní masterclass</Link>
                {" "}pro zdokonalení konkrétní techniky nebo využít naši síť kontaktů pro hledání práce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro koho je kurz */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je měsíční kurz určen" subtitle="Zjistěte, jestli je tento kurz tou správnou volbou právě pro vás" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {course.forWho?.map((item: string, i: number) => (
              <div key={item} className="rounded-lg border border-border p-6">
                <span className="text-2xl font-bold text-accent">{i + 1}.</span>
                <p className="mt-3 text-sm leading-relaxed text-gray">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Nevíte si rady? Podívejte se na{" "}
            <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenní kurz</Link>
            {" "}pro pokročilé nebo{" "}
            <Link href="/jednodenni-kurz" className="text-accent underline underline-offset-2 hover:text-white">jednodenní masterclass</Link>
            {" "}pro aktivní barbery.
          </p>
        </div>
      </section>

      {/* Program kurzu */}
      <section id="program" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Program měsíčního kurzu" subtitle="4 týdny strukturované výuky od základů po profesionální úroveň" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray">
            Každý týden se zaměřuje na jinou oblast barberingu. Výuka probíhá každý pracovní den (pondělí–pátek) a kombinuje teoretické přednášky, live demonstrace a praktický trénink.
          </p>
          <div className="mt-12">
            {course.program && <CourseProgram weeks={course.program} />}
          </div>
        </div>
      </section>

      {/* Co je v ceně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co je zahrnuto v ceně kurzu" subtitle="Všechno, co potřebujete k úspěšnému startu kariéry" />
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-3">
              {course.includes?.map((item: string) => (
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

      {/* Lektoři */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Vaši lektoři" subtitle="Učte se od mezinárodního týmu zkušených barberů" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray">
            Naši lektoři mají dohromady přes 40 let praxe v oboru. Každý z nich přináší jedinečný pohled na řemeslo.{" "}
            <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">Poznejte celý tým →</Link>
          </p>
          <div className="mt-12">
            <InstructorCards instructors={instructors} />
          </div>
        </div>
      </section>

      {/* Porovnání */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Proč si vybrat AK Academy" subtitle="Podívejte se, čím se lišíme od ostatních barber kurzů v ČR" />
          <div className="mx-auto mt-12 max-w-3xl">
            <ComparisonTable rows={comparisonRows} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Stále váháte? Přečtěte si{" "}
            <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-2 hover:text-white">nejčastější otázky</Link>
            {" "}nebo se podívejte na reference od našich absolventů níže.
          </p>
        </div>
      </section>

      {/* Reference */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co říkají naši absolventi" subtitle="Přečtěte si zkušenosti lidí, kteří kurzem už prošli" />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Pobočky */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Kde měsíční kurz probíhá" subtitle="6 poboček po celé České republice – vyberte si tu nejbližší" />
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
          <SectionHeading title="Časté otázky k měsíčnímu kurzu" subtitle="Odpovědi na nejčastější dotazy – pokud nenajdete odpověď, kontaktujte nás" />
          <div className="mt-12">
            <CourseFAQ items={allFaq} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Máte další otázky? Podívejte se na{" "}
            <Link href="/casto-kladene-otazky" className="text-accent underline underline-offset-2 hover:text-white">kompletní seznam FAQ</Link>
            {" "}nebo nás{" "}
            <Link href="/#contact" className="text-accent underline underline-offset-2 hover:text-white">kontaktujte přímo</Link>.
          </p>
        </div>
      </section>

      {/* Formulář */}
      <section id="signup" className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Přihlaste se na měsíční kurz" subtitle="Vyplňte formulář a ozveme se vám do 24 hodin s termíny a dalšími detaily" />
          <div className="mt-12">
            <CourseSignupForm defaultCourse="Měsíční kurz" />
          </div>
        </div>
      </section>

      {/* Nevíte který kurz? */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Zvažujete i jiné kurzy?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-gray">
              Pokud si nejste jistí, který kurz je pro vás ten pravý, porovnejte všechny naše programy.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/dvoutydeni-kurz"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                2týdenní kurz – {" "}
                <span className="text-gray">15 000 Kč</span>
              </Link>
              <Link
                href="/jednodenni-kurz"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                1denní masterclass – {" "}
                <span className="text-gray">4 999 Kč</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA price={course.price} ctaHref="#signup" />
    </>
  );
}
