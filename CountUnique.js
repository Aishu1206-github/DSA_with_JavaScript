// Count Unique Numbers

// [1,1,2,2,3,4,4,5,6,7,8,8]    -- Input
// 8    --Output
// conditions
// i=0, j=1
// arr[i]!=arr[j]
// 1] i++
// 2] arr[i]= arr[j]

function CountUnique(array){
  if(array.length>0){
    let i=0;
    for(let j=1;j<array.length;j++){
      if(array[i]!==array[j]) {
        i++;
        array[i]= array[j];
      }
    }
    return i+1;
  }
  else{
    throw new Error("Array is Empty");
  }
}
const result = CountUnique([1,1,2,2,3,4,4,5,6,7,8,8,8,9,9,9]);
console.log(result);


// ⏱️ Time Complexity: O(n) linear