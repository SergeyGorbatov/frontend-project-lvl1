import readlineSync from 'readline-sync';

const randomInt = (min, max) => {
  const minimumNumber = Math.ceil(min);
  const maximumNumber = Math.floor(max);
  return Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
};

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let getRandomInt = randomInt(1, 100);

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${getRandomInt}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === isEven(getRandomInt)) {
      console.log('Correct!');
      getRandomInt = randomInt(1, 100);
    } else {
      return console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${isEven(getRandomInt)}.
Let's try again, ${getName}!`);
    }
  }
  return console.log(`Congratulations, ${getName}`);
};
export default gameEven;
