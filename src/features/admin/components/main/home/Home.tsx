import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Inbox, Box, Home as HomeIcon, Settings as SettingsIcon } from"lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


type ProjectItem = {
  id: number | string;
  title: string;
  slug?: string;
  featured?: boolean;
  published?: boolean;
};

type HomeProps = {
  stats?: {
    projects?: number;
    messages?: number;
    drafts?: number;
  };
  recentProjects?: ProjectItem[];
};

type ProjectProps = {
  projects?: ProjectItem[];
};

type SettingProps = {
  siteTitle?: string;
  contactEmail?: string;
};

/* --------------------------- Components ------------------------- */

export default function Home({ stats, recentProjects }: HomeProps) {
  const s = {
    projects: stats?.projects ?? 0,
    messages: stats?.messages ?? 0,
    drafts: stats?.drafts ?? 0,
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="text-sm text-neutral-500">
            Vue d'ensemble rapide — accédez aux sections via la barre latérale.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/projects">
            <Button variant="outline" size="sm">Voir les projets</Button>
          </Link>
          <Link href="/admin/inbox">
            <Button size="sm">Inbox</Button>
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex items-center gap-3">
            <HomeIcon className="w-5 h-5" />
            <CardTitle>Projets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{s.projects}</p>
            <p className="text-sm text-neutral-500">Total de projets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-3">
            <Inbox className="w-5 h-5" />
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{s.messages}</p>
            <p className="text-sm text-neutral-500">Messages reçus</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-3">
            <Box className="w-5 h-5" />
            <CardTitle>Brouillons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{s.drafts}</p>
            <p className="text-sm text-neutral-500">Projets en brouillon</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Projets récents</h2>
          <Link href="/admin/projects" className="text-sm text-cyan-600">Voir tout</Link>
        </div>

        <div className="grid gap-4">
          {recentProjects && recentProjects.length > 0 ? (
            recentProjects.map((p) => (
              <article key={p.id} className="border rounded-lg p-4 bg-white dark:bg-neutral-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="text-sm text-neutral-500">{p.slug ?? "—"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/projects/${p.id}`}>
                      <Button variant="outline" size="sm">Edit</Button>
                    </Link>
                    <Link href={`/projects/${p.slug ?? p.id}`} target="_blank">
                      <Button size="sm">Preview</Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-md border border-dashed border-neutral-200 p-6 text-center">
              <p className="text-sm text-neutral-600">Aucun projet récent — ajoutez votre premier projet.</p>
              <div className="mt-4 flex items-center justify-center">
                <Link href="/admin/projects/new">
                  <Button>Créer un projet</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}