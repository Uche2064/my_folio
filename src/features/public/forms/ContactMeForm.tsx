"use client";

import AppInput from "@/components/shared/AppInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import EmailService from "../services/EmailService";
import Validators from "@/lib/utils";
import { toast } from "sonner";
import { AxiosError, AxiosResponse } from "axios";

export default function ContactMeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });
  };
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const nameError = Validators.validateField(name);
      const emailError = Validators.validateEmail(email);
      const messageError = Validators.validateField(message);
      setErrors({ name: nameError, email: emailError, message: messageError });
      let response;
      if(!emailError && !nameError && !messageError) {
         response = await EmailService.sendEmail(
            name,
            email,
            phone,
            message
          );
      }
      console.log("response", response);
      toast.success("Email envoyé avec succès");
      resetFields();
    } catch (error: unknown) {
      if(error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Une erreur est survenue lors de l'envoi de l'email");
      }
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <AppInput
          id="name"
          label="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          leadingIcon={User}
          error={errors.name}
          disabled={isLoading}
          required={true}
        />
      </div>
      <AppInput
        id="email"
        label="Email"
        type="email"
        placeholder="vous@entreprise.com"
        value={email}
        leadingIcon={Mail}
        error={errors.email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        required={true}
      />
      <AppInput
        id="phone"
        label="Téléphone"
        type="tel"
        placeholder="Votre téléphone"
        value={phone}
        leadingIcon={Phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={isLoading}
      />
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground dark:text-white">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          placeholder="Parlez brièvement de votre besoin..."
          value={message}
          className="resize-none"
          disabled={isLoading}
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          onClick={handleSubmit}
          type="submit"
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Envoyer
        </Button>
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
