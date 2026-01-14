import Image from "next/image";
import { Button } from "../../../components/ui/button";

export default function Works() {
  const featuredProjects = [
    {
      title: "Direction artistique & présentation",
      image: "/soutenance.jpeg",
      description:
        "Storytelling visuel et mise en page épurée pour captiver l'audience.",
    },
    {
      title: "Editorial lookbook",
      image: "/blue_dress.jpeg",    
      description:
        "Série photo minimaliste sur fond neutre avec une palette froide.",
    },
    {
      title: "Portraits en lumière douce",
      image: "/yellow_dress.jpeg",
      description:
        "Portraits contrastés mais élégants, travaillés pour rester intemporels.",
    },
  ];
  return (
    <section
      id="travaux"
      className="space-y-6 py-20 bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              Mes travaux
            </p>
          </div>
          <Button 
            variant="outline" 
            asChild 
            className="hidden sm:inline-flex border-cyan-500/50 text-cyan-500 hover:bg-cyan-100 hover:border-cyan-400 transition-all duration-200"
          >
            <a href="#contact">Discuter d&apos;un projet</a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-cyan-500/20 bg-neutral-900/50 backdrop-blur-sm shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="relative h-60 overflow-hidden bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm text-neutral-500">
                  <span className="group-hover:text-cyan-400 transition-colors duration-200">Prêt pour étude de cas</span>
                  <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}