import readlineSync from 'readline-sync';

const maximumNumberRounds = 3;

export const getRandomInt = (min, max) => {
  const minimumNumber = Math.ceil(min);
  const maximumNumber = Math.floor(max);
  return Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
};

export const getGames = (gameRules, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < maximumNumberRounds; i += 1) {
    const [correctAnswer, question] = getRound();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
