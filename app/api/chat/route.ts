import OpenAI from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_HOST || "http://localhost:3000",
    "X-Title": "Mi Asistente Web",
  },
})

export const maxDuration = 60

// CONTEXTO
const SYSTEM_PROMPT = `Eres Nestor, asistente virtual de CoNest. 
Tu función es proporcionar información clara y concisa sobre CoNest, la plataforma que conecta personas mayores con estudiantes para convivencia intergeneracional.

Estás equipado con un extenso conocimiento sobre las preguntas frecuentes de CoNest, abarcando temas como:
- Funcionamiento de la plataforma
- Requisitos para participar
- Beneficios para mayores y estudiantes
- Contratos y responsabilidades
- Seguridad y privacidad
- Pagos y aspectos económicos
- Resolución de conflictos
- Impacto social y ODS

Responde siempre de manera amigable, breve (en 2-3 frases) y directa al grano. Si te preguntan sobre algo que no está en tu conocimiento, indícalo y ofrece derivar la consulta al equipo de CoNest.

Utiliza un tono cercano y profesional, facilitando información útil y precisa que transmita confianza en la plataforma.`

// FAQ COMPLETAS COMO CONTEXTO
const FAQ_KNOWLEDGE = `
FAQ (Preguntas Frecuentes sobre CoNest)

1. Sobre CoNest y la Convivencia
1.1 ¿Qué es CoNest y cómo funciona?
CoNest es una plataforma innovadora que conecta a personas mayores que viven solas con jóvenes estudiantes en busca de alojamiento asequible. A cambio de un alquiler reducido, el joven ofrece compañía y ayuda en tareas básicas del hogar, como pequeñas compras, digitalización y labores domésticas sencillas. El proceso incluye registro, emparejamiento, firma de contrato y convivencia, con normas claras para garantizar una experiencia positiva para ambas partes.

1.2 ¿Por qué un mayor debería elegir CoNest en lugar de alquilar a otra persona?
CoNest ofrece un sistema seguro y estructurado, con un proceso de selección riguroso para garantizar un inquilino confiable. Además, proporciona normas claras y personalizadas, gestión de pagos segura a través de la plataforma, y promueve una convivencia intergeneracional que mejora la calidad de vida de ambas partes.

1.3 ¿Quién puede participar en CoNest?
- Personas mayores: Aquellas que viven solas, son autónomas y desean compañía en casa.
- Jóvenes estudiantes: Universitarios (grados, másteres, doctorados) o participantes en programas como SICUE y Erasmus que buscan un alojamiento asequible.
Nota: Actualmente, no se admiten jóvenes profesionales.

1.4 ¿Cómo se seleccionan los jóvenes?
El proceso de selección incluye:
- Verificación de identidad y antecedentes.
- Evaluación de compatibilidad con la persona mayor.
- Entrevistas personales para asegurar hábitos y expectativas alineadas.
- Emparejamiento basado en intereses y estilos de vida.

1.5 ¿Puedo elegir con qué joven convivir?
Sí. Antes de firmar el contrato, tendrás la oportunidad de conocer al joven y decidir si es compatible contigo.

1.6 ¿Qué tipo de ayuda recibiré del joven?
El joven puede ayudarte con:
- Compañía y conversación.
- Pequeñas compras o recados.
- Uso de tecnología (móviles, ordenadores, videollamadas, etc.).
- Organización básica del hogar.
Nota: No está obligado a realizar cuidados médicos ni asistencia especializada.

1.7 ¿El joven estará en casa todo el tiempo?
No. Los jóvenes tienen sus estudios y actividades diarias, pero se comprometen a compartir tiempo contigo según lo acordado en el contrato.

1.8 ¿Qué nivel de privacidad tendré en la vivienda?
Cada convivencia se adapta a las necesidades de ambas partes. Tendrás tu propio espacio y normas claras para garantizar el respeto mutuo.

1.9 ¿Los gastos de luz, agua, gas e internet están incluidos en el alquiler?
Sí. El alquiler que paga el joven ya incluye todos los gastos de suministros, por lo que no tendrás que preocuparte por facturas adicionales.

1.10 ¿Cómo se gestionan los pagos del alquiler?
Los pagos se realizan a través de la plataforma de CoNest, garantizando transparencia y seguridad.

2. Condiciones del Contrato y Responsabilidades
2.1 ¿Qué tipo de contrato se firma con CoNest?
CoNest facilita dos tipos de contrato:
Contrato de arrendamiento estándar: Con normas de convivencia establecidas.
Contrato de hipoteca invertida: El joven paga un alquiler superior, y al fallecimiento del mayor, se le devuelve lo abonado con opción preferente de compra del inmueble.

2.2 ¿Qué sucede si la convivencia no funciona?
CoNest ofrece un servicio de mediación para intentar solucionar los conflictos. Si no hay compatibilidad, la finalización del contrato debe resolverse según lo acordado entre ambas partes.

2.3 ¿Puedo terminar el contrato antes de tiempo sin motivo?
No. Una vez firmado, el contrato debe respetarse. Si decides finalizarlo sin causa justificada, el joven podría tener derecho a quedarse hasta el final del período acordado.

2.4 ¿Qué pasa si la persona mayor fallece durante la convivencia?
El contrato de alquiler sigue vigente, ya que el joven ha alquilado una habitación. La gestión posterior dependerá de los herederos y la situación legal del inmueble. CoNest no asume responsabilidades en este proceso.

3. Seguridad y Situaciones Especiales
3.1 ¿Qué pasa si el joven rompe algo en la vivienda?
El joven es responsable de los daños que cause en la vivienda. CoNest no se hace responsable de ningún desperfecto.

3.2 ¿Qué pasa si necesito hospitalización durante la convivencia?
El joven no tiene ninguna obligación de cuidado. Si necesitas hospitalización, la convivencia sigue según lo establecido en el contrato.

3.3 ¿Si el joven no paga el alquiler, qué hago?
Como en cualquier contrato de alquiler, puedes exigir el pago conforme a la ley. CoNest no gestiona los pagos una vez iniciado el contrato.

3.4 ¿Cómo garantiza CoNest que el joven respetará mi espacio y pertenencias?
Todos los jóvenes pasan por un proceso de selección riguroso y firman un contrato con normas claras para garantizar el respeto mutuo en la convivencia.

4. Impacto Social y Objetivos de Desarrollo Sostenible (ODS)
4.1 ¿Cómo contribuye CoNest a los Objetivos de Desarrollo Sostenible (ODS)?
CoNest está alineado con varios ODS de la Agenda 2030:
ODS 3: Salud y Bienestar → Reducción de la soledad en mayores, promoviendo su bienestar físico y mental.
ODS 10: Reducción de las Desigualdades → Acceso a vivienda asequible para jóvenes con menos recursos.
ODS 11: Ciudades y Comunidades Sostenibles → Aprovechamiento de viviendas existentes y promoción de una convivencia intergeneracional.
ODS 17: Alianzas para Lograr los Objetivos → Colaboraciones con universidades, administraciones públicas y organizaciones del tercer sector.

5. Reglas de Convivencia y Condiciones de Uso
5.1 ¿Puedo establecer normas en la vivienda?
Sí, las normas de convivencia se establecen antes de la firma del contrato para evitar conflictos futuros. Estas normas pueden incluir horarios, uso de espacios comunes, y reglas sobre visitas.

5.2 ¿Puedo pedirle al joven que realice más tareas de las acordadas?
No. El joven no es un asistente ni un trabajador doméstico. Sus responsabilidades están claramente definidas en el contrato, y cualquier cambio debe ser acordado por ambas partes.

6. Sobre la Tecnología y la Plataforma
6.1 ¿Cómo funciona la plataforma de CoNest?
La plataforma de CoNest permite a los usuarios registrarse, crear perfiles, y pasar por un proceso de selección y emparejamiento. También facilita la firma de contratos digitales y la gestión de pagos de manera segura y transparente.

6.2 ¿CoNest tiene una aplicación móvil?
Actualmente, CoNest opera a través de una plataforma web, pero estamos trabajando en el desarrollo de una aplicación móvil para mejorar la experiencia del usuario y facilitar la comunicación entre las partes.

7. Sobre la Experiencia del Usuario
7.1 ¿Cómo garantiza CoNest la compatibilidad entre el joven y la persona mayor?
CoNest utiliza un proceso de emparejamiento basado en intereses, estilos de vida y preferencias personales. Además, se realizan entrevistas y pruebas de compatibilidad para asegurar que ambas partes tengan una convivencia armoniosa.

7.2 ¿Qué pasa si el joven no cumple con las tareas acordadas?
Si el joven no cumple con sus responsabilidades, puedes notificarlo a CoNest. Aunque no intervenimos directamente en la convivencia, ofrecemos mediación y asesoramiento para resolver conflictos. Si el problema persiste, puedes seguir los procedimientos legales establecidos en el contrato.

8. Proceso de Registro y Verificación
8.1 ¿Cómo me registro en CoNest como persona mayor?
El proceso de registro incluye:
1. Crear una cuenta en la plataforma con datos básicos
2. Verificar tu identidad con documentación
3. Completar tu perfil con información detallada sobre tu vivienda e intereses
4. Agendar una visita de verificación donde un miembro del equipo de CoNest visitará tu hogar

8.2 ¿Cómo me registro en CoNest como estudiante?
El proceso para estudiantes incluye:
1. Crear una cuenta con tus datos básicos
2. Verificar tu identidad y estatus como estudiante con documentación
3. Completar tu perfil con intereses y preferencias
4. Pasar una entrevista de evaluación

9. Proceso de Emparejamiento
9.1 ¿Cómo funciona el proceso de emparejamiento?
El proceso incluye:
1. Análisis de perfiles para encontrar compatibilidades
2. Preselección de posibles candidatos
3. Entrevistas virtuales entre las partes
4. Reunión presencial si ambas partes están interesadas
5. Periodo de prueba opcional
6. Firma del contrato final

9.2 ¿Cuánto tiempo tarda el proceso de emparejamiento?
El tiempo varía según la disponibilidad y la demanda en cada ciudad, pero generalmente toma entre 2 y 4 semanas desde el registro completo hasta encontrar un match adecuado.
`

const CONTEXT_PARTS = [
  {
    role: "user" as const,
    content: "¿Qué es CoNest y cómo funciona?",
  },
  {
    role: "assistant" as const,
    content:
      "CoNest conecta personas mayores con estudiantes para convivir, donde mayores ofrecen habitación económica a cambio de compañía y ayuda básica. El proceso incluye registro, emparejamiento por intereses, contrato digital personalizado y pagos a través de la plataforma con 10% de comisión.",
  },
  {
    role: "user" as const,
    content: "¿Cuáles son los beneficios y quién puede participar?",
  },
  {
    role: "assistant" as const,
    content:
      "Los beneficios incluyen menos soledad y ayuda para mayores, alojamiento económico para jóvenes, y comunidad segura para todos. Pueden participar personas mayores autónomas y estudiantes universitarios, con verificación de identidad y entrevistas previas.",
  },
  {
    role: "user" as const,
    content: "¿Qué tipo de ayuda recibe la persona mayor del estudiante?",
  },
  {
    role: "assistant" as const, 
    content:
      "El estudiante ofrece compañía, ayuda con pequeñas compras o recados, asistencia con tecnología (móviles, ordenadores, videollamadas) y organización básica del hogar. No está obligado a proporcionar cuidados médicos ni asistencia especializada.",
  },
  {
    role: "user" as const,
    content: "¿Cómo garantiza CoNest que el joven respetará mi espacio y pertenencias?",
  },
  {
    role: "assistant" as const,
    content:
      "Todos los jóvenes pasan por un riguroso proceso de selección que incluye verificación de identidad, evaluación de compatibilidad y entrevistas personales. Además, firman un contrato con normas claras y personalizadas que garantizan el respeto mutuo en la convivencia.",
  },
  {
    role: "user" as const,
    content: "¿Puedo elegir con qué joven convivir?",
  },
  {
    role: "assistant" as const,
    content:
      "Sí, antes de firmar el contrato tendrás la oportunidad de conocer al joven a través de entrevistas virtuales y reuniones presenciales para evaluar la compatibilidad. Solo si ambas partes están de acuerdo se procede a la firma del contrato de convivencia.",
  },
  {
    role: "user" as const,
    content: "¿Qué pasa si la convivencia no funciona?",
  },
  {
    role: "assistant" as const,
    content:
      "CoNest ofrece un servicio de mediación para intentar solucionar conflictos que puedan surgir durante la convivencia. Si no hay compatibilidad a pesar de la mediación, la finalización del contrato debe resolverse según lo acordado entre ambas partes en el contrato inicial.",
  }
]

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages } = body

    const chatMessages = []

    // Añadir sistema prompt con contexto completo
    chatMessages.push({
      role: "system",
      content: `${SYSTEM_PROMPT}\n\nAquí tienes información detallada sobre CoNest para responder preguntas de usuarios:\n${FAQ_KNOWLEDGE}`,
    })

    const userMessages = messages.filter((msg: { role: string }) => msg.role === "user")
    if (userMessages.length <= 1) {
      chatMessages.push(...CONTEXT_PARTS)
    }

    if (messages && messages.length > 0) {
      const userAssistantMessages = messages.filter((msg: { role: string }) => msg.role !== "system")
      chatMessages.push(...userAssistantMessages)
    }

    console.log(
      "Enviando mensajes al modelo:",
      JSON.stringify(
        chatMessages.map((m) => ({ role: m.role, content_preview: m.content.substring(0, 50) })),
        null,
        2,
      ),
    )

    try {
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-v3-base:free",
        messages: chatMessages,
        stream: false,
        temperature: 0.2,
        max_tokens: 300, // Incrementado para permitir respuestas un poco más largas pero informativas
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
        top_p: 0.9,
      })

      const messageContent = completion.choices[0]?.message?.content || ""

      if (!messageContent.trim()) {
        throw new Error("Respuesta vacía del modelo DeepSeek")
      }

      console.log("Respuesta del modelo:", messageContent)

      return NextResponse.json({
        choices: [
          {
            message: {
              content: messageContent,
              role: "assistant",
            },
          },
        ],
      })
    } catch (modelError) {
      console.warn("Error con DeepSeek, intentando con modelo alternativo:", modelError)

      const fallbackCompletion = await openai.chat.completions.create({
        model: "anthropic/claude-instant-v1:free",
        messages: chatMessages,
        stream: false,
        temperature: 0.7,
        max_tokens: 300, // También incrementado aquí
      })

      const fallbackContent = fallbackCompletion.choices[0]?.message?.content || ""

      if (!fallbackContent.trim()) {
        throw new Error("Ambos modelos fallaron en generar respuesta")
      }

      console.log("Respuesta del modelo alternativo:", fallbackContent)

      return NextResponse.json({
        choices: [
          {
            message: {
              content: fallbackContent,
              role: "assistant",
            },
          },
        ],
      })
    }
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json(
      { error: "Error processing your request", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

