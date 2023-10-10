function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    if (word[i] !== word[j]) {
      return false
    }
  }
  return true
}
isPalindrome("boom")

/* 
  Pseudocode
  - make a for loop to iterate on half of the word 
  - declare a variable j to iterate from other side of word but from the end 
  - check if word i and word j are equal 
*/

/*
  explanation of solution:
  - made a foor loop for the first half of the word and inside created a variable to take other side of the 
  word but in reverse to see if the first and last char doesn't match return false if the match the condition 
  won't be success and it will return true 
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
  console.log("=>", isPalindrome("anna"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;
