import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center border-b border-border overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          AK BARBERS
          <br />
          Academy
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray sm:text-xl">
          Profesionální barber kurzy pod vedením špičkových lektorů.
          Staňte se barberem s certifikátem AK Barbers.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#courses"
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            Prohlédnout kurzy
            <IconCircle />
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray transition-colors hover:text-white"
          >
            Přihlásit se na kurz
          </a>
        </div>
      </div>
    </section>
  );
}
