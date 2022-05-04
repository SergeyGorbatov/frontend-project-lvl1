import { randomInt, games } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const round = () => {
  const fixedNumberProgression = randomInt(2, 15);
  const progressionLength = randomInt(5, 10);

  const result = [];
  let number = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    number += fixedNumberProgression;
    result.push(number);
  }
  const getRandomInt = randomInt(0, result.length - 1);
  const randomElement = result[getRandomInt];
  result[getRandomInt] = '..';
  const string = result.join(' ');

  const askQuestion = `Question: ${string}`;
  const correctAnswer = String(randomElement);
  return [correctAnswer, askQuestion];
};

const gameProgression = () => {
  games(gameRules, round);
};

export default gameProgression;
