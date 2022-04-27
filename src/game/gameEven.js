import { randomInt, games } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const round = () => {
  const getRandomInt = randomInt(1, 100);
  const askQuestion = `Question: ${getRandomInt}`;
  const correctAnswer = isEven(getRandomInt) ? 'yes' : 'no';
  return [correctAnswer, askQuestion];
};

const gameEven = () => {
  games(gameRules, round);
};

export default gameEven;
