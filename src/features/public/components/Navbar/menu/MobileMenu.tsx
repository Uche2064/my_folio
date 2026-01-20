import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: { href: string; label: string }[];
  handleLinkClick: () => void;
}

export default function MobileMenu({
  open,
  setOpen,
  navLinks,
  handleLinkClick,
}: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-20 w-20" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[200px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link href="#contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </Button>
        </nav>
        <SheetFooter className="flex flex-row items-center justify-between">
          <ModeToggle />

          <SheetClose asChild>
            <Button variant="ghost">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
