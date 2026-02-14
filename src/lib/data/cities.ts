import type { CityData } from "@/types";

export const cityData: CityData[] = [
  {
    slug: "praha",
    name: "Praha",
    nameLocativ: "Praze",
    locations: ["praha-1", "praha-6"],
    seoTitle: "Barber kurzy Praha – AK BARBERS Academy | Profesionální výuka",
    seoDescription:
      "Barber kurzy v Praze od AK BARBERS Academy. Měsíční, 2týdenní i 1denní kurzy v centru Prahy. Pobočka Národní 949/19, Praha 1. Certifikát, praxe na zákaznících.",
    heroTitle: "Barber kurzy v Praze",
    heroSubtitle:
      "Profesionální barber vzdělání v srdci Prahy. Učte se od těch nejlepších v oboru na adrese Národní 949/19, Praha 1.",
    whyText:
      "Praha je centrem českého barberingu a naše hlavní pobočka na Národní třídě je toho důkazem. Skvělá dostupnost metrem, tramvajemi i autem – a po kurzu si můžete rovnou najít práci v jednom z mnoha pražských barbershopů.",
  },
  {
    slug: "plzen",
    name: "Plzeň",
    nameLocativ: "Plzni",
    locations: ["plzen"],
    seoTitle: "Barber kurzy Plzeň – AK BARBERS Academy | Profesionální výuka",
    seoDescription:
      "Barber kurzy v Plzni od AK BARBERS Academy. Měsíční, 2týdenní i 1denní kurzy. Pobočka Gerská 2030/23, Plzeň. Certifikát AK Barbers.",
    heroTitle: "Barber kurzy v Plzni",
    heroSubtitle:
      "Profesionální barber kurzy přímo v Plzni. Nemusíte dojíždět do Prahy – kvalitní vzdělání je blíž, než si myslíte.",
    whyText:
      "Plzeň je druhé největší město v západních Čechách a naše pobočka vám ušetří čas i peníze za dojíždění do Prahy. Stejní lektoři, stejná kvalita – jen blíž k vám.",
  },
  {
    slug: "beroun",
    name: "Beroun",
    nameLocativ: "Berouně",
    locations: ["beroun-1", "beroun-2"],
    seoTitle: "Barber kurzy Beroun – AK BARBERS Academy | Profesionální výuka",
    seoDescription:
      "Barber kurzy v Berouně od AK BARBERS Academy. Měsíční, 2týdenní i 1denní kurzy. Dvě pobočky v centru Berouna. Certifikát AK Barbers.",
    heroTitle: "Barber kurzy v Berouně",
    heroSubtitle:
      "Barber vzdělání přímo v Berouně. Dvě pobočky v centru města, snadná dostupnost vlakem z Prahy.",
    whyText:
      "Beroun je ideální volba pro studenty ze Středočeského kraje. Dvě pobočky v centru města, vlakové spojení z Prahy za 30 minut a klidnější prostředí pro soustředěnou výuku.",
  },
  {
    slug: "slany",
    name: "Slaný",
    nameLocativ: "Slaném",
    locations: ["slany"],
    seoTitle: "Barber kurzy Slaný – AK BARBERS Academy | Profesionální výuka",
    seoDescription:
      "Barber kurzy ve Slaném od AK BARBERS Academy. Měsíční, 2týdenní i 1denní kurzy. Pobočka Třebízského 182. Certifikát AK Barbers.",
    heroTitle: "Barber kurzy ve Slaném",
    heroSubtitle:
      "Profesionální barber kurzy ve Slaném. Malé město, velké možnosti – kvalitní vzdělání blízko domova.",
    whyText:
      "Slaný nabízí komfortní prostředí pro výuku bez velkoměstského shonu. Pobočka je snadno dostupná a v menší skupině se vám lektoři mohou věnovat ještě intenzivněji.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cityData.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityData.map((c) => c.slug);
}
