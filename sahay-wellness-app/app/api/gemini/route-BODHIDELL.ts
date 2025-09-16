import { type NextRequest, NextResponse } from "next/server"

const callGeminiAPI = async (payload: any) => {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    console.error("")
    return {
      content: {
        parts: [
          {
            text: "I'm sorry, but the AI service is currently unavailable. Please check that your API key is properly configured in your environment variables.",
          },
        ],
      },
    }
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`

  try {
    console.log("[v0] Making API call to Gemini...")
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error("[v0] API call failed with status:", response.status)
      const errorText = await response.text()
      console.error("[v0] Error response:", errorText)

      return {
        content: {
          parts: [
            {
              text: `I'm experiencing technical difficulties right now. Please try again later. (Error: ${response.status})`,
            },
          ],
        },
      }
    }

    const result = await response.json()
    console.log("[v0] API call successful")
    return (
      result.candidates?.[0] || {
        content: {
          parts: [
            {
              text: "I'm sorry, I couldn't generate a response right now. Please try again.",
            },
          ],
        },
      }
    )
  } catch (error) {
    console.error("[v0] Error calling Gemini API:", error)
    return {
      content: {
        parts: [
          {
            text: "I'm experiencing technical difficulties. Please check your internet connection and try again.",
          },
        ],
      },
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, payload } = body

    let result
    switch (type) {
      case "chat":
        result = await callGeminiAPI(payload)
        break
      case "summarize":
        result = await callGeminiAPI(payload)
        break
      case "pathway":
        result = await callGeminiAPI(payload)
        break
      case "wellness":
        result = await callGeminiAPI(payload)
        break
      case "clarity":
        result = await callGeminiAPI(payload)
        break
      default:
        return NextResponse.json({ error: "Invalid request type" }, { status: 400 })
    }

    return NextResponse.json({ result })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
