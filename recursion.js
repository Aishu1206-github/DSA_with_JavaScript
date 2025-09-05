// Recursion : When function call itself
// otherwise it will get called for infinite time
// If a function call itself the there must be an end point

let counter=1;
function demo(number){    // function with definition
   if(counter > number){
      return; 
   }
   console.log("Like this video"+counter);
   counter++;
   demo(number);           // recursion function
}
demo(20);         // calling
