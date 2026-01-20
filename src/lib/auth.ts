import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession as nextGetServerSession } from "next-auth";
import bcrypt from "bcryptjs";

import  prisma from "@/lib/prisma";

/**
 * Shared NextAuth options used by both the API route and server components.
 *
 * - Use the Prisma adapter and the application's prisma client.
 * - Provide a Credentials provider that verifies a hashed password stored in the DB.
 * - Use JWT session strategy (serverless friendly).
 * - Attach `id` and `role` to the session for authorization checks.
 *
 * Make sure the following env vars are set:
 * - NEXTAUTH_SECRET
 *
 * Sign-in page is set to `/admin/login` so the middleware and auth pages are consistent.
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;
        if (!user.password) return null; // user may be created via OAuth without password

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // Return a minimal user object to NextAuth
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
        } as any;
      },
    }),
    // Add OAuth providers here when needed (Google, GitHub, ...)
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // When a user signs in, attach role & id from DB to the token
      if (user?.email) {
        try {
          const dbUser = await prisma.user.findUnique({
            where: { email: user.email as string },
            select: { role: true, id: true },
          });
          if (dbUser) {
            (token as any).role = dbUser.role;
            (token as any).sub = dbUser.id;
          }
        } catch {
          // ignore DB errors for token enrichment
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        (session.user as any).id = (token as any).sub;
        (session.user as any).role = (token as any).role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Helper to call getServerSession in server components with the shared options.
 * Usage in an app-route server component:
 *   import { getServerAuthSession } from "@/lib/auth";
 *   const session = await getServerAuthSession();
 */
export async function getServerAuthSession() {
  return nextGetServerSession(authOptions);
}

export default authOptions;
