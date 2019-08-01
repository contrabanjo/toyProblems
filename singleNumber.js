// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//input: an array with just one element that is not a duplicate
//output: the non-duplicate element
//notes: all elements in the examples are numbers. array will not be empty. array must be at least 3 elements long (1 non-duplicate, at least 1 pair of duplicates).
//method:
//store first element in a variable called 'nonDup.'
//iterate thru the array, keeping track both of j, the index of the current value of nonDup, and i, the current position in the array.
//check nonDup against array[i]. if it matches, change value of 'nonDup' to j++. continue iterating from j+1.
//return nonDup

var singleNumber = function(nums) {
  let nonDup = nums[0]
  let duplicates = []
  let j = 0;
  for (let i = 1; i < nums.length; i++){
    if (nums[i]===nonDup){
      duplicates.push(nonDup);
      console.log('was not', nonDup);
      j++;
      nonDup=nums[j]
      while(duplicates.indexOf(nonDup)!=-1){
        j++;
        nonDup=nums[j];
      }
      console.log('new nonDup', nonDup, 'current position', j);
      i = j;
    }
  }
  return nonDup;
};

console.log('for input: [4,1,2,1,2] , result is', singleNumber([4,1,2,1,2]));
console.log('for input: [2,2,1] , result is', singleNumber([2,2,1]));
console.log('for input: [1,2,4,1,2] , result is', singleNumber([1,2,4,1,2]));
console.log('for input: [2,2,1,4,3,3,1] , result is', singleNumber([2,2,1,4,3,3,1]));