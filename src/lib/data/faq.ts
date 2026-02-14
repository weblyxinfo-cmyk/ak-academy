import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    question: "Pro koho jsou kurzy určeny?",
    answer:
      "Naše kurzy jsou určeny pro úplné začátečníky i zkušené barbery. Základní kurz nevyžaduje žádné předchozí zkušenosti, pokročilý kurz je vhodný pro barbery s minimálně 6měsíční praxí.",
    category: "obecne",
  },
  {
    question: "Co potřebuji s sebou na kurz?",
    answer:
      "Veškeré vybavení a materiály jsou součástí kurzu. Stačí přijít v pohodlném oblečení a s chutí se učit.",
    category: "obecne",
  },
  {
    question: "Získám po kurzu certifikát?",
    answer:
      "Ano, po úspěšném dokončení každého kurzu obdržíte certifikát AK Barbers Academy, který potvrzuje vaše dovednosti.",
    category: "obecne",
  },
  {
    question: "Kde kurzy probíhají?",
    answer:
      "Kurzy probíhají v Praze, Slaném, Berouně a Plzni. Hlavní pobočka je na adrese Národní 949/19, Praha 1. Přesné adresy všech poboček najdete na stránce příslušného města.",
    category: "obecne",
  },
  {
    question: "Mohu platit na splátky?",
    answer:
      "Ano, nabízíme možnost platby na splátky. Pro více informací nás kontaktujte přes kontaktní formulář.",
    category: "platba",
  },
  {
    question: "Pomohou mi po kurzu s hledáním práce?",
    answer:
      "Absolutně! Nejlepší absolventi mají možnost nastoupit přímo do jedné z poboček AK Barbers. Zároveň vám pomůžeme s přípravou na pohovory v dalších barbershopech.",
    category: "kariera",
  },
  {
    question: "Kolik studentů je v jednom kurzu?",
    answer:
      "V jednom kurzu je maximálně 6–8 studentů. Díky malým skupinám se vám lektor může věnovat individuálně a poskytnout okamžitou zpětnou vazbu.",
    category: "obecne",
  },
  {
    question: "Jaký je rozdíl mezi měsíčním a 2týdenním kurzem?",
    answer:
      "Měsíční kurz (180 hodin) je kompletní vzdělání od základů po pokročilé techniky – ideální pro úplné začátečníky. 2týdenní kurz (90 hodin) je intenzivní program zaměřený na klíčové techniky – vhodný pro ty, kteří už mají základní zkušenosti s kadeřnictvím.",
    category: "kurzy",
  },
];

export const courseFaqItems: Record<string, FAQItem[]> = {
  mesicni: [
    {
      question: "Je měsíční kurz vhodný pro úplné začátečníky?",
      answer:
        "Ano, měsíční kurz je navržen primárně pro začátečníky. Začínáme od naprostých základů a postupně se propracováváme k pokročilým technikám. Nepotřebujete žádné předchozí zkušenosti.",
    },
    {
      question: "Jak probíhá výuka během měsíce?",
      answer:
        "Kurz probíhá každý pracovní den (pondělí–pátek), celkem 180 hodin. Výuka kombinuje teoretické přednášky, live demonstrace od lektorů a hlavně praktický trénink – nejdříve na cvičných hlavách, poté na reálných zákaznících.",
    },
    {
      question: "Můžu po měsíčním kurzu hned pracovat jako barber?",
      answer:
        "Ano, po absolvování měsíčního kurzu budete připraveni na profesionální práci v barbershopu. Nejlepší absolventi mají navíc možnost nastoupit přímo do jedné z poboček AK Barbers.",
    },
  ],
  dvoutydeni: [
    {
      question: "Potřebuji předchozí zkušenosti pro 2týdenní kurz?",
      answer:
        "Doporučujeme alespoň základní zkušenosti s kadeřnictvím nebo stříháním. Kurz není pro úplné začátečníky – předpokládáme znalost práce s nůžkami a základní orientaci v oboru.",
    },
    {
      question: "Jaký je rozdíl oproti měsíčnímu kurzu?",
      answer:
        "2týdenní kurz je kondenzovaná verze zaměřená na klíčové barber techniky – fade, přechody, vousy a styling. Měsíční kurz navíc pokrývá základy od nuly, práci s břitvou a intenzivnější praxi na zákaznících.",
    },
  ],
  jednodenni: [
    {
      question: "Na co konkrétně se 1denní workshop zaměřuje?",
      answer:
        "Téma workshopu se mění – může to být pokročilý fade, práce s břitvou, kreativní střihy nebo jiné specializované techniky. Aktuální téma najdete v popisu nejbližšího termínu.",
    },
    {
      question: "Je 1denní kurz vhodný i pro začátečníky?",
      answer:
        "Workshop je primárně pro aktivní barbery, kteří si chtějí zdokonalit konkrétní techniku. Pokud jste úplný začátečník, doporučujeme měsíční nebo 2týdenní kurz.",
    },
  ],
};
