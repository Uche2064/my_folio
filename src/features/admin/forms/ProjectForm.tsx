"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, X } from "lucide-react";

type Project = {
  id?: string;
  title: string;
  shortDesc: string;
  liveUrl?: string;
  repoUrl?: string;
  slug?: string | string[];
  client?: string;
  published?: boolean;
};

type ProjectFormValues = {
  title: string;
  shortDesc: string;
  liveUrl: string;
  repoUrl: string;
  slug: string;
  client: string;
  published: boolean;
};

type Props = {
  project?: Project | null;
  onCancel: () => void;
  onSaved: (saved: Project) => void;
};

export default function ProjectForm({ project, onCancel, onSaved }: Props) {
  const [values, setValues] = useState<ProjectFormValues>({
    title: project?.title ?? "",
    shortDesc: project?.shortDesc ?? "",
    liveUrl: project?.liveUrl ?? "",
    repoUrl: project?.repoUrl ?? "",
    slug: Array.isArray(project?.slug)
      ? project.slug.join(",")
      : (project?.slug ?? ""),
    client: project?.client ?? "",
    published: Boolean(project?.published ?? false),
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  // Parse tags from slug on mount and when project changes
  useEffect(() => {
    if (project?.id) {
      const slugValue = Array.isArray(project.slug)
        ? project.slug.join(",")
        : (project.slug ?? "");
      
      setValues({
        title: project.title ?? "",
        shortDesc: project.shortDesc ?? "",
        liveUrl: project.liveUrl ?? "",
        repoUrl: project.repoUrl ?? "",
        slug: slugValue,
        client: project.client ?? "",
        published: Boolean(project.published ?? false),
      });

      // Set tags from slug
      setTags(
        slugValue
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      );
    }
  }, [project?.id]);

  function change<K extends keyof ProjectFormValues>(
    key: K,
    val: ProjectFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function addTag(tag: string) {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      const newTags = [...tags, trimmed];
      setTags(newTags);
      change("slug", newTags.join(","));
    }
  }

  function removeTag(tag: string) {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    change("slug", newTags.join(","));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!values.title || !values.title.trim()) {
      setError("Title is required.");
      return;
    }

    setSaving(true);
    try {
      // Convert tags string to array for API
      const payload = {
        ...values,
        tags: values.slug
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };

      let res: Response;
      if (project?.id) {
        // update
        res = await fetch(`/api/projects/${project.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // create
        res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      const saved = (await res.json()) as Project;
      onSaved(saved);
    } catch (err: any) {
      console.error(err);
      setError(err?.message ?? "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="required">
            Title
          </Label>
          <Input
            id="title"
            value={values.title}
            onChange={(e) => change("title", e.target.value)}
            placeholder="Project title"
            required
            autoFocus
            disabled={saving}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="shortDesc">Description</Label>
          <Textarea
            id="shortDesc"
            value={values.shortDesc}
            onChange={(e) => change("shortDesc", e.target.value)}
            placeholder="Short description of your project"
            rows={4}
            disabled={saving}
          />
        </div>

        {/* URLs Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="liveUrl">Live URL</Label>
            <Input
              id="liveUrl"
              type="url"
              value={values.liveUrl}
              onChange={(e) => change("liveUrl", e.target.value)}
              placeholder="https://example.com"
              disabled={saving}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repoUrl">Repository URL</Label>
            <Input
              id="repoUrl"
              type="url"
              value={values.repoUrl}
              onChange={(e) => change("repoUrl", e.target.value)}
              placeholder="https://github.com/username/repo"
              disabled={saving}
            />
          </div>
        </div>

        {/* Client & Tags Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="client">Client</Label>
            <Input
              id="client"
              value={values.client}
              onChange={(e) => change("client", e.target.value)}
              placeholder="Client name"
              disabled={saving}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tags"
                placeholder="Add a tag and press Enter"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
                disabled={saving}
              />
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-destructive transition-colors"
                      disabled={saving}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Published Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="published"
            checked={values.published}
            onCheckedChange={(checked) =>
              change("published", checked === true)
            }
            disabled={saving}
          />
          <Label
            htmlFor="published"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Published
          </Label>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={saving}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={saving}>
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {saving
            ? "Saving..."
            : project?.id
            ? "Save changes"
            : "Create project"}
        </Button>
      </div>
    </form>
  );
}