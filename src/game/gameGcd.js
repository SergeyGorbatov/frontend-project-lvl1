import { getRandomInt, getGames } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (n1, n2) => {
  if (!n2) {
    return n1;
  }
  return greatestCommonDivisor(n2, n1 % n2);
};

const getRound = () => {
  const randomInt = getRandomInt(0, 100);
  const randomInt2 = getRandomInt(0, 100);
  const question = `Question: ${randomInt} ${randomInt2}`;
  const correctAnswer = String(greatestCommonDivisor(randomInt, randomInt2));
  return [correctAnswer, question];
};

const startGameGcd = () => {
  getGames(gameRules, getRound);
};

export default startGameGcd;
