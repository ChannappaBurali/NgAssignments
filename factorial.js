var factoialNum = /** @class */ (function () {
    function factoialNum() {
    }
    //Factorial of Number
    factoialNum.prototype.findFun = function () {
        var num = 5;
        var factorial = 1;
        while (num >= 1) {
            factorial = factorial * num;
            num--;
        }
        console.log("The factorial  is " + factorial);
    };
    return factoialNum;
}());
var fact = new factoialNum();
console.log(fact.findFun());
