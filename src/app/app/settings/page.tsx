import React from "react";
import { Card } from "@/components/ui/card";
import { LockIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

function SettingsPage() {
  const menu = [
    {
      name: "Personal Details",
      href: "/app/settings/personal-details",
      description:
        "Change your personal details setting such as name, avatar, phone and email",
      icon: User2Icon,
    },
    {
      name: "Password and Security",
      href: "/app/settings/password-and-security",
      description:
        "Change your password and security setting and account deletion",
      icon: LockIcon,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-8">
      <div className="grid gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Setting Menu</h2>
          <div className="grid gap-4">
            {menu.map((item) => (
              <Link key={item.name} href={item.href}>
                <Card className="bg-accent p-4">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                        <item.icon />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-6 w-6 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
