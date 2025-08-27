
//Problem 1
// Checking first Pair where sum is Zero 
//[-5,-4,-3,-2,0,2,4,6,8]  -- Input
//[?,?]   -- Output                                   


function getSumPairZero(array) {
  for(let number of array) {
    for(let j=1; j<array.length; j++) {
        if(number + array[j] === 0) {
          return [number,array[j]];
        }
    }

  }
}

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);



// result = [-4,4]
// Time Complexity = O(n2) quadratic time complexity
// (nested loop): checks every possible pair → O(n²).