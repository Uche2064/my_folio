import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface ContactMeProps {
  fullName: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
}

export default function ContactMeEmail({
  fullName,
  email,
  message,
  phone,
  subject,
}: ContactMeProps) {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Bonjour" : currentHour < 18 ? "Bon après-midi" : "Bonsoir";

  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact depuis le portfolio</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.box}>
            <Heading style={styles.heading}>Nouveau message de contact</Heading>
            <Text style={styles.paragraph}>
              {greeting}, vous avez reçu un message de <strong>{fullName}</strong>.
            </Text>
            <Section style={styles.infoBox}>
              <Text style={styles.infoText}>
                <strong>Nom :</strong> {fullName}
              </Text>
              <Text style={styles.infoText}>
                <strong>Email :</strong> {email}
              </Text>
              {phone ? (
                <Text style={styles.infoText}>
                  <strong>Téléphone :</strong> {phone}
                </Text>
              ) : null}
              {subject ? (
                <Text style={styles.infoText}>
                  <strong>Objet :</strong> {subject}
                </Text>
              ) : null}
            </Section>
            <Text style={styles.paragraph}>
              <strong>Message :</strong>
            </Text>
            <Section style={styles.messageBox}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>
            <Text style={styles.footer}>
              Cet email a été envoyé depuis le formulaire de contact du portfolio.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  main: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  },
  box: {
    padding: "0 32px",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center" as const,
    color: "#0f172a",
    marginBottom: "24px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#1f2937",
    marginBottom: "14px",
  },
  infoBox: {
    backgroundColor: "#f3f4f6",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  infoText: {
    fontSize: "15px",
    lineHeight: "24px",
    color: "#0f172a",
    margin: "6px 0",
  },
  messageBox: {
    backgroundColor: "#eef2ff",
    padding: "18px",
    borderRadius: "10px",
    border: "1px solid #c7d2fe",
    marginBottom: "24px",
  },
  messageText: {
    fontSize: "15px",
    lineHeight: "24px",
    color: "#111827",
    whiteSpace: "pre-wrap" as const,
  },
  footer: {
    fontSize: "13px",
    lineHeight: "22px",
    color: "#6b7280",
    marginTop: "16px",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "18px",
  },
} satisfies Record<string, React.CSSProperties>;