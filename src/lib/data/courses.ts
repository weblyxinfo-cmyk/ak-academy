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
      "Náš vlajkový měsíční kurz je nejkomplexnější barber vzdělání v České republice. Za 180 hodin intenzivního tréninku se z úplného začátečníka stanete sebevědomým barberem připraveným na profesionální kariéru. Kurz kombinuje teorii, demonstrace a především praxi na reálných zákaznících pod dohledem zkušených lektorů. Výuka probíhá v malých skupinách maximálně 6–8 studentů, takže se vám lektoři mohou věnovat individuálně a poskytnout okamžitou zpětnou vazbu. Absolventi měsíčního kurzu mají možnost nastoupit přímo do jedné z poboček AK Barbers nebo si otevřít vlastní barbershop s plnou podporou naší akademie.",
    highlights: [
      "Základy i pokročilé techniky stříhání nůžkami a strojkem",
      "Fade techniky od základů po skin fade včetně drop fade a burst fade",
      "Práce s vousy, břitvou a hot towel shave",
      "Scissor over comb a texturizační techniky",
      "Intenzivní praxe na reálných zákaznících od třetího týdne",
      "Konzultace se zákazníkem a budování klientely",
      "Certifikát AK Barbers Academy s možností nástupu do AK Barbers",
    ],
    forWho: [
      "Úplní začátečníci bez jakýchkoliv zkušeností, kteří chtějí budovat profesionální kariéru v barberingu od základů a hledají komplexní vzdělání pod vedením zkušených mentorů",
      "Kadeřníci a kadeřnice s praxí v dámském stříhání, kteří se chtějí přeorientovat na pánské stříhání a moderní barber techniky – kurz vám pomůže přenést vaše stávající dovednosti do světa barberingu",
      "Lidé hledající kompletní kariérní změnu s rychlým uplatněním na trhu práce – barber profese nabízí flexibilitu, kreativitu a stabilní příjem jak v zaměstnání, tak na volné noze",
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
          "Anatomie vlasu a kůže hlavy – struktura, typy vlasů, růstové vzorce",
          "Hygiena, dezinfekce a bezpečnost práce v barbershopu",
          "Základní střihové techniky nůžkami – rovný střih, vrstvení, point cutting",
          "Práce se strojkem – základy nastavení, údržba, bezpečné vedení",
          "Mytí, příprava vlasů a analýza tvaru hlavy",
          "Ergonomie práce a správné držení nástrojů",
          "Úvod do komunikace se zákazníkem a konzultace",
        ],
      },
      {
        week: 2,
        title: "Fade techniky",
        topics: [
          "Low fade, mid fade, high fade – rozdíly a použití",
          "Skin fade od základů po pokročilou úroveň",
          "Drop fade a burst fade techniky",
          "Blending a přechody – foil shaver, trimmer, nůžky",
          "Práce s různými typy vlasů – rovné, vlnité, kudrnaté, afro",
          "Korekce chyb a troubleshooting nepovedených přechodů",
          "Scissor over comb technika a texturizace",
        ],
      },
      {
        week: 3,
        title: "Vousy a styling",
        topics: [
          "Práce s břitvou a bezpečné holení – tahy, úhly, technika",
          "Úprava a tvarování vousů – design, symetrie, linky",
          "Hot towel shave – kompletní rituál klasického holení",
          "Styling a finishing produkty – pomáda, hlína, vosk, sprej",
          "Kreativní střihy a hair designy – linie, vzory, parting",
          "Barvení a maskování řídkých míst ve vlasech i vousech",
          "Péče o pokožku po holení a poradenství zákazníkům",
        ],
      },
      {
        week: 4,
        title: "Praxe a kariéra",
        topics: [
          "Intenzivní praxe na reálných zákaznících pod dohledem lektora",
          "Konzultace se zákazníkem – analýza obličeje, doporučení střihu",
          "Budování klientely a osobního brandu na sociálních sítích",
          "Základy podnikání v barberingu – živnostenský list, ceny, pronájem křesla",
          "Time management – jak zvládnout střih v 30 minutách",
          "Portfolio a Instagram pro barbery – jak fotit svou práci",
          "Závěrečná zkouška, certifikace a slavnostní předání diplomů",
        ],
      },
    ],
    meta: {
      title: "Měsíční barber kurz 180h – Kompletní barber vzdělání",
      description:
        "Kompletní měsíční barber kurz – 180 hodin intenzivní výuky za 35 000 Kč. Fade techniky, práce s břitvou, styling vousů. Certifikát + praxe na reálných zákaznících. Přihlaste se online.",
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
      "Dvoutýdenní intenzivní kurz je ideální volba pro ty, kteří mají základní zkušenosti s kadeřnictvím nebo stříháním a chtějí se specializovat na barber techniky. Za 90 hodin získáte všechny klíčové dovednosti potřebné pro práci v moderním barbershopu. Program je navržen jako kondenzovaná verze měsíčního kurzu – zaměřuje se na to nejdůležitější a eliminuje zbytečné opakování. Každý den je naplánován tak, aby maximalizoval váš pokrok, s důrazem na praktický trénink od prvního dne. Druhý týden už pracujete na reálných zákaznících a budujete si sebedůvěru pro samostatnou praxi.",
    highlights: [
      "Moderní střihové techniky nůžkami i strojkem",
      "Fade a přechodové techniky – low, mid, high a skin fade",
      "Styling, finishing a práce s produkty",
      "Úprava vousů a základy holení břitvou",
      "Praktický trénink na reálných zákaznících v druhém týdnu",
      "Konzultace se zákazníkem a komunikační dovednosti",
      "Certifikát AK Barbers Academy uznávaný v oboru",
    ],
    forWho: [
      "Kadeřníci a kadeřnice s praxí v oboru, kteří chtějí rozšířit své služby o moderní barber techniky – fade, taper, vousy – a přilákat novou mužskou klientelu do svého salonu",
      "Samouci, kteří se naučili základy z YouTube a praxe na kamarádech a nyní chtějí formální vzdělání, profesionální zpětnou vazbu a certifikát potvrzující jejich dovednosti",
      "Lidé s omezeným časem, kteří si nemohou dovolit měsíční denní docházku, ale chtějí intenzivní a strukturovaný program, který je za dva týdny připraví na profesionální úroveň",
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
          "Rekapitulace základů stříhání – nůžky, strojek, hřeben",
          "Fade techniky – low, mid, high a skin fade krok za krokem",
          "Blending a přechody na různých typech vlasů – rovné, vlnité, kudrnaté",
          "Scissor over comb a pokročilé techniky nůžkami",
          "Moderní pánské účesy – crop, quiff, pompadour, textured top",
          "Analýza tvaru hlavy a doporučení optimálního střihu",
          "Drop fade a burst fade – speciální přechodové techniky",
        ],
      },
      {
        week: 2,
        title: "Vousy, styling a praxe",
        topics: [
          "Úprava a tvarování vousů – symetrie, linky, design",
          "Základy holení břitvou a hot towel shave",
          "Styling a finishing – pomáda, hlína, vosk, suchý šampon",
          "Intenzivní praxe na reálných zákaznících v barbershopu",
          "Konzultace a komunikace se zákazníkem – budování důvěry",
          "Základy fotografie střihů pro portfolio a sociální sítě",
          "Závěrečná zkouška, zpětná vazba a certifikace",
        ],
      },
    ],
    meta: {
      title: "2týdenní barber kurz 90h – Intenzivní program",
      description:
        "Intenzivní 2týdenní barber kurz – 90 hodin za 15 000 Kč. Fade techniky, vousy, styling. Certifikát + praxe na zákaznících v Praze, Plzni, Berouně i Slaném. Přihlaste se.",
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
      "Jednodenní masterclass je intenzivní workshop vedený špičkovými lektory AK Barbers Academy. Za jeden den získáte koncentrované know-how v oblasti, kterou si chcete zdokonalit – ať už jde o skin fade, práci s břitvou nebo moderní styling techniky. Workshop zahrnuje live demonstrace na modelech, hands-on trénink a okamžitou zpětnou vazbu od lektora. Je to ideální formát pro ty, kteří chtějí rychlé a cílené zlepšení bez nutnosti vícedenního kurzu, nebo pro ty, kteří si chtějí osahat výuku v AK Academy před přihlášením na delší program.",
    highlights: [
      "Zaměření na jednu konkrétní techniku do hloubky",
      "Live demonstrace od lektora přímo na modelu",
      "Okamžitá individuální zpětná vazba při vlastním tréninku",
      "Networking a sdílení zkušeností s ostatními barbery",
      "Materiály a poznámky k technikám na doma",
      "Občerstvení a oběd v ceně workshopu",
      "Certifikát AK Barbers Academy potvrzující absolvování",
    ],
    forWho: [
      "Aktivní barbeři s praxí, kteří chtějí zdokonalit konkrétní techniku – například skin fade, hot towel shave nebo moderní textury – a posunout kvalitu svých služeb na vyšší úroveň",
      "Majitelé salonů a barbershopů, kteří hledají inspiraci, nové trendy a chtějí vzdělávat svůj tým – masterclass je ideální jako firemní školení pro celý personál",
      "Nadšenci a amatéři, kteří si chtějí vyzkoušet barber řemeslo nanečisto před přihlášením na měsíční nebo dvoutýdenní kurz – za jeden den zjistíte, jestli je to pro vás",
    ],
    includes: [
      "10 hodin intenzivní výuky",
      "Live demonstrace na modelech",
      "Hands-on trénink pod vedením lektora",
      "Certifikát AK Barbers Academy",
      "Občerstvení po dobu workshopu",
    ],
    meta: {
      title: "1denní barber masterclass – Workshop pro barbery",
      description:
        "Jednodenní barber masterclass – 10 hodin praktické výuky za 4 999 Kč. Live demonstrace, hands-on trénink pod vedením profesionálů. Certifikát AK Barbers. Rezervujte si místo.",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
