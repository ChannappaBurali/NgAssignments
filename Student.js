var student = /** @class */ (function () {
    function student(roll, name) {
        var _this = this;
        this.display = function () { return console.log("Roll Number:" + _this.rollnum + "\tStudent Name:" + _this.name); };
        this.rollnum = roll;
        this.name = name;
    }
    return student;
}());
var st = new student('11m2020', 'Ram');
st.display();
