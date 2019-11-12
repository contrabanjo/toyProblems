/**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var moveZeroes = function(nums) {
   //input: an array that contains at least one zero(?);
   //output: same array, modified so that all zero elements (if any) are at the end;
   //edge cases: empty array (return array); array with no zeroes (nothing gets moved), array is all zeroes (nothing gets moved);
   //edge case: TWO OR MORE LEADING ZEROES! since the array is modified in place, it is possible for a zero after a zero to get skipped
   //method: store original length of array. iterate thru array once, checking if each element is a zero. if it is a zero, splice array, removing zero. only move forward if element is not a zero.
   //at the end, add zeroes to end of array until length === originalLength
   //important: zeroes return false in javascript

  let originalLength = nums.length;
  for(let i = 0; i < nums.length; nums[i]===0 ? i : i++){
    if (nums[i]===0) {
      console.log('zero spliced at ', i);
      nums.splice(i, 1);
    }
    console.log('nums = ', nums);
  }
  let nZeros = originalLength - nums.length;
  for (i = 0; i < nZeros; i++){
    nums.push(0);
  }
  return nums;
};

console.log('Input: [1,0,0,0,3,12]', 'Expected Output: [1,3,12,0,0,0]', 'Actual Output:', moveZeroes([1,0,0,0,3,12]));
console.log('Input: [0,0,1]', 'Expected Output: [1,0,0]', 'Actual Output:', moveZeroes([0,0,1]));
