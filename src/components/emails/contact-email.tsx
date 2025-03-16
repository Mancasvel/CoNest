import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuevo mensaje de contacto</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Asunto:</strong> {subject}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>Mensaje:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Este mensaje fue enviado desde el formulario de contacto de CoNest.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const section = {
  padding: "0 48px",
}

const h1 = {
  color: "#000",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  margin: "48px 0",
  textAlign: "center" as const,
}

const text = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0 48px",
  textAlign: "center" as const,
} 