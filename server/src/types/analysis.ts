export type SkillName =
  | 'clarity'
  | 'structure'
  | 'specificity'
  | 'sentenceCraft'
  | 'vocabulary'
  | 'flow';

export type SkillScore = {
  skill: SkillName;
  score: number;
  confidence: number;
};

export type Observation = {
  excerpt: string;
  issue: string;
  explanation: string;
};

export type WritingAnalysis = {
  scores: SkillScore[];
  strongestSkill: {
    skill: SkillName;
    explanation: string;
  };
  focusSkill: {
    skill: SkillName;
    explanation: string;
  };
  observations: Observation[];
  lesson: {
    title: string;
    content: string;
  };
};