function reverse(word) {
  // 'abc' => 'cba'
  // const wordArray = word.split("");
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse(word);

  // if the input is the same as the reversed input
  // if (word === reversedWord) {
  //   return true;
  // } else {
  //   return false;

  return word === reversedWord
}

/* 
  Pseudocode:

  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false

*/

/*
  Written explanation of my solution:

function isPalindrome takes in a word, and that word gets passed into the reverse function nested inside

function reverse takes that word and splits it, reverses it, and rejoins it

the new, reversed version of the word is saved into the variable reversedWord inside of isPalindrome

finally, the original word is compared to the reversed version using strict equality

if the original is the same as the reversed, it will return true

otherewise, it will return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("code"));
}

module.exports = isPalindrome;
