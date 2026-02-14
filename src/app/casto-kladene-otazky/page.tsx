import type { Metadata } from "next";
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
  title: "Často kladené otázky – AK BARBERS Academy | FAQ",
  description:
    "Odpovědi na nejčastější otázky o barber kurzech AK BARBERS Academy. Pro koho jsou kurzy, co potřebuji, certifikát, splátky, pobočky a další.",
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

      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Často kladené otázky"
            subtitle="Odpovědi na nejčastější dotazy o našich kurzech"
          />

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-white">Obecné otázky</h3>
            <div className="mt-6">
              <CourseFAQ items={faqItems} />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-white">Měsíční kurz</h3>
            <div className="mt-6">
              <CourseFAQ items={courseFaqItems.mesicni || []} />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-white">2týdenní kurz</h3>
            <div className="mt-6">
              <CourseFAQ items={courseFaqItems.dvoutydeni || []} />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-white">1denní workshop</h3>
            <div className="mt-6">
              <CourseFAQ items={courseFaqItems.jednodenni || []} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <CourseSelector />
        </div>
      </section>
    </>
  );
}
