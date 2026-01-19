import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import { Hamburger, Menu } from "lucide-react";
import { NavMenu } from "./NavMenu";



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
          <div className="hidden md:block">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-medium dark:text-cyan-400">
              Portfolio
            </p>
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              LEKWAUWA Uchechukwu Godwill
            </p>
          </div>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
}
