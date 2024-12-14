"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";

function MobileNav({ menus }: { menus: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>
            <div className="flex items-center">
              <Logo />
            </div>
          </SheetTitle>
          <nav className="mt-4 flex flex-col gap-4">
            {menus.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild onClick={() => setIsOpen(false)}>
              <Link href="/sign-in">Login</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
