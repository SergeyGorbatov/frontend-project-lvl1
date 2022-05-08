import { getRandomInt, getGames } from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculateExpression = (n1, randomSign, n2) => {
  switch (randomSign) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return console.log('Unknown sign');
  }
};

const getRound = () => {
  const sign = ['+', '-', '*'];
  const randomSign = sign[getRandomInt(0, sign.length - 1)];
  const randomInt = getRandomInt(0, 100);
  const randomInt2 = getRandomInt(0, 100);
  const question = `Question: ${randomInt} ${randomSign} ${randomInt2}`;
  const correctAnswer = String(calculateExpression(randomInt, randomSign, randomInt2));
  return [correctAnswer, question];
};

const startGameCalc = () => {
  getGames(gameRules, getRound);
};

export default startGameCalc;
