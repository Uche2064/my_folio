const education = [
  {
    title:
      "Licence en Génie Logiciel et Systèmes d'Information – IAI TOGO, Lomé",
    period: "2025",
    description:
      "Passionné par les solutions numériques et les systèmes d'information, avec l'ambition de consolider mes acquis et de poursuivre mes études.",
  },
  {
    title: "Bac S – Collège Père Augustin Planque",
    period: "2020",
    description: "Option Sciences et Mathématiques.",
  },
];

const experiences = [
  {
    title: "Stage en développement mobile – Klumer, Lomé",
    period: "Juin 2025 - Août 2025",
    details: [
      "Conception et développement d'une application mobile de location/vente immobilière.",
      "UI/UX pour optimiser la navigation et l'engagement.",
    ],
  },
  {
    title: "Stage en développement web – Sunu Santé, Lomé",
    period: "Jul. 2024 - Oct. 2024",
    details: [
      "Participation à une solution multiplateforme d'assistant médical personnalisé.",
      "Analyse des besoins utilisateurs pour aligner le produit sur les attentes.",
    ],
  },
  {
    title:
      "Projet académique – Application de gestion de salle de gym, IAI TOGO",
    period: "Dec. 2024 - Fev. 2025",
    details: [
      "Application web de gestion clients, abonnements, paiements et statistiques.",
      "Architecture full-stack Angular / Spring Boot, sécurisée par JWT.",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="parcours"
      className="py-20 bg-linear-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
     <div className="max-w-7xl mx-auto px-4">
       <div className="grid gap-6 rounded-2xl border border-cyan-500/20 bg-white backdrop-blur-sm px-6 py-8 shadow-md shadow-black/10 lg:grid-cols-2 sm:px-10 dark:bg-neutral-900/50 dark:shadow-black/50">
       <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold dark:text-cyan-400">
          Education
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
          Parcours académique
        </h2>
        <div className="space-y-4">
          {education.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-cyan-500/30 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:-translate-y-1 dark:bg-neutral-800/50"
            >
              <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-white dark:ring-neutral-900" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-200 dark:text-white dark:group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <span className="text-sm font-semibold text-cyan-600 whitespace-nowrap dark:text-cyan-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold dark:text-cyan-400">
          Expériences
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
          Projets & stages
        </h2>
        <div className="space-y-4">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-cyan-500/30 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:-translate-y-1 dark:bg-neutral-800/50"
            >
              <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-white dark:ring-neutral-900" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-200 dark:text-white dark:group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-cyan-600 whitespace-nowrap dark:text-cyan-400">
                  {item.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
        </div> 
     </div>
    </section>
  );
}