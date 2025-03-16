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

interface ConfirmationEmailProps {
  name: string
}

export default function ConfirmationEmail({ name }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Gracias por contactar con CoNest</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Gracias por contactarnos</Heading>
          <Section style={section}>
            <Text style={text}>Hola {name},</Text>
            <Text style={text}>
              Hemos recibido tu mensaje y queremos agradecerte por contactar con
              CoNest. Nuestro equipo revisará tu mensaje y te responderá lo antes
              posible.
            </Text>
            <Text style={text}>
              Mientras tanto, te invitamos a:
            </Text>
            <ul style={list}>
              <li>Explorar nuestra plataforma y conocer más sobre nuestros servicios</li>
              <li>Seguirnos en nuestras redes sociales para estar al tanto de novedades</li>
              <li>Revisar nuestras preguntas frecuentes para resolver dudas comunes</li>
            </ul>
            <Text style={text}>
              Si tienes alguna pregunta adicional urgente, no dudes en llamarnos al
              +52 (55) 1234-5678.
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Este es un correo automático, por favor no respondas a este mensaje.
            Para nuevas consultas, utiliza nuestro formulario de contacto o envía
            un correo a contacto@conest.mx
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

const list = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
  paddingLeft: "24px",
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