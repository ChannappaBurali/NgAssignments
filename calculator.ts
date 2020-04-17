class calculatorNum{
num1:number; 
num2:number;
num3:number=0;
calculatorNum(a:number, b:number){
this.num1=a;this.num2=b;
}
funAdd():void{
    this.num3=this.num1 + this.num2;
    console.log(`Addition of ${this.num1} and ${this.num2} is : ${this.num3}`)
}

funDelete():void{
    this.num3=this.num1 - this.num2;
    console.log(`Subtraction of ${this.num1} and ${this.num2} is : ${this.num3}`)
}

funMul():void{
    this.num3=this.num1 * this.num2;
    console.log(`Multiplication of ${this.num1} and ${this.num2} is : ${this.num3}`)
}
funDiv():void{
    this.num3=this.num1 / this.num2;
    console.log(`Division of ${this.num1} and ${this.num2} is : ${this.num3}`)
}
}
var cal=new calculatorNum();
cal.calculatorNum(20,10);
cal.funAdd();
cal.funDelete();
cal.funMul();
cal.funDiv();