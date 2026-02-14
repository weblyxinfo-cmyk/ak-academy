import type { Course, Instructor, Testimonial, FAQItem, NavItem } from "@/types";

export const siteConfig = {
  name: "AK BARBERS Academy",
  url: "https://academy.akbarber.com",
  parentUrl: "https://www.akbarber.com",
  description:
    "Profesionální barber kurzy pod vedením zkušených lektorů z AK Barbers.",
  phone: "+420 775 502 831",
  email: "ak.barbers.cz@gmail.com",
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
    id: "mesicni",
    title: "Měsíční kurz",
    level: "beginner",
    duration: "180 hodin",
    price: "35 000 Kč",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    description:
      "Kompletní barber kurz pro začátečníky i pokročilé. Intenzivní měsíční program pod vedením zkušených lektorů z AK Barbers.",
    highlights: [
      "Základy i pokročilé techniky stříhání",
      "Fade techniky od základů po skin fade",
      "Práce s vousy a břitvou",
      "Práce na reálných zákaznících",
      "Certifikát AK Barbers Academy",
    ],
  },
  {
    id: "dvoutydeni",
    title: "2týdenní kurz",
    level: "advanced",
    duration: "90 hodin",
    price: "15 000 Kč",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    description:
      "Intenzivní dvoutýdenní program zaměřený na klíčové barber dovednosti. Ideální pro ty, kteří se chtějí rychle posunout.",
    highlights: [
      "Moderní střihové techniky",
      "Fade a přechodové techniky",
      "Styling a finishing",
      "Praktický trénink",
      "Certifikát AK Barbers Academy",
    ],
  },
  {
    id: "jednodenni",
    title: "1denní kurz",
    level: "masterclass",
    duration: "10 hodin",
    price: "4 999 Kč",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    description:
      "Jednodenní intenzivní workshop zaměřený na konkrétní techniky. Vhodný pro barbery, kteří si chtějí zdokonalit specifické dovednosti.",
    highlights: [
      "Zaměření na konkrétní techniku",
      "Live demonstrace od lektora",
      "Okamžitá zpětná vazba",
      "Networking s profesionály",
      "Certifikát AK Barbers Academy",
    ],
  },
];

export const instructors: Instructor[] = [
  {
    name: "Wayer Hand",
    role: "Lektor",
    experience: "20 let zkušeností",
    focus: "Precizní fade, ostré detaily, čisté přechody",
    bio: "Americký barber z Philadelphie s dvacetiletou praxí. Wayer je známý svou maximální precizností a schopností vytvořit dokonalé fade přechody. Pod jeho vedením se naučíte techniky na světové úrovni.",
    image: "/images/instructors/wayer-hand.jpg",
  },
  {
    name: "Tony",
    role: "Lektor",
    experience: "10 let zkušeností",
    focus: "Moderní střihy, fade techniky, vousy a styling",
    bio: "Všestranný barber s desetiletou praxí. Tony ovládá celé spektrum moderních pánských střihů – od klasických účesů přes fade techniky až po precizní práci s vousy a styling.",
    image: "/images/instructors/tony.jpg",
  },
  {
    name: "Oddy",
    role: "Lektor",
    experience: "11 let zkušeností",
    focus: "Precizní střihy, přechody, detailní práce",
    bio: "Jedenáct let v oboru a tisíce spokojených klientů. Oddy je perfekcionista, který klade důraz na každý detail. Jeho technika přechodů a čistota práce patří mezi to nejlepší v ČR.",
    image: "/images/instructors/oddy.jpg",
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
      "Kurzy probíhají v Praze, Slaném, Berouně a Plzni. Přesné adresy najdete v sekci Kde probíhají kurzy.",
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
