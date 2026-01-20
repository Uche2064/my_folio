"use client";

import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

interface SessionProviderProps {
  children: React.ReactNode;
  // Optional session can be passed from server components via getServerSession
  session?: Session | null;
}

/**
 * Application-level SessionProvider wrapper for next-auth.
 *
 * Usage:
 * - Wrap your client subtree (or the root layout) with this provider so that
 *   `useSession`, `signIn`, `signOut`, etc. work in client components.
 *
 * - If you call `getServerSession` on the server and pass the session into your
 *   client tree, provide it via the `session` prop for immediate hydration.
 */
export default function SessionProvider({ children, session }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider
      session={session}
      // refetch session every 5 minutes to keep it fresh (adjust as needed)
      refetchInterval={5 * 60}
    
    >
      {children}
    </NextAuthSessionProvider>
  );
}
