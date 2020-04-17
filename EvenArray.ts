class arClass{
num:number[]=[12,3,2,1,7,6];
sortedArr=[];
tmp:number;
getEvenAndSort(){

    for (let x = 0; x < this.num.length-1; x++) {  
        for (let y = 0; y < this.num.length - x - 1; y++) {  
         if (this.num[y] > this.num[y + 1]) {         
          this.tmp = this.num[y];  
          this.num[y] = this.num[y + 1];  
          this.num[y + 1] = this.tmp;  
         }  
        }  
       } 
       for (let x = 0; x < this.num.length; x++) {  
        if(this.num[x]%2==0){
            this.sortedArr.push(this.num[x]);
        }
       }
       console.log("Sorted Even Array elements:"+this.sortedArr);
}
}
var ar=new arClass();
ar.getEvenAndSort();