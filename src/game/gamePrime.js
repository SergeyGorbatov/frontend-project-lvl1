import { randomInt, games } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRemainder = (number) => {
  let result = true;
  for (let i = 2; i < number; i += 1) {
    if (number === 2) {
      result = true;
    } else if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const round = () => {
  const getRandomInt = randomInt(0, 100);
  const askQuestion = `Question: ${getRandomInt}`;
  const correctAnswer = getRemainder(getRandomInt) ? 'yes' : 'no';
  return [correctAnswer, askQuestion];
};

const gameEven = () => {
  games(gameRules, round);
};

export default gameEven;
