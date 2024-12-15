import React, { Suspense } from "react";
import { UserPasswordForm } from "@/app/app/settings/password-and-security/_components/user-password-form";
import { UserDeleteForm } from "@/app/app/settings/password-and-security/_components/user-delete-form";
import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import { Session } from "@/lib/auth/types";
import { Spinner } from "@/components/ui/spinner";

export default async function PasswordAndSecurityPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-8">
      <div className="grid gap-8">
        <div className="rounded-xl bg-accent p-6">
          <h2 className="mb-4 text-2xl font-bold">Change password</h2>
          <Suspense fallback={<Spinner />}>
            <UserPasswordForm />
          </Suspense>
        </div>
        <div className="rounded-xl bg-accent p-6">
          <h2 className="mb-4 text-2xl font-bold">Delete Account</h2>
          <Suspense fallback={<Spinner />}>
            <UserDeleteForm session={session as Session} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
