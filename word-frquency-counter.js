// Problem 1: Word Frequency Counter
// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.

// Rules:
// Ignore case differences
// Ignore extra spaces

// Test case 1
// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

// Test case 2
// Input:  " Hello hello HELLO "
// Output: { hello: 3 }










function wordFrequencyCounter(){

    let object = {};
    let wordsWithoutSpace = words.trim();
    let words2 = wordsWithoutSpace.split(' ');
    for(const word of words2){
        const wordLowerCase = word.toLowerCase();
        if(object.hasOwnProperty(wordLowerCase)){
            object[wordLowerCase]++;
        }
        else{
            object[wordLowerCase] = 1;
        }
    }
    return object;
  
}


let words =  "I love JS and I love coding and JS is fun   ";
const ans = (wordFrequencyCounter(words));
console.log(ans);



