import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 bg-linear-to-b from-black via-neutral-950 to-neutral-900 px-6 py-10 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 shadow-lg shadow-cyan-500/20 animate-pulse">
                Développeur Full Stack
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium">
                LEKWAUWA Uchechukwu Godwill
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Je crée des solutions numériques{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-600">
                  sobres, modernes et efficaces.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-neutral-300 sm:text-xl text-justify leading-relaxed">
                Ambitieux et motivé, je conçois des produits numériques, des
                expériences soignées et des interfaces prêtes pour la production
                avec une approche orientée design system et accessibilité.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cyan-500 text-black font-bold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 hover:scale-105"
              >
                <a href="#contact">Me contacter</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-cyan-500/50 text-cyan-500 hover:bg-cyan-100 hover:border-cyan-400 transition-all duration-200"
              >
                <a href="/Godswill_Lekwauwa_CV%20(1).pdf" download>
                  Télécharger mon CV
                </a>
              </Button>
              <Button 
                variant="ghost" 
                asChild
                className="text-neutral-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200"
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
                  className="rounded-lg border border-cyan-500/30 bg-neutral-800/50 px-4 py-3 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10"
                >
                  <p className="text-sm text-neutral-400">{item.label}</p>
                  <p className="text-lg font-bold text-cyan-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
              <span className="rounded-full border border-cyan-500/30 bg-neutral-800/30 px-3 py-1 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200">
                00228-71-61-06-53
              </span>
              <a
                className="rounded-full border border-cyan-500/30 bg-neutral-800/30 px-3 py-1 underline-offset-4 hover:border-cyan-500/50 hover:text-cyan-400 hover:underline transition-all duration-200"
                href="mailto:godswilllek02@gmail.com"
              >
                godswilllek02@gmail.com
              </a>
              <span className="rounded-full border border-cyan-500/30 bg-neutral-800/30 px-3 py-1 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200">
                Lomé, Togo
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-900 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-black/40 group-hover:from-cyan-500/20 transition-all duration-300" />
            <Image
              src="/yellow_dress.jpeg"
              alt="Portrait de présentation"
              width={900}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}