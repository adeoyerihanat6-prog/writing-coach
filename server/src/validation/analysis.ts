import { z } from 'zod';

export const skillNameSchema = z.enum([
  'clarity',
  'structure',
  'specificity',
  'sentenceCraft',
  'vocabulary',
  'flow',
]);

export const skillScoreSchema = z.object({
  skill: skillNameSchema,
  score: z.number().min(0).max(100),
  confidence: z.number().min(0).max(1),
});

export const observationSchema = z.object({
  excerpt: z.string(),
  issue: z.string(),
  explanation: z.string(),
});

export const skillExplanationSchema = z.object({
  skill: skillNameSchema,
  explanation: z.string(),
});

export const lessonSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const writingAnalysisSchema = z.object({
  scores: z.array(skillScoreSchema),
  strongestSkill: skillExplanationSchema,
  focusSkill: skillExplanationSchema,
  observations: z.array(observationSchema),
  lesson: lessonSchema,
});                                                                                                                                                                              