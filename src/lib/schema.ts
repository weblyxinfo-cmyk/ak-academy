import { siteConfig } from "./data";
import type { Course, FAQItem, CityData } from "@/types";

export function generateEducationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-ak-barbers.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Národní 949/19",
      addressLocality: "Praha",
      postalCode: "110 00",
      addressCountry: "CZ",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "AK BARBERS",
      url: siteConfig.parentUrl,
    },
  };
}

export function generateCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.longDescription || course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
      sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    },
    url: `${siteConfig.url}/${course.slug}`,
    courseCode: course.id,
    numberOfCredits: course.hours,
    timeRequired: `PT${course.hours}H`,
    educationalLevel: course.level === "beginner" ? "Beginner" : course.level === "advanced" ? "Intermediate" : "Advanced",
    inLanguage: "cs",
    offers: {
      "@type": "Offer",
      price: course.priceNum,
      priceCurrency: "CZK",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/${course.slug}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "AK BARBERS Academy – Praha 1",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Národní 949/19",
          addressLocality: "Praha",
          postalCode: "110 00",
          addressCountry: "CZ",
        },
      },
    },
  };
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema(city: CityData, address: string, zip: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/barber-kurz-${city.slug}`,
    name: `AK BARBERS Academy ${city.name}`,
    description: city.seoDescription,
    url: `${siteConfig.url}/barber-kurz-${city.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo-ak-barbers.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city.name,
      postalCode: zip,
      addressCountry: "CZ",
    },
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
