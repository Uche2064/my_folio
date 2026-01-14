import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 rounded-2xl border border-white/15 bg-neutral-900 px-6 py-8 shadow-sm lg:grid-cols-2 sm:px-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-300">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
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
                  className="rounded-lg border border-white/10 bg-neutral-800/80 px-4 py-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-white/10 bg-neutral-800/90 px-5 py-6 shadow-sm">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-300">
                Contact
              </p>
              <h3 className="text-xl font-semibold text-white">
                Parlez-moi de votre projet
              </h3>
              <p className="text-sm text-neutral-300">
                Laissez votre email et un résumé, je reviens vers vous sous 24h.
              </p>
            </div>
            <form className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white">
                  Nom
                </label>
                <Input placeholder="Votre nom" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white">
                  Email
                </label>
                <Input type="email" placeholder="vous@email.com" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white">
                  Message
                </label>
                <Textarea placeholder="Parlez brièvement de votre besoin..." />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" className="w-full sm:w-auto">
                  Envoyer
                </Button>
                <span className="text-xs text-neutral-300">
                  Ou écrivez-moi directement :{" "}
                  <a
                    className="underline decoration-white/40 underline-offset-4"
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
