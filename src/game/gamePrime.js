import { getRandomInt, getGames } from '../index.js';

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

const getRound = () => {
  const randomInt = getRandomInt(0, 100);
  const question = `Question: ${randomInt}`;
  const correctAnswer = getRemainder(randomInt) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startGameEven = () => {
  getGames(gameRules, getRound);
};

export default startGameEven;
