
class factoialNum
{
//Factorial of Number
findFun():void{
let num = 5; 
var factorial = 1; 
while (num >= 1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is " + factorial);
}
}
var fact=new factoialNum();
console.log(fact.findFun());