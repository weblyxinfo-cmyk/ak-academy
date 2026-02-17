import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Instructors } from "@/components/sections/Instructors";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/landing/JsonLd";
import { generateEducationalOrganizationSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/data";
import { getGeneralFaq } from "@/db/queries";

export default async function HomePage() {
  const faqItems = await getGeneralFaq();
  return (
    <>
      <JsonLd data={generateEducationalOrganizationSchema()} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Domů", url: siteConfig.url },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "cs",
          publisher: {
            "@type": "EducationalOrganization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <Hero />
      <About />
      <Courses />
      <Instructors />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
