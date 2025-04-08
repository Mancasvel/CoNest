import { createClient } from "@/utils/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null
    const fileName = formData.get("fileName") as string | null
    const userId = formData.get("userId") as string | null

    if (!file || !fileName || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Convert the file into a buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Initialize Supabase client
    const supabase = await createClient()

    // Define bucket and file path
    const bucketName = "studentpicks"
    const filePath = `${fileName}`

    // Upload to Supabase storage
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
        { status: 500 }
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
      { status: 500 }
    )
  }
}
