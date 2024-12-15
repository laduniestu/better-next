import { betterFetch } from "@better-fetch/fetch";
import { type NextRequest, NextResponse } from "next/server";
import type { Session } from "@/lib/auth/types";
import env from "@/env";
import { AUTHENTICATED_URL } from "@/constant";

const authRoutes = ["/login", "/sign-up"];
const protectedRoutesPrefix = "/app";

export default async function authMiddleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isProtectedRoute = pathName.startsWith(protectedRoutesPrefix);

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: env.NEXT_PUBLIC_APP_URL,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    },
  );
  if (isAuthRoute) {
    if (session) {
      return NextResponse.redirect(new URL(AUTHENTICATED_URL, request.url));
    }
    return NextResponse.next();
  }
  if (!session && isProtectedRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
