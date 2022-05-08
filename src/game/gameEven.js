import { getRandomInt, getGames } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const getRound = () => {
  const randomInt = getRandomInt(0, 100);
  const question = `Question: ${randomInt}`;
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startGameEven = () => {
  getGames(gameRules, getRound);
};

export default startGameEven;
