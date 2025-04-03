import OpenAI from "openai"
import { NextResponse } from "next/server"

// Configure OpenAI client with OpenRouter endpoint
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_HOST || "http://localhost:3000",
    "X-Title": "Mi Asistente Web",
  },
})

// Set max duration for streaming responses
export const maxDuration = 60

// Sistema básico - instrucciones esenciales solamente
const SYSTEM_PROMPT = `Eres Nestor, asistente virtual de CoNest. Responde siempre brevemente, en unas 2 frases, y directo al grano.`

// Contexto adicional dividido en partes que se cargarán como mensajes previos
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
]

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages } = body

    // Construir mensajes para la API
    const chatMessages = []

    // Añadir el sistema primero
    chatMessages.push({
      role: "system",
      content: SYSTEM_PROMPT,
    })

    // Añadir el contexto pre-cargado si es la primera interacción
    // (si solo hay un mensaje del usuario, significa que es la primera interacción)
    const userMessages = messages.filter((msg: { role: string }) => msg.role === "user")
    if (userMessages.length <= 1) {
      chatMessages.push(...CONTEXT_PARTS)
    }

    // Añadir los mensajes del usuario y asistente (excluyendo mensajes de sistema)
    if (messages && messages.length > 0) {
      const userAssistantMessages = messages.filter((msg: { role: string }) => msg.role !== "system")
      chatMessages.push(...userAssistantMessages)
    }

    // Imprimir para depuración
    console.log(
      "Enviando mensajes al modelo:",
      JSON.stringify(
        chatMessages.map((m) => ({ role: m.role, content_preview: m.content.substring(0, 50) })),
        null,
        2,
      ),
    )

    try {
      // Intento con el modelo DeepSeek
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-v3-base:free",
        messages: chatMessages,
        stream: false,
        temperature: 0.2,
        max_tokens: 150,
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

      // Modelo de respaldo
      const fallbackCompletion = await openai.chat.completions.create({
        model: "anthropic/claude-instant-v1:free",
        messages: chatMessages,
        stream: false,
        temperature: 0.7,
        max_tokens: 150,
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

