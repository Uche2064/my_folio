import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

/**
 * NextAuth route handler for App Router.
 * Exports named GET and POST handlers below.
 *
 * Requirements:
 * - Set NEXTAUTH_SECRET in your environment.
 * - Ensure prisma client at "@/lib/prisma" is available and points to your database.
 */

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
        if (!user.password) return null; // no password set (e.g. OAuth user)

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) return null;

        // Return a minimal user object for NextAuth
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
        } as any;
      },
    }),
    // You can add OAuth providers here later (Google, GitHub, etc.)
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Attach role and id to the token
    async jwt({ token, user }) {
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
          // ignore DB errors here; token will still be returned
        }
      }
      return token;
    },

    // Expose id and role on the session object available to the client
    async session({ session, token }) {
      if (token) {
        (session.user as any).id = (token as any).sub;
        (session.user as any).role = (token as any).role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
