"use client";

import * as React from "react";
import DesktopMenu from "./menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks: { label: string; href: string }[] = [
  { href: "#hero", label: "Accueil" },
  { href: "#travaux", label: "Travaux" },
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Compétences" },
];

export function NavMenu() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering mobile/desktop specific UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Ferme le menu quand on clique sur un lien
  const handleLinkClick = () => {
    setOpen(false);
  };

  if (!mounted) {
    return null; // Or a placeholder to maintain layout shift
  }

  return (
    <>
      {/* Mobile menu */}
      {isMobile && (
        <MobileMenu
          open={open}
          setOpen={setOpen}
          navLinks={navLinks}
          handleLinkClick={handleLinkClick}
        />
      )}

      {/* Desktop menu */}
      {!isMobile && <DesktopMenu navLinks={navLinks} />}
    </>
  );
}
