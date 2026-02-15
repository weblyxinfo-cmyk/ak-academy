import type { NavItem } from "@/types";

export const siteConfig = {
  name: "AK BARBERS Academy",
  url: "https://barber-kurzy.com",
  parentUrl: "https://www.akbarber.com",
  description:
    "Barber kurzy od 4 999 Kč pod vedením lektorů z AK Barbers. Měsíční, 2týdenní i 1denní kurzy v Praze, Plzni, Berouně a Slaném. Certifikát, praxe na zákaznících.",
  phone: "+420 775 502 831",
  email: "ak.barbers.cz@gmail.com",
  social: {
    facebook: "https://facebook.com/akbarberscz",
    instagram: "https://instagram.com/ak.barbers.cz",
    google: "https://www.google.com/maps/search/Barber+Kurzy+Praha",
  },
  legal: {
    cookies: "https://www.akbarber.com/zasady-pouzivani-souboru-cookie-eu/",
    privacy: "https://www.akbarber.com/prohlaseni-o-ochrane-osobnich-udaju/",
  },
};

export const navItems: NavItem[] = [
  { label: "O akademii", href: "#about" },
  {
    label: "Kurzy",
    href: "#courses",
    children: [
      { label: "Měsíční kurz", href: "/mesicni-kurz" },
      { label: "2týdenní kurz", href: "/dvoutydeni-kurz" },
      { label: "1denní kurz", href: "/jednodenni-kurz" },
    ],
  },
  { label: "Lektoři", href: "#instructors" },
  { label: "Galerie", href: "#gallery" },
  { label: "Reference", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];
