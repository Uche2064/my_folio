import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import React from "react";
import "dotenv/config";

// Configuration du transporteur Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  
});

/**
 * Envoie un email avec un composant React
 * @param from - Email de l'expéditeur
 * @param subject - Sujet de l'email
 * @param reactComponent - Composant React à envoyer
 */
export async function sendEmail(
  from: string | string[],
  subject: string,
  reactComponent: React.ReactElement
) {
  try {
    // Convertir le composant React en HTML
    const html = await render(reactComponent);

    // Préparer le message
    const message = {
      from: from,
      to: process.env.MY_EMAIL,
      subject,
      html,
      headers: {
        "X-Entity-Ref-ID": "tradesphere-email",
      },
    };

    // Envoyer l'email
    const info = await transporter.sendMail(message);
    
    // console.log("Email envoyé avec succès:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
}
