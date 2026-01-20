"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // If already authenticated, redirect immediately to /admin
  useEffect(() => {
    if (status === "authenticated") {
      // use replace to avoid keeping the login page in history
      router.replace("/admin");
    }
  }, [status, router]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setLoading(true);

      try {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        } as any);

        // res can be undefined in some cases; guard accordingly
        if (!res) {
          setError("Unexpected error. Please try again.");
          setLoading(false);
          return;
        }

        // NextAuth returns an object possibly containing error
        // type is any here because client-side typings vary by version
        if ((res as any).error) {
          setError((res as any).error || "Invalid credentials");
          setLoading(false);
          return;
        }

        // Successful sign-in: navigate to admin root
        router.push("/admin");
      } catch (err) {
        setError(
          "Sign in failed. Please check your credentials and try again.",
        );
      } finally {
        setLoading(false);
      }
    },
    [email, password, router],
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
          Admin Sign In
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Sign in with your admin credentials to manage projects and content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
          <p>
            Note: This panel is for your use only. If you haven't created your
            admin user yet, create it in the database (hashed password) or run
            the provided seed script.
          </p>
        </div>
      </div>
    </div>
  );
}
