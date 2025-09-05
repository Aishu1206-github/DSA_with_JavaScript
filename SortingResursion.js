// Sorting using Recursive function
// [2,3,1,4]   -- By default case
// achieve this sorting technique using recursion method [1,2,3,4]
// first no. less than second no. then move on next but first no. is greater than second no. then then swap those no.
// [2,1,3,4]   -- case 1
// [1,2,3,4]   -- final

let myarray=[2,1,3,4,8,6,5,7];
let mynewList=[];
let i=0;
let j=1;
function isSorted(array){
   for(let i=0; i<array.length;i++){
      if(array[i]> array[i+1]) {
          return false;
      } 
   }
   return true;
}



function sortCheck(array) {
  if(isSorted(array)){
     mynewList = array;
     return; 
  }
  else if(array[i] < array[j]) {
    i++;
    j++;
    sortCheck(array);    // recursion
  }
  else{   // array[i] > array[j]
    [array[i],array[j]] = [array[j],array[i]];
    i=0;
    j=1;
    sortCheck(array);    // recursion
  }
}

sortCheck(myarray);
console.log(mynewList);