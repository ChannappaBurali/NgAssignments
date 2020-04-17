class shopKeep{
    custName:string;
    productName:string;
    price:number;
    constructor(cust:string,prod:string,price:number){
        this.custName=cust;
        this.productName=prod;
        this.price=price;
    }
//provideDiscount():number{
//return (this.price*50)/100;
//}
custDetails():void{
    console.log("Customer Name:"+this.custName+"\tProduct Name:"+this.productName+"\tActual Price:"+this.productName+"\n50% discount price:"+(this.price*50)/100);
}
}
var shop=new shopKeep("peter","shirt",1200);
shop.custDetails();