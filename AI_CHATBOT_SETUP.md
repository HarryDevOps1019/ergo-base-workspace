# AI Chatbot Setup Guide

## What's Been Added

### Frontend
- **AIChatBot.tsx** - Minimal floating chat widget
  - Toggle button with AI icon
  - Clean chat interface
  - Real-time message display
  - Typing indicators

### Backend
- **chat.ts** - API endpoint to handle messages

## Setup Steps

### Option 1: Use OpenAI Directly (Easiest)

1. **Add to .env.local**
```env
VITE_OPENAI_API_KEY=sk-your-key-here
```

2. **Update AIChatBot.tsx** to send to OpenAI:
```typescript
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: { "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` }
  // ... rest of request
});
```

### Option 2: Use Your WhatsApp Bot Backend

1. **Make sure your WhatsApp bot is running**
```bash
npm run dev:whatsapp  # Terminal 2
```

2. **Update API endpoint in AIChatBot.tsx**
```typescript
const response = await fetch("http://localhost:3000/api/chat", {
  method: "POST",
  body: JSON.stringify({ message: input })
});
```

3. **Update WhatsApp bot to handle HTML requests** (add to whatsapp-bot.ts):
```typescript
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const aiResponse = await getAIResponse(message);
  res.json({ reply: aiResponse });
});
```

### Option 3: Use Vite Backend

If running with a Node backend:

1. **Create src/server/routes/api/chat.ts** (or your API structure)
2. **Update chat endpoint URL** in AIChatBot.tsx from `/api/chat` to match your setup

## Testing Locally

1. **Start dev server**
```bash
npm run dev  # Frontend
```

2. **In another terminal, start WhatsApp bot** (optional)
```bash
npm run dev:whatsapp
```

3. **Visit http://localhost:5173/**
4. **Click the AI Chat button** in bottom right
5. **Type a message** to test

## Customization

### Change Bot Personality
Edit the system prompt in `chat.ts`:
```typescript
role: "system",
content: `You are Ergo Base's AI assistant...`
```

### Change Style
Edit `AIChatBot.tsx`:
- Colors: Update `bg-gold`, `bg-surface`, `bg-muted`
- Size: Change `w-96 h-[600px]`
- Position: Modify `bottom-6 right-6`
- Icons: Replace `MessageCircle`, `Send`, `X`

### Add Features
- Conversation history (save to IndexedDB)
- Typing animations
- Quick reply buttons
- File uploads
- Voice input
- User feedback (thumbs up/down)

## Production Deployment

1. **Remove localhost references**
2. **Use full URLs** in API calls:
```typescript
const response = await fetch(`${window.location.origin}/api/chat`, {
  method: "POST",
  body: JSON.stringify({ message: input })
});
```

3. **Set up CORS** if backend is on different domain
4. **Add rate limiting** to prevent abuse
5. **Add authentication** if needed

## Environment Variables

### Frontend (.env.local)
```env
VITE_OPENAI_API_KEY=sk-...  # If using OpenAI
VITE_API_URL=http://localhost:3000  # If running own backend
```

### Backend (.env)
```env
OPENAI_API_KEY=sk-...
```

## File Structure

```
src/components/layout/
├── AIChatBot.tsx          ← Floating chat widget

src/server/api/
├── chat.ts                ← API endpoint (optional)

src/routes/
├── __root.tsx             ← Updated to use AIChatBot
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Chat button not visible | Clear cache, check z-50 class |
| Messages not sending | Check browser console for errors |
| Slow responses | Increase max_tokens, check API quota |
| CORS errors | Add CORS headers to backend |
| API key errors | Verify key in environment variables |

## Next Steps

1. ✅ Chatbot widget is installed
2. 📡 Connect to AI backend (OpenAI, GitHub, or your bot)
3. 🎨 Customize appearance and personality
4. 📊 Add analytics tracking
5. 🔐 Secure API endpoints
6. 🚀 Deploy to production
