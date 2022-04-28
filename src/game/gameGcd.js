import { randomInt, games } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const round = () => {
  const greatestCommonDivisor = (n1, n2) => {
    if (!n2) {
      return n1;
    }
    return greatestCommonDivisor(n2, n1 % n2);
  };

  const getRandomInt = randomInt(0, 100);
  const getRandomInt2 = randomInt(0, 100);
  const askQuestion = `Question: ${getRandomInt} ${getRandomInt2}`;
  const correctAnswer = String(greatestCommonDivisor(getRandomInt, getRandomInt2));
  return [correctAnswer, askQuestion];
};

const gameGcd = () => {
  games(gameRules, round);
};

export default gameGcd;
