import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import React from "react";

import dotenv from "dotenv";

dotenv.config();

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
 * @param senderName - Nom de l'expéditeur
 * @param senderEmail - Email de l'expediteur
 * @param subject - Sujet de l'email
 * @param reactComponent - Composant React à envoyer
 */
export async function sendEmail(
  senderName: string,
  senderEmail: string,
  subject: string,
  reactComponent: React.ReactElement,
) {
  try {
    // Convertir le composant React en HTML
    const html = await render(reactComponent);

    // Préparer le message
    const message = {
      from: `"${senderName}" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: senderEmail,
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
