"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

type Props = {
  user?: {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
  };
};

export default function SettingClient({ user }: Props) {
  if (!user) {
    return (
      <div className="rounded-md border border-dashed p-6 text-center bg-white dark:bg-neutral-900">
        <p className="text-sm text-neutral-600">
          Aucun utilisateur connecté.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4 bg-white dark:bg-neutral-900">
          <p className="text-sm text-neutral-500">Nom</p>
          <p className="text-lg font-medium">{user.name ?? "—"}</p>
        </div>

        <div className="rounded-lg border p-4 bg-white dark:bg-neutral-900">
          <p className="text-sm text-neutral-500">Email</p>
          <p className="text-lg font-medium">{user.email ?? "—"}</p>
        </div>

        <div className="rounded-lg border p-4 bg-white dark:bg-neutral-900">
          <p className="text-sm text-neutral-500">Rôle</p>
          <p className="text-lg font-medium">{user.role ?? "—"}</p>
        </div>
      </div>

      <Button
        className="mt-6"
        variant="destructive"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Déconnexion
        <LogOut className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
