import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/server";
import { UNAUTHENTICATED_URL } from "@/constant";

export async function authValidator() {
  const res = await auth.api.getSession({
    headers: await headers(),
  });
  if (!res?.session) {
    redirect(UNAUTHENTICATED_URL);
  }
}
