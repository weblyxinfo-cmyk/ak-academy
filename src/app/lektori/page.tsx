import type { Metadata } from "next";
import { instructors } from "@/lib/data";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/landing/JsonLd";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { InstructorCards } from "@/components/landing/InstructorCards";
import { CourseSelector } from "@/components/landing/CourseSelector";

export const metadata: Metadata = {
  title: "Lektoři – AK BARBERS Academy | Profesionální barber instruktoři",
  description:
    "Poznejte lektory AK BARBERS Academy. Mezinárodní tým zkušených barberů s 10–20 lety praxe. Wayer Hand (USA), Tony, Oddy – učte se od těch nejlepších.",
  alternates: { canonical: "https://barber-kurzy.com/lektori" },
  openGraph: {
    title: "Lektoři – AK BARBERS Academy",
    description: "Poznejte lektory AK BARBERS Academy. Mezinárodní tým zkušených barberů s 10–20 lety praxe.",
    url: "https://barber-kurzy.com/lektori",
    type: "website",
  },
};

export default function LektoriPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: "https://barber-kurzy.com" },
          { name: "Lektoři", url: "https://barber-kurzy.com/lektori" },
        ])}
      />

      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            title="Naši lektoři"
            subtitle="Mezinárodní tým zkušených barberů, kteří vás naučí řemeslo na světové úrovni"
          />
          <div className="mt-12">
            <InstructorCards instructors={instructors} showLongBio />
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
