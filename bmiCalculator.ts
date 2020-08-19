const calculateBmi = (args: Array<string>): string => {
  const height = Number(args[2])
  const weight = Number(args[3])

  if (args.length < 4) {
    throw new Error('Not enough arguments')};
  if (args.length > 4) throw new Error('Too many arguments');

  const BMI: number = weight / ((height / 100)**2);

  switch(true) {
    case isNaN(BMI):
      throw new Error('Inputs must be numbers');
    case BMI < 15:
      return (`BMI is ${BMI} - Very severely underweight`);
    case BMI < 16:
      return (`BMI is ${BMI} - Severely underweight`);
    case BMI < 18.5:
      return (`BMI is ${BMI} - Underweight`);
    case BMI < 25:
      return (`BMI is ${BMI} - Normal (healthy weight)`);
    case BMI < 30:
      return (`BMI is ${BMI} - Overweight`);
    case BMI < 35:
      return (`BMI is ${BMI} - Obese Class I (Moderately obese)`);
    case BMI < 40:
      return (`BMI is ${BMI} - Obese Class II (Severely obese)`);
    default:
        return (`BMI is ${BMI} - Obese Class III (Very severely obese)`);  
  }
}
/*

try {
  console.log(calculateBmi(process.argv))
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}

*/

export default calculateBmi