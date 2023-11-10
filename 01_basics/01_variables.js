/* to declare variables we have 4 ways => let | const | var | nothing
   const for declaring constant values that can't be changed in future
   var V/S let => var k paas scope ki smjh nhi h use apna daayra nhi pta hota | let knows its scope
   REMEMBER! 
   Avoid using var | use let 

   if just declared any varible not initialised with any value => prints undefined
   & if its values doesn't exist => prints not-defined

   console.log(abc)=> to print specific variables & values | or for concatenation
   console.table([abc,xyz,pqr])=> prints proper tables index-wise

   COMMENTS k 2 ways => 
   /* for multi-lines purpose */ 
   // for single-line purpose




const rollno = 12
let name = "ram"
var class_name = 2
house = "yellow"
let subject;

console.log(rollno); //prints 12

// but if ...
// rollno = 15 
// confirm.log(rollno)
// throws error! since trying to change value of const!
//not possible

console.table([name,class_name,house,subject]) //prints table index-wise