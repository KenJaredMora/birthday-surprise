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

interface GuestConfirmationEmailProps {
  guestName: string;
}

export default function GuestConfirmationEmail({
  guestName = "Saam",
}: GuestConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Tus respuestas fueron recibidas — Proyecto 07·08</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Proyecto 07·08</Heading>
          <Text style={text}>Hola {guestName}.</Text>
          <Text style={text}>Tus respuestas fueron recibidas.</Text>
          <Section style={section}>
            <Text style={{ ...text, color: "#6f655e" }}>
              Ahora solo queda esperar... Muy pronto recibirás una invitación
              oficial.
            </Text>
          </Section>
          <Text style={{ ...text, textAlign: "center" as const }}>:)</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f8f5f0",
  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "64px 32px",
  maxWidth: "480px",
};

const heading = {
  fontFamily: "Georgia, serif",
  fontSize: "32px",
  color: "#7a2e2e",
  textAlign: "center" as const,
  marginBottom: "32px",
};

const section = {
  backgroundColor: "#fefcf9",
  borderRadius: "16px",
  padding: "24px",
  margin: "24px 0",
};

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#322b28",
};
