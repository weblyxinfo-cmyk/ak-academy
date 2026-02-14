import type { Metadata } from "next";
import Link from "next/link";
import { getCourseBySlug, testimonials, instructors, faqItems, courseFaqItems } from "@/lib/data";
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { InstructorCards } from "@/components/landing/InstructorCards";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";
import { CourseFAQ } from "@/components/landing/CourseFAQ";
import { CourseSignupForm } from "@/components/landing/CourseSignupForm";
import { StickyCTA } from "@/components/landing/StickyCTA";

const course = getCourseBySlug("jednodenni-kurz")!;
const allFaq = [...(courseFaqItems.jednodenni || []), ...faqItems.slice(0, 4)];

export const metadata: Metadata = {
  title: course.meta?.title,
  description: course.meta?.description,
  alternates: { canonical: "https://barber-kurzy.com/jednodenni-kurz" },
  openGraph: {
    title: course.meta?.title,
    description: course.meta?.description,
    url: "https://barber-kurzy.com/jednodenni-kurz",
    type: "website",
  },
};

export default function JednodennikurzPage() {
  return (
    <>
      <JsonLd data={generateCourseSchema(course)} />
      <JsonLd data={generateFAQSchema(allFaq)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "1denní kurz", url: "https://barber-kurzy.com/jednodenni-kurz" },
        ])}
      />

      <div data-hero>
        <LandingHero
          title="1denní barber masterclass – intenzivní workshop"
          subtitle="10 hodin koncentrovaného know-how od špičkových lektorů. Live demonstrace, hands-on trénink a okamžitá zpětná vazba – vše za jeden den."
          price={course.price}
          ctaText="Přihlásit se na workshop"
          ctaHref="#signup"
          trustBadges={[
            { text: "10 hodin výuky" },
            { text: "Live demonstrace" },
            { text: "Certifikát" },
          ]}
        />
      </div>

      {/* Úvod */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Zdokonalte se za jeden den
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray">
              Jednodenní masterclass je intenzivní workshop vedený{" "}
              <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">špičkovými lektory AK Barbers Academy</Link>
              . Za jeden den získáte koncentrované know-how v oblasti, kterou si chcete zdokonalit. Workshop zahrnuje live demonstrace na modelech, hands-on trénink a okamžitou zpětnou vazbu od lektora.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Tento formát je ideální pro aktivní barbery, kteří chtějí posunout svou práci na vyšší úroveň, ale nemají čas na{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">měsíční</Link>
              {" "}nebo{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenní kurz</Link>
              . Je to také skvělý způsob, jak „ochutnat" výuku v AK Academy před delším programem.
            </p>
          </div>
        </div>
      </section>

      {/* Co stihneš za jeden den */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co stihneš za jeden den" subtitle="Podrobný hodinový rozvrh masterclass od rána do večera" />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-6">
              {[
                { time: "8:30 – 9:00", title: "Registrace a welcome coffee", desc: "Přivítání, seznámení s lektorem a ostatními účastníky. Krátký úvod k tématu dne a rozdání materiálů." },
                { time: "9:00 – 10:30", title: "Teoretický blok", desc: "Lektor představí techniku dne do hloubky – principy, anatomické souvislosti, typické chyby a jak se jim vyhnout. Prezentace s vizuálními ukázkami a prostor pro dotazy." },
                { time: "10:30 – 12:00", title: "Live demonstrace", desc: "Lektor předvede kompletní postup na modelu. Můžete sledovat z bezprostřední blízkosti, ptát se a fotit si jednotlivé kroky. Komentář ke každému pohybu a rozhodnutí." },
                { time: "12:00 – 13:00", title: "Oběd a networking", desc: "Společný oběd (v ceně workshopu) a neformální diskuze s lektorem i ostatními účastníky. Výměna zkušeností a kontaktů." },
                { time: "13:00 – 15:30", title: "Hands-on trénink", desc: "Hlavní praktický blok – zkoušíte si techniku sami na cvičných hlavách nebo modelech pod vedením lektora. Individuální korekce a okamžitá zpětná vazba v reálném čase." },
                { time: "15:30 – 17:00", title: "Pokročilé variace", desc: "Lektor ukáže pokročilé variace techniky a tipy pro různé typy vlasů. Druhá hands-on session zaměřená na detaily a fine-tuning vašeho provedení." },
                { time: "17:00 – 18:00", title: "Q&A a závěr", desc: "Otevřená diskuze, zodpovězení všech zbývajících dotazů, tipy na další vzdělávání. Předání certifikátů AK Barbers Academy a společné foto." },
              ].map((item) => (
                <div key={item.time} className="flex gap-4 rounded-lg border border-border p-4">
                  <span className="shrink-0 text-sm font-bold text-accent">{item.time}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray">
              Chcete se ponořit hlouběji? Podívejte se na náš{" "}
              <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenní intenzivní kurz</Link>
              {" "}nebo{" "}
              <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">kompletní měsíční program</Link>
              {" "}pro začátečníky.
            </p>
          </div>
        </div>
      </section>

      {/* Pro koho je masterclass ideální */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je masterclass ideální" subtitle="Tři typické profily účastníků našich jednodenních workshopů" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-xl">
                &#9986;
              </div>
              <h3 className="mt-4 font-semibold text-white">Zkušený barber</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Stříháte několik let, ale cítíte, že se zasekáváte? Masterclass vám ukáže nové techniky, aktuální trendy a tipy od{" "}
                <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">lektorů s mezinárodní praxí</Link>
                . Oživte svou práci a nabídněte zákazníkům něco nového. Ideální pro barbery, kteří chtějí zvládnout skin fade, hot towel shave nebo moderní textury na profesionální úrovni.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-xl">
                &#127970;
              </div>
              <h3 className="mt-4 font-semibold text-white">Majitel salonu</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Chcete sjednotit kvalitu ve svém barbershopu? Přihlaste celý tým na masterclass jako firemní školení. Lektor přizpůsobí obsah vašim potřebám a zajistí, že všichni vaši barbeři ovládají stejné techniky na stejné úrovni. Investice do vzdělání týmu se vrátí v podobě spokojenějších zákazníků a vyšších tržeb.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-xl">
                &#128161;
              </div>
              <h3 className="mt-4 font-semibold text-white">Nadšenec a začátečník</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                Stříháte kamarády a uvažujete o kariéře v barberingu? Jednodenní workshop je perfektní způsob, jak si to vyzkoušet nanečisto. Zjistíte, jestli vás řemeslo baví, a pokud ano, můžete pokračovat na{" "}
                <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">měsíčním kurzu</Link>
                {" "}nebo{" "}
                <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenním intenzivním programu</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jak probíhá */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Jak workshop probíhá" subtitle="Intenzivní den plný praxe a nových poznatků ve třech krocích" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">1.</p>
              <h3 className="mt-2 font-semibold text-white">Teorie a ukázka</h3>
              <p className="mt-2 text-sm text-gray">
                Lektor vysvětlí techniku a předvede ji live na modelu. Uvidíte každý detail naživo – od přípravy po finální výsledek.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">2.</p>
              <h3 className="mt-2 font-semibold text-white">Hands-on trénink</h3>
              <p className="mt-2 text-sm text-gray">
                Vyzkoušíte si techniku sami pod vedením lektora. Okamžitá zpětná vazba a korekce v reálném čase – to je klíč k rychlému zlepšení.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-bold text-accent">3.</p>
              <h3 className="mt-2 font-semibold text-white">Diskuze a networking</h3>
              <p className="mt-2 text-sm text-gray">
                Q&A session s lektorem, sdílení zkušeností s ostatními barbery a certifikát AK Barbers Academy na závěr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro koho je workshop */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Pro koho je masterclass určena" subtitle="Zjistěte, jestli je jednodenní workshop pro vás" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {course.forWho?.map((item, i) => (
              <div key={item} className="rounded-lg border border-border p-6">
                <span className="text-2xl font-bold text-accent">{i + 1}.</span>
                <p className="mt-3 text-sm leading-relaxed text-gray">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray">
            Jste začátečník a chcete kompletní vzdělání? Podívejte se na{" "}
            <Link href="/mesicni-kurz" className="text-accent underline underline-offset-2 hover:text-white">měsíční kurz</Link>
            {" "}nebo{" "}
            <Link href="/dvoutydeni-kurz" className="text-accent underline underline-offset-2 hover:text-white">2týdenní intenzivní program</Link>.
          </p>
        </div>
      </section>

      {/* Co je v ceně */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co je zahrnuto v ceně workshopu" />
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
              Cena workshopu je <strong className="text-white">{course.price}</strong>. Workshop probíhá v{" "}
              <Link href="/barber-kurz-praha" className="text-accent underline underline-offset-2 hover:text-white">Praze</Link>
              {" "}a dalších městech.
            </p>
          </div>
        </div>
      </section>

      {/* Lektoři */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Vaši lektoři" subtitle="Mezinárodní tým profesionálních barberů" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray">
            <Link href="/lektori" className="text-accent underline underline-offset-2 hover:text-white">Poznejte celý tým →</Link>
          </p>
          <div className="mt-12">
            <InstructorCards instructors={instructors} />
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Co říkají naši absolventi" subtitle="Zkušenosti lidí, kteří prošli našimi kurzy" />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading title="Časté otázky k masterclass" />
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
          <SectionHeading title="Přihlaste se na workshop" subtitle="Vyplňte formulář a ozveme se vám s nejbližším termínem" />
          <div className="mt-12">
            <CourseSignupForm defaultCourse="1denní kurz" />
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Hledáte komplexnější vzdělání?</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-gray">
              Jednodenní workshop je skvělý start. Pokud chcete kompletní barber vzdělání, podívejte se na naše delší programy.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/mesicni-kurz" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent">
                Měsíční kurz – <span className="text-gray">35 000 Kč</span>
              </Link>
              <Link href="/dvoutydeni-kurz" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent">
                2týdenní kurz – <span className="text-gray">15 000 Kč</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA price={course.price} ctaHref="#signup" ctaText="Přihlásit se" />
    </>
  );
}
