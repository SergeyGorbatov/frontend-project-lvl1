import readlineSync from 'readline-sync';

export const greeting = () => {
    const getName = readlineSync.question('May I have your name? ');
    return console.log('Hello, ' + getName + '!');
};