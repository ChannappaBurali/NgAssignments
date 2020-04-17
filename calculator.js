var calculatorNum = /** @class */ (function () {
    function calculatorNum() {
        this.num3 = 0;
    }
    calculatorNum.prototype.calculatorNum = function (a, b) {
        this.num1 = a;
        this.num2 = b;
    };
    calculatorNum.prototype.funAdd = function () {
        this.num3 = this.num1 + this.num2;
        console.log("Addition of " + this.num1 + " and " + this.num2 + " is : " + this.num3);
    };
    calculatorNum.prototype.funDelete = function () {
        this.num3 = this.num1 - this.num2;
        console.log("Subtraction of " + this.num1 + " and " + this.num2 + " is : " + this.num3);
    };
    calculatorNum.prototype.funMul = function () {
        this.num3 = this.num1 * this.num2;
        console.log("Multiplication of " + this.num1 + " and " + this.num2 + " is : " + this.num3);
    };
    calculatorNum.prototype.funDiv = function () {
        this.num3 = this.num1 / this.num2;
        console.log("Division of " + this.num1 + " and " + this.num2 + " is : " + this.num3);
    };
    return calculatorNum;
}());
var cal = new calculatorNum();
cal.calculatorNum(20, 10);
cal.funAdd();
cal.funDelete();
cal.funMul();
cal.funDiv();
