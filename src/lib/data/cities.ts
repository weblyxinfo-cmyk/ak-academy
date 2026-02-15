import type { CityData } from "@/types";

export const cityData: CityData[] = [
  {
    slug: "praha",
    name: "Praha",
    nameLocativ: "Praze",
    locations: ["praha-1", "praha-6"],
    seoTitle: "Barber kurzy Praha – Profesionální barber výuka",
    seoDescription:
      "Barber kurzy v centru Prahy od 4 999 Kč. 2 pobočky – Národní 949/19 (metro B) a Praha 6. Měsíční, 2týdenní i 1denní kurzy s certifikátem. Praxe na reálných zákaznících. Přihlaste se.",
    heroTitle: "Barber kurzy v Praze",
    heroSubtitle:
      "Profesionální barber vzdělání v srdci Prahy. Učte se od těch nejlepších v oboru na adrese Národní 949/19, Praha 1.",
    whyText:
      "Praha je centrem českého barberingu a naše hlavní pobočka na Národní třídě je toho důkazem. Skvělá dostupnost metrem, tramvajemi i autem – a po kurzu si můžete rovnou najít práci v jednom z mnoha pražských barbershopů. V Praze působí přes 200 barbershopů a poptávka po kvalifikovaných barberech stále roste, zejména v centru města a na Vinohradech, Žižkově či Smíchově. Naši studenti zde navíc získávají zkušenosti s mezinárodní klientelou – Praha přitahuje zákazníky z celého světa, což je neocenitelná praxe pro budoucí kariéru. Díky dvěma pobočkám (Národní třída a Bělohorská) si snadno vyberete tu, která vám vyhovuje.",
  },
  {
    slug: "plzen",
    name: "Plzeň",
    nameLocativ: "Plzni",
    locations: ["plzen"],
    seoTitle: "Barber kurzy Plzeň – Profesionální barber výuka",
    seoDescription:
      "Barber kurzy v Plzni od 4 999 Kč – nemusíte dojíždět do Prahy. Pobočka Gerská 2030/23, trolejbus 13. Stejní lektoři jako v Praze, certifikát AK Barbers. Přihlaste se online.",
    heroTitle: "Barber kurzy v Plzni",
    heroSubtitle:
      "Profesionální barber kurzy přímo v Plzni. Nemusíte dojíždět do Prahy – kvalitní vzdělání je blíž, než si myslíte.",
    whyText:
      "Plzeň je druhé největší město v západních Čechách a naše pobočka vám ušetří čas i peníze za dojíždění do Prahy. Stejní lektoři, stejná kvalita – jen blíž k vám. Plzeňská barber scéna se v posledních letech dynamicky rozvíjí a město nabízí skvělé podmínky pro start kariéry – nižší náklady na život oproti Praze, rostoucí počet barbershopů a loajální klientelu, která si zakládá na kvalitě. Pobočka na Gerské je dobře dostupná trolejbusem č. 13 i autem s možností parkování v okolí, takže je pohodlně dosažitelná i pro studenty z Klatov, Rokycan či Domažlic.",
  },
  {
    slug: "beroun",
    name: "Beroun",
    nameLocativ: "Berouně",
    locations: ["beroun-1", "beroun-2"],
    seoTitle: "Barber kurzy Beroun – Profesionální barber výuka",
    seoDescription:
      "Barber kurzy v Berouně od 4 999 Kč. Dvě pobočky v centru města, 30 min vlakem z Prahy. Menší skupiny, více individuální pozornosti. Certifikát AK Barbers. Přihlaste se.",
    heroTitle: "Barber kurzy v Berouně",
    heroSubtitle:
      "Barber vzdělání přímo v Berouně. Dvě pobočky v centru města, snadná dostupnost vlakem z Prahy.",
    whyText:
      "Beroun je ideální volba pro studenty ze Středočeského kraje. Dvě pobočky v centru města, vlakové spojení z Prahy za 30 minut a klidnější prostředí pro soustředěnou výuku. Beroun leží na strategickém místě mezi Prahou a Plzní, takže je snadno dostupný z obou směrů. Malé město přináší výhodu v podobě menšího rozptýlení – studenti se mohou plně soustředit na praktickou výuku bez velkoměstského shonu. Navíc obě berounské pobočky (Havlíčkova a Plzeňská) se nacházejí přímo v historickém centru, kde je příjemná atmosféra pro studium i odpočinek o přestávkách.",
  },
  {
    slug: "slany",
    name: "Slaný",
    nameLocativ: "Slaném",
    locations: ["slany"],
    seoTitle: "Barber kurzy Slaný – Profesionální barber výuka",
    seoDescription:
      "Barber kurzy ve Slaném od 4 999 Kč. Klidné prostředí, malé skupiny a intenzivnější pozornost lektorů. Pobočka Třebízského 182, 5 min od nádraží. Certifikát AK Barbers. Přihlaste se.",
    heroTitle: "Barber kurzy ve Slaném",
    heroSubtitle:
      "Profesionální barber kurzy ve Slaném. Malé město, velké možnosti – kvalitní vzdělání blízko domova.",
    whyText:
      "Slaný nabízí komfortní prostředí pro výuku bez velkoměstského shonu. Pobočka je snadno dostupná a v menší skupině se vám lektoři mohou věnovat ještě intenzivněji. Slaný je historické královské město s přátelskou atmosférou, kde se studenti rychle cítí jako doma. Díky menšímu počtu účastníků v kurzech získáte více individuální pozornosti a zpětné vazby od lektorů, což se přímo projeví na rychlosti vašeho pokroku. Město je dobře napojené na Prahu i Kladno autobusovým i vlakovým spojením, takže dojíždění je pohodlné i bez auta.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cityData.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityData.map((c) => c.slug);
}
