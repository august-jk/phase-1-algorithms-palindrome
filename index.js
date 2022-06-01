function isPalindrome(word) {
  // Write your algorithm here
  if(reverse(word) === word) {
    return true;
  }
  else{
    return false;
  }
}
function reverse(word) {
  return word.split('').reverse().join('');
}
/* 
  Add your pseudocode here
-iterate over string 
check if string reads same forward and backward

probably neeed .split to seperate string
.split('')
how to reverse string??
.reverse()
.join('')
.join() returns seperated by comma
with quotes returns correct

  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
