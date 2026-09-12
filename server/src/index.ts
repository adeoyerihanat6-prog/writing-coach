import express from 'express';

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});