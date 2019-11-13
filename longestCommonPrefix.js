// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  //input: array of strings, variable lengths
  //output: string representing the longest common prefix of all elements in the array
  //edge cases: weird prefixes?
  //method: iterate thru all strings at once
  //and stop once the current letter doesn't equal all the others. when matches are found, add them to string 'prefix'
  //return 'prefix'
  let prefix = '';
  let testWord = strs[0] || ''
  for (let i = 0; i < testWord.length; i++){
    let testLetter = strs[0][i];
    for (let j = 0; j < strs.length; j++){
      if (strs[j][i] !== testLetter){
        return prefix;
      }
    }
    prefix += testLetter;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))