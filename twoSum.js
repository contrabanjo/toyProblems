// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  //input:
  //-an array of integers, positive or negative, for which only two elements will add up to given target
  //-a target number, assume can be positive or negative
  //output: the INDICES in the array where the two elements which add up to the given target can be found
  //edge cases: only two numbers in array, only one number in array(?), empty array(?)
  //edge cases: both elements have same value
  //method:
  //create two vars, representing two indices of array
  //add together two elements at those indices and check against target
  //if they meet target, return indices
  //if not, add one to beginning index and subtract one from second index, and check again
  let first = 0;
  let second = 1;
  for (second; second< nums.length; second++){
    for (first; first < nums.length; first++){
      if (first === second) first++
      if (nums[first]+nums[second]=== target) return [first, second];
    }
    first = 0;
  }
  return 'nothing found'
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,7,11,15], 26));
console.log(twoSum([2,5, 5, 11,15], 10));
console.log(twoSum([2, 0], 2));
