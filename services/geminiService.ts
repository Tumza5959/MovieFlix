import { GoogleGenAI, Type } from '@google/genai';

// IMPORTANT: Your API key must be set in the environment variables.
// Do not paste your API key directly in the code.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might show a more user-friendly error message
  // or disable AI features.
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export async function generateMovieSuggestions(genre: string): Promise<{ title: string; synopsis: string; }[]> {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  
  const prompt = `ช่วยสร้างไอเดียหนังใหม่ที่ไม่มีอยู่จริง จำนวน 3 เรื่อง พร้อมเรื่องย่อสั้นๆ หนึ่งประโยคสำหรับแต่ละเรื่อง ในแนว "${genre}" เป็นภาษาไทย`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'ชื่อเรื่องหนังที่คิดขึ้นใหม่เป็นภาษาไทย',
              },
              synopsis: {
                type: Type.STRING,
                description: 'เรื่องย่อสั้นๆ หนึ่งประโยคสำหรับหนังเรื่องนั้นๆ เป็นภาษาไทย',
              },
            },
            required: ["title", "synopsis"],
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const suggestions = JSON.parse(jsonString);
    return suggestions;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // You could add more specific error handling here based on the error type
    throw new Error("Failed to fetch suggestions from Gemini API.");
  }
}
