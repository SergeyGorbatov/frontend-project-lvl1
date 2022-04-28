import { randomInt, games } from '../index.js';

const gameRules = 'What is the result of the expression?';

const round = () => {
  const sign = ['+', '-', '*'];
  const randomSign = sign[randomInt(0, sign.length - 1)];
  const calculateTheExpression = (n1, n2) => {
    if (randomSign === '+') {
      return n1 + n2;
    } if (randomSign === '-') {
      return n1 - n2;
    } if (randomSign === '*') {
      return n1 * n2;
    } return console.log('Unknown sign');
  };
  const getRandomInt = randomInt(0, 100);
  const getRandomInt2 = randomInt(0, 100);
  const askQuestion = `Question: ${getRandomInt} ${randomSign} ${getRandomInt2}`;
  const correctAnswer = String(calculateTheExpression(getRandomInt, getRandomInt2));
  return [correctAnswer, askQuestion];
};

const gameCalc = () => {
  games(gameRules, round);
};

export default gameCalc;
