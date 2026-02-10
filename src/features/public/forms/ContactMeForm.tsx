/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import EmailService from "../services/EmailService";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

export default function ContactMeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await EmailService.sendEmail(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
      reset();
      toast.success("Email envoyé avec succès");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error("Erreur lors de l'envoi de l'email");
      } else {
        toast.error("Une erreur est survenue lors de l'envoi de l'email");
      }
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full rounded-2xl border border-border/70 bg-white/70 p-4 shadow-sm backdrop-blur supports-backdrop-filter:backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 sm:p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="space-y-2">
          <input
            id="name"
            placeholder="Votre nom"
            disabled={isLoading}
            {...register("name", { required: "Ce champ est requis" })}
            className="input rounded-md sm:col-span-1 dark:text-white transition-colors dark:bg-black/30 placeholder:text-muted-foreground"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <input
            id="email"
            type="email"
            placeholder="vous@entreprise.com"
            disabled={isLoading}
            {...register("email", { required: "L'email est requis" })}
            className="input rounded-md sm:col-span-1 dark:text-white transition-colors dark:bg-black/30 placeholder:text-muted-foreground"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <input
            id="phone"
            type="tel"
            placeholder="Votre téléphone"
            disabled={isLoading}
            {...register("phone", {
              pattern: {
                value: /^\+?[1-9]\d{6,20}$/,
                message: "Numéro invalid",
              },
            })}
            className="input w-full dark:text-white transition-colors dark:bg-black/30 placeholder:text-muted-foreground rounded-md"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message?.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Textarea
            placeholder="Parlez brièvement de votre besoin..."
            className="min-h-[140px] textarea resize-none bg-background/70 text-foreground dark:bg-black/30 dark:text-white dark:placeholder:text-neutral-500"
            disabled={isLoading}
            rows={4}
            {...register("message", {
              required: "Veuillez saisir le message",
              maxLength: {
                value: 1000,
                message: "Le message ne peut pas dépassé 1000 caractères",
              },
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message?.toString()}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full col-span-2 gap-2"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Envoyer
        </Button>
      </form>

      <div className="mt-4 flex flex-col gap-3">
        <span className="text-xs text-neutral-600 dark:text-neutral-300">
          Ou écrivez-moi directement :{" "}
          <a
            className="underline decoration-neutral-400 underline-offset-4 dark:decoration-white/40"
            href="mailto:godswilllek02@gmail.com"
          >
            godswilllek02@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
