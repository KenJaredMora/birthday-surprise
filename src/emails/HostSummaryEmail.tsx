import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { Answers } from "@/types";

interface HostSummaryEmailProps {
  answers: Answers;
  invitationUrl: string;
}

const foodLabel: Record<string, string> = { cena: "Cena", desayuno: "Desayuno" };
const natureLabel: Record<string, string> = {
  camping: "Camping",
  glamping: "Glamping",
};
const ambienceLabel: Record<string, string> = {
  fogata: "Fogata",
  estrellas: "Ver estrellas",
};

export default function HostSummaryEmail({
  answers,
  invitationUrl,
}: HostSummaryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Sam eligió — Proyecto 07·08</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Sam eligió</Heading>

          <Section style={section}>
            <Row label="Comida" value={answers.food ? foodLabel[answers.food] : "—"} />
            <Row
              label="Plan"
              value={answers.nature ? natureLabel[answers.nature] : "—"}
            />
            <Row
              label="Privacidad"
              value={`${answers.privacy}/100`}
            />
            <Row
              label="Ambiente"
              value={answers.ambience ? ambienceLabel[answers.ambience] : "—"}
            />
            <Row label="Canción" value={answers.music || "—"} />
            <Row label="Olor" value={answers.smell || "—"} />
          </Section>

          <Hr style={hr} />

          <Text style={{ ...text, textAlign: "center" as const }}>
            Cuando termines de reservar, desbloquea la invitación.
          </Text>

          <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
            <Button style={buttonStyle} href={invitationUrl}>
              Ver invitación
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Text style={text}>
      <span style={{ color: "#6f655e" }}>{label}:</span>{" "}
      <strong>{value}</strong>
    </Text>
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
};

const hr = {
  borderColor: "#ddd2c5",
  margin: "32px 0",
};

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#322b28",
};

const buttonStyle = {
  backgroundColor: "#7a2e2e",
  borderRadius: "9999px",
  color: "#fefcf9",
  fontSize: "16px",
  fontWeight: 600,
  padding: "16px 32px",
  textDecoration: "none",
};
