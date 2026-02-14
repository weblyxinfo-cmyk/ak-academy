import { siteConfig } from "./data";

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
    parentOrganization: {
      "@type": "Organization",
      name: "AK BARBERS",
      url: siteConfig.parentUrl,
    },
  };
}
