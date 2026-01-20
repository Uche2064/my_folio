import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const { pathname, origin, search } = req.nextUrl;

  // Only apply logic for admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Whitelist: allow the admin login page at /admin/login
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Whitelist NextAuth routes and common public/static assets so auth can work
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  // Check for a valid NextAuth JWT token (reads token from cookies)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token) {
    // Authenticated: allow the request
    return NextResponse.next();
  }

  // Not authenticated: redirect to the admin login page
  const loginUrl = new URL("/admin/login", origin);
  // preserve where the user wanted to go so we can return them after sign-in
  loginUrl.searchParams.set("callbackUrl", pathname + search);

  return NextResponse.redirect(loginUrl);
}

/**
 * Apply this middleware only to admin routes.
 * This keeps middleware narrow in scope and avoids affecting the whole app.
 */
export const config = {
  matcher: ["/admin/:path*"],
};
