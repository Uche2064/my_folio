import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 bg-linear-to-b from-white via-neutral-50 to-white px-6 py-10 dark:from-black dark:via-neutral-950 dark:to-neutral-900 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 shadow-lg shadow-cyan-500/20 animate-pulse">
                Développeur Full Stack
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-medium dark:text-neutral-500">
                LEKWAUWA Uchechukwu Godwill
              </p>
              <h1 className="text-4xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
                Je crée des solutions numériques{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-600">
                  sobres, modernes et efficaces.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl text-justify leading-relaxed">
                Ambitieux et motivé, je conçois des produits numériques, des
                expériences soignées et des interfaces prêtes pour la production
                avec une approche orientée design system et accessibilité.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cyan-600 text-white font-bold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 hover:scale-105 dark:bg-cyan-500 dark:text-black"
              >
                <a href="#contact">Me contacter</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-cyan-500/50 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-200 dark:text-cyan-500"
              >
                <a href="/Godswill_Lekwauwa_CV%20(1).pdf" download>
                  Télécharger mon CV
                </a>
              </Button>
              <Button 
                variant="ghost" 
                asChild
                className="text-neutral-600 hover:text-cyan-600 hover:bg-cyan-500/5 transition-all duration-200 dark:text-neutral-300 dark:hover:text-cyan-400"
              >
                <a href="#travaux">Voir mes travaux</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:max-w-xl sm:grid-cols-3">
              {[
                { label: "Basé à", value: "Lomé, Togo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-cyan-500/30 bg-white px-4 py-3 shadow-md transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 dark:bg-neutral-800/50"
                >
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.label}</p>
                  <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
              <span className="rounded-full border border-cyan-500/30 bg-white px-3 py-1 text-neutral-700 hover:border-cyan-500/50 hover:text-cyan-600 transition-all duration-200 dark:bg-neutral-800/30 dark:text-neutral-400 dark:hover:text-cyan-400">
                00228-71-61-06-53
              </span>
              <a
                className="rounded-full border border-cyan-500/30 bg-white px-3 py-1 text-neutral-700 underline-offset-4 hover:border-cyan-500/50 hover:text-cyan-600 hover:underline transition-all duration-200 dark:bg-neutral-800/30 dark:text-neutral-400 dark:hover:text-cyan-400"
                href="mailto:godswilllek02@gmail.com"
              >
                godswilllek02@gmail.com
              </a>
              <span className="rounded-full border border-cyan-500/30 bg-white px-3 py-1 text-neutral-700 hover:border-cyan-500/50 hover:text-cyan-600 transition-all duration-200 dark:bg-neutral-800/30 dark:text-neutral-400 dark:hover:text-cyan-400">
                Lomé, Togo
              </span>
            </div>
          </div>

          <div className="group relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 bg-white shadow-md shadow-black/20 transition-all duration-300 group-hover:border-cyan-500/60 group-hover:shadow-cyan-500/20 dark:bg-neutral-900 dark:shadow-black/50" />
            <div className="relative h-[86%] w-[86%] overflow-hidden rounded-full border border-cyan-500/40 bg-white/80 shadow-inner shadow-cyan-500/20 animate-hero-bounce transition-transform duration-500 group-hover:scale-105 dark:bg-neutral-950">
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-white/40 dark:to-black/40" />
              <Image
                src="/yellow_dress.jpeg"
                alt="Portrait de présentation"
                fill
                sizes="(max-width:768px) 90vw, (max-width:1200px) 420px, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}