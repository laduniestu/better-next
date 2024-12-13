import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center justify-center space-y-4"
      }
    >
      {!session ? (
        <div>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Register</Link>
          </Button>
        </div>
      ) : (
        <div>
          {JSON.stringify(session)}
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
