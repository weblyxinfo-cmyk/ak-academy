const cities = ["Praha", "Slaný", "Beroun", "Plzeň"];

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
            Kde probíhají kurzy
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="group flex items-center gap-2 rounded-full border border-border bg-bg-card px-5 py-2.5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(46,184,166,0.15)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" fill="#141414" stroke="none" />
                </svg>
                <span className="font-semibold text-white">{city}</span>
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
