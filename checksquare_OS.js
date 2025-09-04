// Checking square in another array
// arr1=[1,2,3,4]   arr2=[1,9,4,16] -- case1
// arr1=[1,2,3,2]   arr2=[1,4,4,9] -- case2 

// map1 = {1:1, 2:2, 3:1}
// map2 = {1:1, 4:2, 16:1}

function CheckSquare(array1, array2) {
    let map1={};
    let map2={};

    for(let item of array1){         //n times
        map1[item]=(map1[item] || 0) + 1; 
    }
    console.log("Map1:",map1);
    for(let item2 of array2){      // n times
        map2[item2]=(map2[item2] || 0) + 1;
    }
    console.log("Map2:",map2);
    
    for(let key1 in map1){   // n times
        console.log("key",key1);
        if(!map2[key1*key1]){
           return false;           //obj key compare in term                        of square
         }
        else if(map1[key1] !== map2[key1*key1]) {
            return false;        // value compare   
        }
    }
    return true;
}

const res= CheckSquare([1,2,3,2],[1,4,4,9]);
console.log(res);


// ⏱️ Time Complexity= O(n) linear time complexity