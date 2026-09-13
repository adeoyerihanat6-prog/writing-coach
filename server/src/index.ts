import express from 'express';
import { db } from './prisma/db.js';

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

  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});