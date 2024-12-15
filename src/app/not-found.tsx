import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3">
      <Logo />
      <h2 className="mt-10 text-4xl font-bold">
        Uh, oh. We couldn&apos;t find that page.
      </h2>
      <Link
        href="/app"
        className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 hover:bg-muted"
      >
        <ArrowLeft className="size-5" />
        Return Back
      </Link>
    </main>
  );
}
