import { sendEmail } from "@/lib/email";
import ContactMeEmail from "@/features/public/components/email/ContactMe";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  const { name, email, phone, subject, message } =
    (await request.json()) as ContactPayload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Champs requis manquants (name, email, message)." },
      { status: 400 },
    );
  }

  try {
    await sendEmail(
      email,
      subject || "Nouveau message depuis le portfolio",
      React.createElement(ContactMeEmail,{
        fullName: name,
        email,
        phone,
        subject,
        message,
      }),
    );
    return NextResponse.json({ message: "Email envoyé avec succès", }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { message: "Échec de l'envoi de l'email" },
      { status: 500 },
    );
  }
}