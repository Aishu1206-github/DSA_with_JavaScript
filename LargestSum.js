// Count Largest Sum OF consecutive digits

// [1,2,3,4,3,5,4,6,7,8]   --- Total elements -10
// num = 4
// Largest Sum = 25

//conditions
// num > array  -- error msg
// 10 - 4 + 1  =  7  only 7 times loops will be execute

function FindLargestSum(array, num)
{
    if(num > array) {
      throw new Error("Num is not greater than array");
    }
    else {
      let max =0;
      for(let i=0; i< array.length - num + 1; i++) {
        let temp=0;
        for(let j=0;j<num; j++) {
            temp+= array[i+j];
        }
        if(temp>max){
          max=temp;
        }
       }
       return max;
    }
}

const result = FindLargestSum([1,2,3,4,3,5,4,6,7,8], 4);
console.log("Result:",result);
