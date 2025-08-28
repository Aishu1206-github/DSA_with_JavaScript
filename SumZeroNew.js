// Another Soln
// Checking sum Zero 
// [-5,-4,-3,-2,0,2,4,6,8]  -- Input
// [-4,4]  -- Output

function FindSumPair(array) {
  let left =0;
  let right =array.length-1; 

  while(left < right) {
    sum = array[left] + array[right];
    if(sum === 0){
      return [array[left], array[right]];
    }else if(sum>0) {
      right--;
    }
    else {
      left++;
    }
  }
}

const result = FindSumPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);



// first if called as a left and last one is about a right
// left is less than right then do sum on that left and right
// If sum is Zero lucklyly then print that nos.
// If sum is greater than zero then decrease right by one (right--)
// IF sum if less than zero them increase left by one (left++)



// Solution (Two-Pointer Approach):
// Explanation:

// Place pointers at the start (left) and end (right).

// If sum = 0 → we found the pair ✅

// If sum > 0 → move right pointer left.

// If sum < 0 → move left pointer right.

// ⏱️ Time Complexity: O(n)