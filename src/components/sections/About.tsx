const locations = [
  { city: "Praha", branches: [
    { name: "Praha 1", address: "Národní 949/19", zip: "110 00 Staré Město" },
    { name: "Praha 6", address: "Bělohorská 1393/44", zip: "169 00 Praha 6" },
  ]},
  { city: "Slaný", branches: [
    { name: "Slaný", address: "Třebízského 182", zip: "274 01 Slaný" },
  ]},
  { city: "Beroun", branches: [
    { name: "Beroun centrum", address: "Havlíčkova 128", zip: "266 01 Beroun" },
    { name: "Beroun-Město", address: "Plzeňská 145/49", zip: "266 01 Beroun" },
  ]},
];

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
          Chcete se stát barberem nebo se posunout na vyšší úroveň?
        </p>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray sm:text-lg">
            AK Barbers Academy nabízí profesionální barber kurzy pod vedením
            zkušených barberů z AK Barbers. Využijte jedinečnou příležitost
            vstoupit do světa barberingu nebo si zdokonalit své dovednosti.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="text-center text-2xl font-bold text-white">
            Kde nás najdete
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="group rounded-xl border border-accent/30 bg-accent/10 p-6 shadow-[0_0_15px_rgba(46,184,166,0.1)] transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:shadow-[0_0_25px_rgba(46,184,166,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 transition-colors duration-300 group-hover:bg-accent/30">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="h-5 w-5 text-accent">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" fill="#000" stroke="none" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">{loc.city}</span>
                </div>
                <div className="mt-4 space-y-3 pl-[52px]">
                  {loc.branches.map((b) => (
                    <div key={b.address}>
                      <p className="text-sm font-medium text-white">{b.name}</p>
                      <p className="text-xs text-gray">{b.address}</p>
                      <p className="text-xs text-gray">{b.zip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
