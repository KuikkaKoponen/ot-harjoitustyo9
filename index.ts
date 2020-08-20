import express from 'express';
const app = express();
app.use(express.json()) /// HUOM

import calculateBmi  from './bmiCalculator';
import calculateExercises  from './exerciseCalculator';

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/exercises', (req, res) => {
  /* Request body shall have the following format
  {
    "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
    "target": 2.5
  } 
  */

  const input = req.body;
  console.log(input)
  let list: Array<string> =[]
  list.push(String(input.target))
  console.log(list)
  input.daily_exercises.map((day: any) => { 
    list.push(String(day));
    console.log(list)
  });

  try {
    const response = calculateExercises(list)
    console.log(response)
    res.json(response) // lähettää jsonina
  } catch (e) {
    console.log(e.message)
    res.send("error: " + e.message);
  }
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