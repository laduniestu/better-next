import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-toggle";
import Logo from "@/components/logo";
import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import MobileNav from "@/app/(public)/_components/mobile-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CogIcon, HomeIcon, LockIcon, LogOut, UserIcon } from "lucide-react";
import LogoutButton from "@/components/logout-button";
import * as React from "react";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const menus = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Features",
      href: "#features",
    },
    // currenly disabled for faster development
    // {
    //   name: "Analytics",
    //   href: "https://stats.dun.gg/share/wBd7o6ts7CUEVyVu/betternext.dun.gg",
    // },
  ];
  return (
    <header className="relative mx-auto w-full max-w-6xl p-2 md:p-5">
      <Card className="flex justify-between gap-3 px-2 py-2">
        <MobileNav menus={menus} />
        <div className="flex items-center md:w-32">
          <Logo />
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {menus.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <ul className="flex items-center justify-end gap-3 md:w-32">
          <li>
            <ModeToggle />
          </li>
          <li className="hidden md:flex">
            {!session ? (
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-10 w-10 cursor-pointer rounded-full">
                    <AvatarImage
                      src={session.user.image!}
                      alt={session.user.name}
                    />
                    <AvatarFallback className="rounded-full">
                      {session.user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={session.user.image!}
                          alt={session.user.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          {session.user.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {session.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {session.user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/app">
                      <DropdownMenuItem>
                        <HomeIcon />
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/app/settings">
                      <DropdownMenuItem>
                        <CogIcon />
                        Settings
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/app/settings/personal-details">
                      <DropdownMenuItem>
                        <UserIcon />
                        Profile
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/app/settings/password-and-security">
                      <DropdownMenuItem>
                        <LockIcon />
                        Change Password
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <LogoutButton>
                    <DropdownMenuItem>
                      <LogOut />
                      Log out
                    </DropdownMenuItem>
                  </LogoutButton>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </li>
        </ul>
      </Card>
    </header>
  );
}
