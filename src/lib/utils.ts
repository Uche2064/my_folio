import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default class Validators {
  static validateEmail(value: string): string {
      if (!value) {
        return "L'adresse email est requise";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Veuillez entrer une adresse email valide";
      }
      return "";
    } 

  static validatePhone(value: string): string {
    if (!value) {
      return "Le numéro de téléphone est requis";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(value)) {
      return "Veuillez entrer un numéro de téléphone valide";
    }
    return "";
  }

  static validatePassword(value: string): string {
      if (!value) {
        return "Le mot de passe est requis";
      }
      if (value.length < 8) {
        return "Le mot de passe doit contenir au moins 8 caractères";
      }
      return "";
    }

    static validatePasswordForLogin(value: string): string {
      if (!value) {
        return "Le mot de passe est requis";
      }
      
      return "";
    }

    static validateField(value: string): string {
      if (!value || value.trim() === "") {
        return "Ce champ est requis";
      }
      return "";
    }
}