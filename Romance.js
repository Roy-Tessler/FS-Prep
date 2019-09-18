let text =
  "Ever since I, left the city you, you, you, You and me we just don't get along";

// Converting a text into an array of single words in lower case.
let result = [];
let re = /,/gi;
const intoArray = aText => {
  let newText = aText.replace(re, "");
  result = newText.toLowerCase().split(" ");
  return result;
};

// Creating a dictionary object where each word is a key and it's value is the following word from the array.
// In case one word is repeated, the same key gets 'pushed' with another value.

let dict = {};

const generateWordPairs = anArray => {
  for (let i = 0; i < anArray.length - 1; i++) {
    let currentWord = anArray[i];

    if (dict.hasOwnProperty(currentWord)) {
      dict[currentWord].push(anArray[i + 1]);
    } else {
      dict[currentWord] = [anArray[i + 1]];
    }
  }
  return dict;
};

// writeLine will need a helper function that takes a word and randomly chooses a word from its Markov Chain array.
// When a word has no entries in it's Markov Chain, the program should choose a new word and continue the line until
// // it meets the word count.

// Create a function writeLine that takes a Markov Chain (object) and a length of words n and returns a line of poetry.

const writeLine = (chainObj, lengthNum) => {
  let lineOfPoetry = "";
  let counter = 0;
  while (counter < lengthNum) {
    const words = Object.keys(chainObj);
    let randomWord = words[Math.floor(Math.random() * words.length)];

    lineOfPoetry += randomWord + " ";
    counter++;
  }
  return lineOfPoetry;
};

// Helper function? I wasn't sure how this function should work

// function helper(aWord) {
//   if (Array.isArray(aWord)) {
//     let randomPaired = aWord[Math.floor(Math.random() * words.length)];

//     lineOfPoetry += randomPaired + " ";
//     counter++;
// }

// defining a function that accepts a word corpus and a number of lines, and generates a poem accordingly.

function generatePoem(wordCorpus, numOfLines) {
  let line = "";
  intoArray(wordCorpus);
  generateWordPairs(result);
  for (let i = 0; i < numOfLines; i++) {
    line += "\n" + writeLine(dict, 5);
  }
  return line;
}
console.log(generatePoem(text, 5));
