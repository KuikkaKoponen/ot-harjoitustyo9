import express from 'express';
const app = express();

import calculateBmi  from './bmiCalculator';

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;

  let input = [];
  input.push(String(0))
  input.push(String(0))
  input.push(String(height))
  input.push(String(weight))

  try {
    const bmi = calculateBmi(input)
    res.send( {weight: 72, height: 180, bmi: bmi})
  } catch (e) {
    console.log(e.message)
    res.send("error: " + e.message);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});