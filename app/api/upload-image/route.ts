import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: { formData: () => any }) {
  try {
    const formData = await request.formData()
    const file = formData.get("file")
    const fileName = formData.get("fileName")
    const userId = formData.get("userId")

    if (!file || !fileName || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a buffer from the file
    const buffer = Buffer.from(await file.arrayBuffer())

    // Initialize Supabase client
    const supabase = await createClient()

    // Upload the file
    const bucketName = "studentpicks"
    const filePath = `${fileName}`
    const { data, error } = await supabase.storage.from(bucketName).upload(filePath, buffer, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: true,
    })

    if (error) {
      console.error("Error uploading file:", error)
      return NextResponse.json(
        {
          error: `Error uploading file: ${error.message}`,
          details: error,
        },
        { status: 500 },
      )
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(filePath)

    return NextResponse.json({
      success: true,
      publicUrl,
      path: data.path,
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      {
        error: `Unexpected error: ${error}`,
      },
      { status: 500 },
    )
  }
}

