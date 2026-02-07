import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

export default function Works() {
  const featuredProjects = [
    {
      title: "Assistant Médical Personnalisé - SUNU SANTE",
      image: "/amp-images/medecin-controlleur-dash.png",
      description:
        "L'assistant médical personnalisé (AMP) est une solution qui permet de mettre en relation les assurés avec des prestataires de soins partenanire de Sunu Santé.",
    },
    {
      title: "Mon Portfolio",
      image: "/portfolio-images/portfolio-1.png",
      description:
        "Alors mon portfolio est l'un de mes projets préféré parce que ça me permet de me vendre d'une façon unique. J'ai aussi une partie admin pour mon portofolio qui me permettra plus tard de gérer les différents projets(ajout, suppression, etc...), les contacts et peut-être un blog personnalisé.",
    },
    // {
    //   title: "Portraits en lumière douce",
    //   image: "/logo.png",
    //   description:
    //     "Portraits contrastés mais élégants, travaillés pour rester intemporels.",
    // },
  ];
  function getProjectsDisplayStyle() {
    if (featuredProjects.length === 1) {
      return "md:basis-1/1 lg:basis-1/1";
    } else if (featuredProjects.length === 2) {
      return "md:basis-1/2 lg:basis-1/2";
    } else {
      return "md:basis-1/3 lg:basis-1/4";
    }
  }
  return (
    <section
      id="travaux"
      className="space-y-6 py-20 bg-linear-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold dark:text-cyan-400">
              Mes travaux
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="hidden sm:inline-flex border-cyan-500/50 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-200 dark:text-cyan-500"
          >
            <a href="#contact">Discuter d&apos;un projet</a>
          </Button>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {featuredProjects.map((project) => (
              <CarouselItem
                key={project.title}
                className={getProjectsDisplayStyle()}
              >
                  <article className="border border-cyan-500/20 bg-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 dark:bg-neutral-900/50 dark:shadow-black/50 rounded-xl overflow-hidden">
                    <div className="relative h-60 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        className="object-cover transition-all duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 dark:from-neutral-900" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed dark:text-neutral-400">
                        {project.description}
                      </p>
                      {/* <div className="mt-auto flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-500">
                        <span className="transition-colors duration-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                          Prêt pour étude de cas
                        </span>
                        <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse" />
                      </div> */}
                      <div className="pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-cyan-500/60 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-500 dark:text-cyan-400"
                        >
                          Voir détails
                        </Button>
                      </div>
                    </div>
                  </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-2">
            <CarouselPrevious className="border-cyan-500/40 text-cyan-700 hover:bg-cyan-50 dark:text-cyan-400" />
            <CarouselNext className="border-cyan-500/40 text-cyan-700 hover:bg-cyan-50 dark:text-cyan-400" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 px-2">
            <Button>
              <div className="flex items-center justify-center gap-2">
                <p>Voir plus</p>
                <ChevronRight />
              </div>
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
