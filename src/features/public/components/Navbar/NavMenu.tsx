"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { useIsMobile } from "../../hooks/useIsMobile";
import DesktopMenu from "./menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";
import { useState } from "react";

const navLinks: { label: string; href: string }[] = [
  { href: "#hero", label: "Accueil" },
  { href: "#travaux", label: "Travaux" },
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Compétences" },
];

export function NavMenu() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  // Ferme le menu quand on clique sur un lien
  const handleLinkClick = () => {
    setOpen(false);
  };

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
