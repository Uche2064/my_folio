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
    <nav className="fixed top-0 right-0 left-0 border-b border-cyan-500/20 bg-black/95 text-white backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-cyan-500/50 bg-neutral-950 shadow-lg shadow-cyan-500/20">
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
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium">
              Portfolio
            </p>
            <p className="text-base font-bold text-white">
              LEKWAUWA Uchechukwu Godwill
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 text-sm text-neutral-300 md:flex">
          {navLinks.map((link: { href: string; label: string }) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
          <Button 
            asChild 
            size="sm" 
            className="ml-2 bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 hover:scale-105"
          >
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </nav>
    
  );
}