import express from 'express';
import { db } from './prisma/db.js';
import type { WritingAnalysis } from './types/analysis.js';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Writing Coach API is running',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.post('/api/analyze', (req, res) => {
  const { writing } = req.body;

  res.json({
    message: 'Writing received',
    writing,
  });
});

app.post('/api/users', async (req, res) => {
  const { email, username } = req.body;

  if (typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({
      error: 'A valid email is required',
    });
  }

  const user = await db.orm.public.User.create({
    email,
    username,
  });

  res.status(201).json(user);
});

app.get('/api/users', async (req, res) => {
  const users = await db.orm.public.User.all();

  res.json(users);
});

app.get('/api/users/:userId/submissions', async (req, res) => {
  const userId = Number(req.params.userId);

  if (!Number.isInteger(userId)) {
    return res.status(400).json({
      error: 'A valid userId is required',
    });
  }

  const submissions = await db.orm.public.Submission
    .where({ userId })
    .all();

  res.json(submissions);
});

app.post('/api/submissions', async (req, res) => {
  const { userId, writing } = req.body;

  if (
    !Number.isInteger(userId) ||
    typeof writing !== 'string' ||
    !writing.trim()
  ) {
    return res.status(400).json({
      error: 'A valid userId and writing are required',
    });
  }

  const submission = await db.orm.public.Submission.create({
    userId,
    writing,
  });

  res.status(201).json(submission);
});

app.post('/api/submissions/:submissionId/analysis', async (req, res) => {
  const submissionId = Number(req.params.submissionId);
  const analysisData = req.body as WritingAnalysis;

  if (!Number.isInteger(submissionId)) {
    return res.status(400).json({
      error: 'A valid submissionId is required',
    });
  }

  const analysis = await db.orm.public.Analysis.create({
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

  res.status(201).json(analysis);
});

app.get('/api/submissions/:submissionId/analysis', async (req, res) => {
  const submissionId = Number(req.params.submissionId);

  if (!Number.isInteger(submissionId)) {
    return res.status(400).json({
      error: 'A valid submissionId is required',
    });
  }

  const analysis = await db.orm.public.Analysis
    .where({ submissionId })
    .first();

  if (!analysis) {
    return res.status(404).json({
      error: 'Analysis not found',
    });
  }

  res.json(analysis);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});