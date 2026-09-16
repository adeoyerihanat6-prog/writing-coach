import { db } from '../prisma/db.js';
import type { WritingAnalysis } from '../types/analysis.js';

export async function saveAnalysis(
  submissionId: number,
  analysisData: WritingAnalysis
) {
  return db.orm.public.Analysis.create({
    submissionId,
    scores: analysisData.scores,
    strongestSkill: analysisData.strongestSkill.skill,
    strongestExplanation: analysisData.strongestSkill.explanation,
    focusSkill: analysisData.focusSkill.skill,
    focusExplanation: analysisData.focusSkill.explanation,
    observations: analysisData.observations,
    lessonTitle: analysisData.lesson.title,
    lessonContent: analysisData.lesson.content,
  });
}