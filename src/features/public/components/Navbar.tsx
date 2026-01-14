import { Button } from "../../../components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#travaux", label: "Travaux" },
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Compétences" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-200 bg-white/90 text-neutral-900 backdrop-blur-xl dark:border-cyan-500/20 dark:bg-black/95 dark:text-white sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-cyan-500/50 bg-white shadow-lg shadow-cyan-500/20 dark:bg-neutral-950">
            <Image
              src="/logo.png"
              alt="Logo de LEKWAUWA Uchechukwu Godwill"
              fill
              sizes="44px"
              className="object-contain p-1 rounded-full"
              priority
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-medium dark:text-cyan-400">
              Portfolio
            </p>
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              LEKWAUWA Uchechukwu Godwill
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 text-sm text-neutral-600 md:flex dark:text-neutral-300">
          {navLinks.map((link: { href: string; label: string }) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-600 hover:scale-105 dark:hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <Button 
            asChild 
            size="sm" 
            className="ml-2 bg-cyan-600 text-white font-semibold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 hover:scale-105 dark:bg-cyan-500 dark:text-black"
          >
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </nav>
    
  );
}