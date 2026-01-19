import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Middleware to protect /admin routes.
 *
 * Behavior:
 * - If the request is for an /admin route (matched via config.matcher), the middleware
 *   checks for a valid NextAuth JWT using `getToken`.
 * - If the token exists -> allow the request (NextResponse.next()).
 * - If no token -> redirect to `/admin/login` and include a `callbackUrl` query param so
 *   the user can be returned to their original location after signing in.
 *
 * Notes:
 * - This middleware assumes you are using NextAuth with JWT sessions (the NextAuth setup
 *   created in this project uses `session.strategy = 'jwt'`).
 * - Ensure `NEXTAUTH_SECRET` is set in your environment (Netlify/Neon) so `getToken` can
 *   validate the token.
 * - The middleware intentionally allows the `/admin/login` path so users can reach the sign-in page.
 */

export async function middleware(req: NextRequest) {
  const { pathname, origin, search } = req.nextUrl;

  // Only run on admin routes (config.matcher restricts this, but be defensive)
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow access to the login page itself
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Optionally allow public assets or other whitelisted paths under /admin
  // (add other exceptions here if you have special routes that must remain public)
  // e.g. if you had /admin/public or similar, check here.

  // Check for a valid NextAuth JWT token (reads token from cookies)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    // cookieName: process.env.NEXTAUTH_COOKIE_NAME, // optional if you customize cookie name
  });

  if (token) {
    // Authenticated: allow the request
    return NextResponse.next();
  }

  // Not authenticated: redirect to admin login.
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
