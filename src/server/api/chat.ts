import { defineEventHandler } from "h3";

/**
 * Simple chat API endpoint
 * Connect this to your WhatsApp bot backend or call AI directly
 */
export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    return { error: "Method not allowed" };
  }

  try {
    const body = await readBody(event);
    const { message } = body;

    if (!message || typeof message !== "string") {
      return { error: "Invalid message" };
    }

    // Option 1: Call your local WhatsApp bot backend
    // const response = await $fetch('http://localhost:3000/api/chat', {
    //   method: 'POST',
    //   body: { message }
    // });

    // Option 2: Call OpenAI directly (configure in .env)
    const openAiKey = process.env.OPENAI_API_KEY;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are Ergo Base's AI assistant. You help customers with:
- Product inquiries (Standing Desks, Ergonomic Chairs, Accessories)
- Pricing and specifications
- Delivery and warranty information
- Free ergonomic consultations
- General ergonomics advice

Ergo Base Products:
- Standing Desks (Pro Station LKR 181,300, Base Model LKR 138,500)
- Ergonomic Chairs
- Accessories (Lamps, Stands, Power solutions)

Services:
- Free ergonomic workspace consultation
- 2-3 business day delivery / Colombo pickup
- 5-year warranty
- Risk-free returns

Keep responses concise and helpful. If you can't help, suggest contacting support at +94 77 721 2199.`
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      throw new Error("AI API error");
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I couldn't process your request. Please try again.";

    return { reply };
  } catch (error) {
    console.error("Chat API error:", error);
    return {
      reply: "Sorry, I'm having trouble connecting. Please try again or contact us at +94 77 721 2199."
    };
  }
});
