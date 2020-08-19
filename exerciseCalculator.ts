interface Atributes {
  days: number,
  trainingDays: number,
  targetValue: number,
  total: number,
  averagetime: number,
  targetReached: boolean,
  rating: number,
  text: string
}

const calculateExercises = (args: Array<string>): Atributes => {
  
  if (args.length < 2) throw new Error('Not enough arguments');

  // week = poor name, means just modified args
  const week = args.map(value => {
    if (isNaN(Number(value))) {
      throw new Error('Use only numbers');
    } else  {
      return Number(value);
    }
  })
  
  const days = week.length-1;
  const trainingDays = week.filter(value => value > 0).length -1;
  const targetValue = week[0];
  const total = week.reduce((sum, day) => sum + day, 0)-targetValue;
  const averagetime = total / trainingDays;
  const targetReached = averagetime >= targetValue;
  const result = (difference = targetValue - averagetime): any => {
    switch(true) {
      case difference <= 0:
        return {value: 3, description: "Good week"};
      case difference < 0.5:
        return {value: 2, description: "not too bad but could be better"};
      default:
        return {value: 1, description: "Poor week"};  
  }};
  const rating = result().value;
  const text = result().description;

  const object = {
    days: days,
    trainingDays: trainingDays,
    targetValue: targetValue,
    total: total,
    averagetime: Number(averagetime.toFixed(2)),
    targetReached: targetReached,
    rating: rating,
    text: text
  };
  
  return object;
}

const args = process.argv.slice(2); //copies arguments without two first arguments
try {
  console.log(calculateExercises(args));
} catch (e) {
  console.log('Hay problemos!: ', e.message);
}

