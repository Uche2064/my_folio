import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-foreground dark:bg-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-8 shadow-sm dark:border-white/15 dark:bg-neutral-900 lg:grid-cols-2 sm:px-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-300">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-foreground dark:text-white sm:text-4xl">
              Ce que je propose
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Applications fluides",
                  description:
                    "Interfaces intuitives et user‑friendly pour une expérience sans friction.",
                },
                {
                  title: "Backend robuste",
                  description:
                    "Architecture sécurisée et fiable pour protéger les données des utilisateurs.",
                },
                {
                  title: "Intégration limpide",
                  description:
                    "Intégrations simples et propres pour relier vos services sans complexité.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-neutral-200 bg-white px-4 py-5 dark:border-white/10 dark:bg-neutral-800/80"
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-neutral-200 bg-white px-5 py-6 shadow-sm dark:border-white/10 dark:bg-neutral-800/90">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-300">
                Contact
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-white">
                Parlez-moi de votre projet
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Laissez votre email et un résumé, je reviens vers vous sous 24h.
              </p>
            </div>
            <form className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground dark:text-white">
                  Nom
                </label>
                <Input placeholder="Votre nom" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground dark:text-white">
                  Email
                </label>
                <Input type="email" placeholder="vous@email.com" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground dark:text-white">
                  Message
                </label>
                <Textarea placeholder="Parlez brièvement de votre besoin..." />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" className="w-full sm:w-auto">
                  Envoyer
                </Button>
                <span className="text-xs text-neutral-600 dark:text-neutral-300">
                  Ou écrivez-moi directement :{" "}
                  <a
                    className="underline decoration-neutral-400 underline-offset-4 dark:decoration-white/40"
                    href="mailto:godswilllek02@gmail.com"
                  >
                    godswilllek02@gmail.com
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
