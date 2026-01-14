const techSkills = {
  "Langages & Frameworks": [
    "Java",
    "Spring Boot",
    "Python",
    "Flutter",
    "React",
    "Next.js",
  ],
  "Bases de données": ["MySQL", "PostgreSQL", "Firebase", "MongoDB", "GraphQL"],
  Autres: ["Conception orientée objet", "API REST", "UI/UX", "Design system"],
};

const softSkills = [
  "Gestion du temps",
  "Adaptation à tout type de projet",
  "Communication",
  "Curiosité",
];

const languages = ["Français", "Anglais"];
const interests = ["Sport", "Lecture", "Musique"];

export default function Skills() {
  return (
    <section
      id="competences"
      className="py-20 bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6 rounded-2xl border border-cyan-500/20 bg-neutral-900/50 backdrop-blur-sm px-6 py-8 shadow-2xl shadow-black/50 lg:grid-cols-2 sm:px-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              Compétences techniques
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stack principale
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(techSkills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-xl border border-cyan-500/30 bg-neutral-800/50 px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10"
                >
                  <h3 className="text-base font-bold text-cyan-400">
                    {category}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-cyan-500/30 bg-neutral-800/50 px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10">
              <h3 className="text-base font-bold text-cyan-400">
                Profil
              </h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Titulaire d&apos;une Licence en Génie Logiciel et Systèmes
                d&apos;Information, je m&apos;intéresse au développement de solutions
                numériques et aux systèmes d&apos;information. Ambitieux et motivé,
                je veux consolider mes acquis et construire un projet
                professionnel solide dans la tech.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-neutral-800/50 px-4 py-4 shadow-lg space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10">
              <h3 className="text-base font-bold text-cyan-400">
                Compétences transversales
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-neutral-800/50 px-4 py-4 shadow-lg space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10">
              <h3 className="text-base font-bold text-cyan-400">
                Langues
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-neutral-800/50 px-4 py-4 shadow-lg space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10">
              <h3 className="text-base font-bold text-cyan-400">
                Centres d&apos;intérêts
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}