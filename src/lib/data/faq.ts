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
  {
    question: "Můžu si kurz vyzkoušet na jeden den?",
    answer:
      "Ano, nabízíme 1denní workshopy, které jsou skvělou příležitostí nahlédnout do světa barberingu. Pokud vás workshop nadchne, můžete se přihlásit na delší kurz a cenu workshopu vám odečteme z kurzovného.",
    category: "kurzy",
  },
  {
    question: "Jaké jsou platební podmínky?",
    answer:
      "Kurzovné je splatné před zahájením kurzu. Nabízíme platbu převodem na účet, kartou nebo v hotovosti na pobočce. U měsíčního a 2týdenního kurzu je možné domluvit splátky bez navýšení – stačí nás kontaktovat.",
    category: "platba",
  },
  {
    question: "Potřebuji předchozí zkušenosti?",
    answer:
      "Pro měsíční kurz nepotřebujete žádné předchozí zkušenosti – začínáme od naprostých základů. Pro 2týdenní kurz doporučujeme alespoň základní orientaci v kadeřnictví. 1denní workshopy jsou určeny aktivním barberům.",
    category: "obecne",
  },
  {
    question: "Jak vypadá certifikát?",
    answer:
      "Po úspěšném absolvování obdržíte profesionální tištěný certifikát AK Barbers Academy s vaším jménem, typem kurzu a datem dokončení. Certifikát je podepsán hlavním lektorem a zakladatelem akademie Adrianem Koláčkem.",
    category: "obecne",
  },
  {
    question: "Můžu si kurz opakovat?",
    answer:
      "Ano, absolventi mohou kurz opakovat zdarma v rámci jednoho roku od dokončení, pokud je v daném termínu volné místo. Stačí nás kontaktovat a domluvíme vhodný termín. Tato možnost platí pro měsíční i 2týdenní kurz.",
    category: "kurzy",
  },
  {
    question: "Jaké nástroje budu potřebovat po kurzu?",
    answer:
      "Na kurzu pracujete s profesionálním vybavením, které je zahrnuto v ceně. Po absolvování vám doporučíme konkrétní značky a modely nástrojů – strojky, nůžky, břitvy a stylingové produkty – které odpovídají vašemu rozpočtu a stylu práce.",
    category: "obecne",
  },
  {
    question: "Nabízíte stáže nebo praxi po kurzu?",
    answer:
      "Ano, nejlepším absolventům nabízíme stáž přímo v pobočkách AK Barbers, kde si mohou zdokonalit své dovednosti pod dohledem zkušených barberů. Zároveň spolupracujeme s partnerskými barbershopy po celé ČR, kam doporučujeme naše absolventy.",
    category: "kariera",
  },
  {
    question: "Je možné absolvovat kurz o víkendu?",
    answer:
      "Měsíční a 2týdenní kurzy probíhají ve všední dny (pondělí–pátek). Víkendové termíny nabízíme u 1denních workshopů – konkrétní termíny najdete v kalendáři na webu. Pokud máte zájem o víkendovou variantu delšího kurzu, dejte nám vědět – rádi vám nabídneme řešení.",
    category: "obecne",
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
    {
      question: "Kolik zákazníků ostříhám během měsíčního kurzu?",
      answer:
        "Během měsíčního kurzu ostříháte přibližně 50–80 reálných zákazníků. Praxe na živých modelech začíná již ve druhém týdnu, kdy máte zvládnuté základní techniky a jste připraveni pod dohledem lektora.",
    },
    {
      question: "Jaký je denní rozvrh měsíčního kurzu?",
      answer:
        "Výuka probíhá od 9:00 do 17:00 s hodinovou pauzou na oběd. Dopoledne se věnujeme teorii a demonstracím, odpoledne je zaměřené na praktický trénink. V pátek je často volnější program s konzultacemi a individuální zpětnou vazbou.",
    },
    {
      question: "Můžu se k měsíčnímu kurzu přihlásit, i když mám živnostenský list na kadeřnictví?",
      answer:
        "Samozřejmě, kurz je otevřený pro všechny bez ohledu na to, zda již podnikáte. Mnoho našich studentů jsou aktivní kadeřníci, kteří si chtějí rozšířit dovednosti o barber techniky. Kurz vám pomůže získat nové zákazníky a navýšit příjmy.",
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
    {
      question: "Stihnu se za dva týdny naučit dost na to, abych mohl pracovat?",
      answer:
        "Pokud máte základy z kadeřnictví, rozhodně ano. Kurz je navržen tak, abyste během 90 hodin zvládli klíčové barber techniky na profesionální úrovni. Po kurzu budete schopni nabízet služby jako fade, taper a úpravu vousů.",
    },
    {
      question: "Pracuji se na 2týdenním kurzu i na reálných zákaznících?",
      answer:
        "Ano, od druhého týdne pracujete na reálných zákaznících pod dohledem lektora. První týden se věnujete nácviku na cvičných hlavách a zvládnutí technik, aby byla vaše práce na zákaznících co nejkvalitnější.",
    },
    {
      question: "Mohu po 2týdenním kurzu přejít na měsíční?",
      answer:
        "Ano, pokud zjistíte, že chcete své vzdělání prohloubit, nabízíme zvýhodněný doplatek za přechod na měsíční kurz. Absolvované hodiny se vám plně započítají a navážete přesně tam, kde jste skončili.",
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
    {
      question: "Kolik účastníků je na jednodenním workshopu?",
      answer:
        "Na workshopu je maximálně 10–12 účastníků, aby měl lektor dostatek času na individuální přístup. Díky menší skupině si můžete techniky vyzkoušet přímo pod jeho vedením a okamžitě dostat zpětnou vazbu.",
    },
    {
      question: "Dostanu na workshopu materiály na doma?",
      answer:
        "Ano, po workshopu obdržíte digitální materiály včetně fotografií technik, video záznamu z demonstrací a podrobného popisu probíraných postupů. Tyto materiály vám pomohou si naučené techniky doma procvičovat a zafixovat.",
    },
    {
      question: "Jak často se konají jednodenní workshopy?",
      answer:
        "Workshopy pořádáme přibližně jednou až dvakrát měsíčně, většinou v sobotu. Každý workshop má jiné téma – aktuální termíny a témata najdete v sekci kurzů na našem webu nebo na Instagramu @akbarbers.",
    },
  ],
};
