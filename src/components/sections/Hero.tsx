import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] sm:min-h-[80vh] items-center justify-center border-b border-border overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 px-6 py-16 text-center sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          AK BARBERS
          <br />
          Academy
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray sm:mt-6 sm:text-xl">
          Profesionální barber kurzy pod vedením špičkových lektorů.
          Staňte se barberem s certifikátem AK Barbers.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href="#courses"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray sm:bg-transparent sm:p-0 sm:text-white sm:hover:bg-transparent"
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
