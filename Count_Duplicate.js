// count duplicate records
// arr=[1,1,2,2,2,3,4,5,5,5,5,6,6,7,7,8]
// count each values 
// map1 = {1:2, 2:3, 3:1, 4:1, 5:4, 6:2, 7:1, 8:1}

function countDup(array){
  let map={};
  for(let item of array){         //n times
        map[item]=(map[item] || 0) + 1; 
    }
    console.log("Map:",map);
}
const res= countDup([1,1,2,2,2,3,4,5,5,5,5,6,6,7,7,8]);
console.log(res);