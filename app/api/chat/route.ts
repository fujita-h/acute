import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest } from 'next/server';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });

  // Convert the response into a text-stream
  const stream = OpenAIStream(response, {
    onCompletion: (completion) => {
      console.log('Completion:', completion);
    },
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
