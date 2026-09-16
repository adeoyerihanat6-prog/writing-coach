import OpenAI from 'openai';
import type { WritingAnalysis } from '../../types/analysis.js';
import { writingCoachSystemPrompt } from './prompt.js';
import { writingAnalysisSchema } from '../../validation/analysis.js';
import { zodTextFormat } from 'openai/helpers/zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeWriting(
  writing: string
): Promise<WritingAnalysis> {
  const response = await openai.responses.parse({
    model: 'gpt-5-mini',
    instructions: writingCoachSystemPrompt,
    input: writing,
    text: {
      format: zodTextFormat(
        writingAnalysisSchema,
        'writing_analysis'
      ),
    },
  });

  if (!response.output_parsed) {
    throw new Error('AI did not return a valid writing analysis');
  }

  return response.output_parsed;
}