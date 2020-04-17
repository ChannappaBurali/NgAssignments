class primeNum
{
funPrime():void{
    let isPrime:boolean = true,i,j; 
        //Calculate and display the Prime number  
        console.log("Prime Numbers are : ");  
        for (i = 2; i <= 100; i++) {  
            for ( j = 2; j <= 100; j++) {  
                if (i != j && i % j == 0) {  
                    isPrime = false;  
                    break;  
                }  
            }  
            if (isPrime) {  
                console.log("\t" + i);  
            }  
            isPrime = true;  
        }  
    }
}
var pm=new primeNum();
console.log(pm.funPrime());