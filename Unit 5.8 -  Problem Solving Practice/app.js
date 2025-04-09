// algorithm FizzBuzz, takes n as input, returns nothing.
// if n is not a positive integer less than 100:
//     print 'Error' and stop execution.
//     for each integer from 1 to n (inclusive):
//         if the integer is divisible by 3:
//             print 'Fizz'
//         if the integer is divisible by 5:
//             print 'Buzz'
//         if the integer is divisible by both 3 and 5:
//             print 'FizzBuzz'
//         if the integer is not divisible by 3 or 5:
//             print the integer
function fizzBuzz(n) {
    if (!Number.isInteger(n) || n <= 0 || n >= 100) {
        console.error('Error');
        return;
    }
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output = i;
        }
        console.log(output);
    }
}
// Test cases for FizzBuzz
fizzBuzz(15);
fizzBuzz(100);
fizzBuzz(0);
fizzBuzz(101);
//algorithm LetterCount, takes a string WORD as input, returns object with letter counts.
// if word is not a string of alphabetic characters:
//     print Error and stop execution.

// create an empty object, letterCounts.
// for each letter in the word:
//     if the letter is not in letterCounts:
//         add the lowercase letter to letterCounts with a value of 1.
//     else:
//         increment the value of the letter in letterCounts by 1.
// return letterCounts.
function letterCount(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (typeof word !== 'string') {
        console.error('Error');
        return;
    }
    for (let letter of word) {
        if (!alphabet.includes(letter.toLowerCase())) {
            console.error('Error');
            return;
        }
    }
    let letterCounts = {};
    const lowercaseWord = word.toLowerCase();
    for (let letter of lowercaseWord) {
        if (!(letter in letterCounts)) {
            letterCounts[letter] = 1;
        } else {
            letterCounts[letter]++;
        }
    }
    return letterCounts;
}
// Test cases for LetterCount
letterCount('helloG00fy');
console.log(letterCount('hello'));
console.log(letterCount('helloWhoAreYou'));
//     