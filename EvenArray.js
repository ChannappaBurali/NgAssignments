var arClass = /** @class */ (function () {
    function arClass() {
        this.num = [12, 3, 2, 1, 7, 6];
        this.sortedArr = [];
    }
    arClass.prototype.getEvenAndSort = function () {
        for (var x = 0; x < this.num.length - 1; x++) {
            for (var y = 0; y < this.num.length - x - 1; y++) {
                if (this.num[y] > this.num[y + 1]) {
                    this.tmp = this.num[y];
                    this.num[y] = this.num[y + 1];
                    this.num[y + 1] = this.tmp;
                }
            }
        }
        for (var x = 0; x < this.num.length; x++) {
            if (this.num[x] % 2 == 0) {
                this.sortedArr.push(this.num[x]);
            }
        }
        console.log("Sorted Even Array elements:" + this.sortedArr);
    };
    return arClass;
}());
var ar = new arClass();
ar.getEvenAndSort();
