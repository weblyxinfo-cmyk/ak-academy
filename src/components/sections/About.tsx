const features = [
  {
    title: "Profesionální výuka",
    text: "Kurzy vedené zkušenými lektory s praxí v prémiových barbershopech.",
  },
  {
    title: "Malé skupiny",
    text: "Individuální přístup díky omezenému počtu účastníků v každém kurzu.",
  },
  {
    title: "Certifikát",
    text: "Po dokončení kurzu získáte certifikát AK Barbers Academy.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          O akademii
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray">
          Vstupte do světa barberingu prostřednictvím profesionálního kurzu AK Barbers Academy
        </p>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray sm:text-lg">
            AK Barbers Academy nabízí profesionální barber kurzy pod vedením
            majitele Adriana Křižana a jeho týmu špičkových lektorů. Naše kurzy
            jsou určeny jak pro úplné začátečníky, tak pro barbery, kteří si
            chtějí rozšířit a zdokonalit své dovednosti.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
