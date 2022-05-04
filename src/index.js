import readlineSync from 'readline-sync';

const MaximumNumberOfRounds = 3;

export const randomInt = (min, max) => {
  const minimumNumber = Math.ceil(min);
  const maximumNumber = Math.floor(max);
  return Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
};

export const games = (gameRules, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < MaximumNumberOfRounds; i += 1) {
    const [correctAnswer, askQuestion] = round();
    console.log(askQuestion);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
