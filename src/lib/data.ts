import type { Course, Instructor, Testimonial, FAQItem, NavItem } from "@/types";

export const siteConfig = {
  name: "AK BARBERS Academy",
  url: "https://academy.akbarber.com",
  parentUrl: "https://www.akbarber.com",
  description:
    "Profesionální barber kurzy pod vedením zkušených lektorů z AK Barbers.",
  phone: "+420 775 502 831",
  email: "academy@akbarber.com",
  social: {
    facebook: "https://facebook.com/akbarberscz",
    instagram: "https://instagram.com/ak.barbers.cz",
  },
  legal: {
    cookies: "https://www.akbarber.com/zasady-pouzivani-souboru-cookie-eu/",
    privacy: "https://www.akbarber.com/prohlaseni-o-ochrane-osobnich-udaju/",
  },
};

export const navItems: NavItem[] = [
  { label: "O akademii", href: "#about" },
  { label: "Kurzy", href: "#courses" },
  { label: "Lektoři", href: "#instructors" },
  { label: "Galerie", href: "#gallery" },
  { label: "Reference", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

export const courses: Course[] = [
  {
    id: "beginner",
    title: "Základní kurz barberingu",
    level: "beginner",
    duration: "4 týdny (80 hodin)",
    price: "24 900 Kč",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    description:
      "Komplexní kurz pro úplné začátečníky. Naučíte se základy střihu, práci s nůžkami a strojkem, a základní techniky fade.",
    highlights: [
      "Základy pánského stříhání",
      "Práce s nůžkami a strojkem",
      "Základní fade techniky",
      "Hygiena a bezpečnost",
      "Certifikát po dokončení",
    ],
  },
  {
    id: "advanced",
    title: "Pokročilý kurz",
    level: "advanced",
    duration: "2 týdny (40 hodin)",
    price: "14 900 Kč",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    description:
      "Pro barbery s praxí, kteří si chtějí zdokonalit své dovednosti. Zaměření na pokročilé fade techniky a moderní střihy.",
    highlights: [
      "Pokročilé fade techniky",
      "Skin fade a crop fade",
      "Práce s dlouhými vlasy",
      "Úprava vousů břitvou",
      "Certifikát po dokončení",
    ],
  },
  {
    id: "masterclass",
    title: "Masterclass s Adrianem",
    level: "masterclass",
    duration: "1 den (8 hodin)",
    price: "4 900 Kč",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    description:
      "Exkluzivní jednodenní workshop s majitelem AK Barbers Adrianem Křižanem. Limitovaný počet míst.",
    highlights: [
      "Osobní vedení Adriana Křižana",
      "Nejnovější trendy a techniky",
      "Live demonstrace",
      "Networking s profesionály",
      "Certifikát po dokončení",
    ],
  },
];

export const instructors: Instructor[] = [
  {
    name: "Adrian Křižan",
    role: "Zakladatel & hlavní lektor",
    bio: "Zakladatel sítě AK Barbers s více než 10 lety zkušeností. Osobně vyškolil desítky barberů, kteří dnes pracují v celé ČR a SR.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    instagram: "https://instagram.com/ak.barbers.cz",
  },
  {
    name: "Tomáš Novák",
    role: "Senior lektor",
    bio: "Zkušený barber s praxí v prémiových barbershopech. Specialista na fade techniky a moderní pánské střihy.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Marek Horák",
    role: "Lektor & barber",
    bio: "Absolvent AK Academy, který se vypracoval na pozici lektora. Důkaz, že naše kurzy opravdu fungují.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jakub Marek",
    course: "Základní kurz",
    rating: 5,
    text: "Díky kurzu jsem si splnil sen a otevřel si vlastní barbershop. Skvělý přístup lektorů a praktické zaměření.",
  },
  {
    name: "Petr Svoboda",
    course: "Pokročilý kurz",
    rating: 5,
    text: "Posunul jsem své dovednosti na úplně jinou úroveň. Techniky fade, které jsem se naučil, moji klienti milují.",
  },
  {
    name: "Martin Dvořák",
    course: "Masterclass",
    rating: 5,
    text: "Jednodenní workshop s Adrianem byl nabitý informacemi. Získal jsem nový pohled na řemeslo i podnikání.",
  },
  {
    name: "Ondřej Vlček",
    course: "Základní kurz",
    rating: 4,
    text: "Profesionální zázemí, kvalitní materiály a hlavně skvělí lektoři. Doporučuji všem, kdo to myslí s barberingem vážně.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Pro koho jsou kurzy určeny?",
    answer:
      "Naše kurzy jsou určeny pro úplné začátečníky i zkušené barbery. Základní kurz nevyžaduje žádné předchozí zkušenosti, pokročilý kurz je vhodný pro barbery s minimálně 6měsíční praxí.",
  },
  {
    question: "Co potřebuji s sebou na kurz?",
    answer:
      "Veškeré vybavení a materiály jsou součástí kurzu. Stačí přijít v pohodlném oblečení a s chutí se učit.",
  },
  {
    question: "Získám po kurzu certifikát?",
    answer:
      "Ano, po úspěšném dokončení každého kurzu obdržíte certifikát AK Barbers Academy, který potvrzuje vaše dovednosti.",
  },
  {
    question: "Kde kurzy probíhají?",
    answer:
      "Kurzy probíhají v našich školících prostorách v Praze. Přesnou adresu a detaily obdržíte po přihlášení.",
  },
  {
    question: "Mohu platit na splátky?",
    answer:
      "Ano, nabízíme možnost platby na splátky. Pro více informací nás kontaktujte přes kontaktní formulář.",
  },
  {
    question: "Pomohou mi po kurzu s hledáním práce?",
    answer:
      "Absolutně! Nejlepší absolventi mají možnost nastoupit přímo do jedné z poboček AK Barbers. Zároveň vám pomůžeme s přípravou na pohovory v dalších barbershopech.",
  },
];
