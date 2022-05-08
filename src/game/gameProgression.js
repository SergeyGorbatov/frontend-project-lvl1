import { getRandomInt, getGames } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getRound = () => {
  const fixedNumberProgression = getRandomInt(2, 15);
  const progressionLength = getRandomInt(5, 10);

  const result = [];
  let number = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    number += fixedNumberProgression;
    result.push(number);
  }
  const randomInt = getRandomInt(0, result.length - 1);
  const randomElement = result[randomInt];
  result[randomInt] = '..';
  const string = result.join(' ');

  const question = `Question: ${string}`;
  const correctAnswer = String(randomElement);
  return [correctAnswer, question];
};

const startGameProgression = () => {
  getGames(gameRules, getRound);
};

export default startGameProgression;
