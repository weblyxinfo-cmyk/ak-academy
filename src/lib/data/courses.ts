import type { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "mesicni",
    slug: "mesicni-kurz",
    title: "Měsíční kurz",
    level: "beginner",
    duration: "180 hodin",
    hours: 180,
    price: "35 000 Kč",
    priceNum: 35000,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    description:
      "Kompletní barber kurz pro začátečníky i pokročilé. Intenzivní měsíční program pod vedením zkušených lektorů z AK Barbers.",
    longDescription:
      "Náš vlajkový měsíční kurz je nejkomplexnější barber vzdělání v České republice. Za 180 hodin intenzivního tréninku se z úplného začátečníka stanete sebevědomým barberem připraveným na profesionální kariéru. Kurz kombinuje teorii, demonstrace a především praxi na reálných zákaznících pod dohledem zkušených lektorů.",
    highlights: [
      "Základy i pokročilé techniky stříhání",
      "Fade techniky od základů po skin fade",
      "Práce s vousy a břitvou",
      "Práce na reálných zákaznících",
      "Certifikát AK Barbers Academy",
    ],
    forWho: [
      "Úplní začátečníci, kteří chtějí kariéru v barberingu",
      "Kadeřníci, kteří se chtějí přeorientovat na pánské stříhání",
      "Lidé hledající novou kariéru s rychlým uplatněním",
    ],
    includes: [
      "180 hodin praktické výuky",
      "Veškeré materiály a nástroje po dobu kurzu",
      "Práce na reálných zákaznících",
      "Certifikát AK Barbers Academy",
      "Možnost nástupu do AK Barbers",
      "Podpora po dokončení kurzu",
    ],
    program: [
      {
        week: 1,
        title: "Základy barberingu",
        topics: [
          "Anatomie vlasu a kůže hlavy",
          "Hygiena a bezpečnost práce",
          "Základní střihové techniky nůžkami",
          "Práce se strojkem – základy",
          "Mytí a příprava vlasů",
        ],
      },
      {
        week: 2,
        title: "Fade techniky",
        topics: [
          "Low fade, mid fade, high fade",
          "Skin fade od základů",
          "Blending a přechody",
          "Práce s různými typy vlasů",
          "Korekce chyb",
        ],
      },
      {
        week: 3,
        title: "Vousy a styling",
        topics: [
          "Práce s břitvou a holení",
          "Úprava a tvarování vousů",
          "Hot towel shave",
          "Styling a finishing produkty",
          "Kreativní střihy a designy",
        ],
      },
      {
        week: 4,
        title: "Praxe a kariéra",
        topics: [
          "Intenzivní praxe na zákaznících",
          "Konzultace se zákazníkem",
          "Budování klientely",
          "Základy podnikání v barberingu",
          "Závěrečná zkouška a certifikace",
        ],
      },
    ],
    meta: {
      title: "Měsíční barber kurz 180h – Kompletní vzdělání | AK BARBERS Academy",
      description:
        "Kompletní měsíční barber kurz – 180 hodin intenzivní výuky za 35 000 Kč. Fade techniky, práce s břitvou, certifikát. Praxe na zákaznících v Praze.",
    },
  },
  {
    id: "dvoutydeni",
    slug: "dvoutydeni-kurz",
    title: "2týdenní kurz",
    level: "advanced",
    duration: "90 hodin",
    hours: 90,
    price: "15 000 Kč",
    priceNum: 15000,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    description:
      "Intenzivní dvoutýdenní program zaměřený na klíčové barber dovednosti. Ideální pro ty, kteří se chtějí rychle posunout.",
    longDescription:
      "Dvoutýdenní intenzivní kurz je ideální volba pro ty, kteří mají základní zkušenosti s kadeřnictvím nebo stříháním a chtějí se specializovat na barber techniky. Za 90 hodin získáte všechny klíčové dovednosti potřebné pro práci v moderním barbershopu.",
    highlights: [
      "Moderní střihové techniky",
      "Fade a přechodové techniky",
      "Styling a finishing",
      "Praktický trénink",
      "Certifikát AK Barbers Academy",
    ],
    forWho: [
      "Kadeřníci s praxí, kteří chtějí barber specializaci",
      "Samouci, kteří chtějí formální vzdělání",
      "Ti, kteří nemají měsíc na denní docházení",
    ],
    includes: [
      "90 hodin praktické výuky",
      "Veškeré materiály a nástroje po dobu kurzu",
      "Práce na reálných zákaznících",
      "Certifikát AK Barbers Academy",
      "Podpora po dokončení kurzu",
    ],
    program: [
      {
        week: 1,
        title: "Techniky stříhání a fade",
        topics: [
          "Rekapitulace základů stříhání",
          "Fade techniky – low, mid, high, skin",
          "Blending a přechody na různých typech vlasů",
          "Práce se strojkem a nůžkami",
          "Moderní pánské účesy",
        ],
      },
      {
        week: 2,
        title: "Vousy, styling a praxe",
        topics: [
          "Úprava vousů a holení břitvou",
          "Styling a finishing",
          "Intenzivní praxe na zákaznících",
          "Konzultace a komunikace se zákazníkem",
          "Závěrečná zkouška a certifikace",
        ],
      },
    ],
    meta: {
      title: "2týdenní barber kurz 90h – Intenzivní program | AK BARBERS Academy",
      description:
        "Intenzivní 2týdenní barber kurz – 90 hodin za 15 000 Kč. Fade techniky, vousy, styling. Certifikát AK Barbers Academy. Kurzy v Praze a dalších městech.",
    },
  },
  {
    id: "jednodenni",
    slug: "jednodenni-kurz",
    title: "1denní kurz",
    level: "masterclass",
    duration: "10 hodin",
    hours: 10,
    price: "4 999 Kč",
    priceNum: 4999,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    description:
      "Jednodenní intenzivní workshop zaměřený na konkrétní techniky. Vhodný pro barbery, kteří si chtějí zdokonalit specifické dovednosti.",
    longDescription:
      "Jednodenní masterclass je intenzivní workshop vedený špičkovými lektory. Za jeden den získáte koncentrované know-how v oblasti, kterou si chcete zdokonalit. Workshop zahrnuje live demonstrace, hands-on trénink a okamžitou zpětnou vazbu od lektora.",
    highlights: [
      "Zaměření na konkrétní techniku",
      "Live demonstrace od lektora",
      "Okamžitá zpětná vazba",
      "Networking s profesionály",
      "Certifikát AK Barbers Academy",
    ],
    forWho: [
      "Aktivní barbeři, kteří chtějí zdokonalit konkrétní techniku",
      "Profesionálové hledající inspiraci a nové trendy",
      "Kdo chce ochutnat barber vzdělání před delším kurzem",
    ],
    includes: [
      "10 hodin intenzivní výuky",
      "Live demonstrace na modelech",
      "Hands-on trénink pod vedením lektora",
      "Certifikát AK Barbers Academy",
      "Občerstvení po dobu workshopu",
    ],
    meta: {
      title: "1denní barber masterclass – Workshop pro barbery | AK BARBERS Academy",
      description:
        "Jednodenní barber masterclass – 10 hodin za 4 999 Kč. Live demonstrace, hands-on trénink, certifikát. Zdokonalte své techniky za jeden den.",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
