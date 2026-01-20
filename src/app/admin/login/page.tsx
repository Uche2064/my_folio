"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User2 } from "lucide-react";
import AppInput from "@/components/shared/AppInput";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { validateEmail, validatePasswordForLogin } from "@/lib/validator";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // If already authenticated, redirect immediately to /admin
  useEffect(() => {
    if (status === "authenticated") {
      // use replace to avoid keeping the login page in history
      router.replace("/admin");
    }
  }, [status, router]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const emailError = validateEmail(email);
      const passwordError = validatePasswordForLogin(password);
      if (emailError || passwordError) {
        setError({
          email: emailError,
          password: passwordError,
        });
        // setLoading(false);
        return;
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (!res) {
        setError({
          email: "Unexpected error. Please try again.",
          password: "Unexpected error. Please try again.",
        });
        setLoading(false);
        return;
      }
      if (res.error) {
        toast.error("Invalid credentials");
        setLoading(false);
        return;
      }
      toast.success("Login successful");
      router.push("/admin");
    } catch (err) {
      setError({
        email: "Sign in failed. Please check your credentials and try again.",
        password:
          "Sign in failed. Please check your credentials and try again.",
      });
      toast.error("Sign in failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
          Admin Sign In
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Sign in with your admin credentials to manage projects and content.
        </p>

        <div className="space-y-4">
          <AppInput
            id="email"
            label="Email"
            type="email"
            placeholder="vous@entreprise.com"
            value={email}
            leadingIcon={Mail}
            error={error.email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          {/* Mot de passe */}
          <AppInput
            id="password"
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            value={password}
            error={error.password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            showPasswordToggle={true}
            leadingIcon={Lock}
            disabled={loading}
          />

          {/* Bouton de connexion */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            size="icon-lg"
            className="w-full"
          >
            {loading ? <Spinner /> : "Se connecter"}
          </Button>
        </div>
      </div>
    </div>
  );
}
