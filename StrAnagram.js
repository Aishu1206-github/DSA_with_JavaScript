// String Anagram 
// 'hello' -->  'llheo'   length check for both strings   arrangments does not matter...length should be same in both side.

// {h:1, e:1, l:2, o:1}      {h:0, e:0, l:0, o:0}

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
      return false;
  }
  let counter={};
  for(let letter of str1) {
    counter[letter] = (counter[letter] || 0)+1;
    console.log(counter[letter]);  
  }
   console.log(counter);
  for(let items of str2) {
    if(!counter[items]){
      return false;
    }
    counter[items]-=1;
  }
return true;
} 
const check = isAnagram('hello','llheo');
console.log(check);