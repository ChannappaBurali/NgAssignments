var shopKeep = /** @class */ (function () {
    function shopKeep(cust, prod, price) {
        this.custName = cust;
        this.productName = prod;
        this.price = price;
    }
    //provideDiscount():number{
    //return (this.price*50)/100;
    //}
    shopKeep.prototype.custDetails = function () {
        console.log("Customer Name:" + this.custName + "\tProduct Name:" + this.productName + "\tActual Price:" + this.productName + "\n50% discount price:" + (this.price * 50) / 100);
    };
    return shopKeep;
}());
var shop = new shopKeep("peter", "shirt", 1200);
shop.custDetails();
