import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeWriting(writing: string) {
  console.log('OpenAI client ready ✅');
  console.log('Writing received:', writing);

  return {
    message: 'AI analysis coming next',
  };
}