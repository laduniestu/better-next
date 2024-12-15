import React, { Suspense } from "react";
import { UserProfileForm } from "@/app/app/settings/personal-details/_components/user-profile-form";
import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import { UserEmailForm } from "@/app/app/settings/personal-details/_components/user-email-form";
import { Session } from "@/lib/auth/types";
import { Spinner } from "@/components/ui/spinner";

export default async function PersonalDetailsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-8">
      <div className="grid gap-8">
        <div className="rounded-xl bg-accent p-6">
          <h2 className="mb-4 text-2xl font-bold">Profile</h2>
          <Suspense fallback={<Spinner />}>
            <UserProfileForm session={session as Session} />
          </Suspense>
        </div>
        <div className="rounded-xl bg-accent p-6">
          <h2 className="mb-4 text-2xl font-bold">Email</h2>
          <Suspense fallback={<Spinner />}>
            <UserEmailForm session={session as Session} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
