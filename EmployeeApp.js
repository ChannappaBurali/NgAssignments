var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, color, dob) {
        this.name = name;
        this.colors = color;
        this.DateOfBirth = dob;
    }
    Object.defineProperty(Employee.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getColor", {
        get: function () {
            return this.colors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setColor", {
        set: function (value) {
            this.colors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getDateofBirth", {
        get: function () {
            return this.DateOfBirth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setDateofBirth", {
        set: function (value) {
            this.DateOfBirth = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var AdhocEmployee = /** @class */ (function (_super) {
    __extends(AdhocEmployee, _super);
    function AdhocEmployee(hrs, name, color, dob) {
        var _this = _super.call(this, name, color, dob) || this;
        _this.hoursWorked = hrs;
        return _this;
    }
    Object.defineProperty(AdhocEmployee.prototype, "getHoursWorked", {
        get: function () {
            return this.hoursWorked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdhocEmployee.prototype, "setHoursWorked", {
        set: function (value) {
            this.hoursWorked = value;
        },
        enumerable: true,
        configurable: true
    });
    return AdhocEmployee;
}(Employee));
var empDetails = new AdhocEmployee(22, "peter", "white", "2015-04-21");
//var emp=new Employee("peter","white","2015-04-21");
console.log(empDetails.getName);
console.log(empDetails.getColor);
console.log(empDetails.getDateofBirth);
console.log(empDetails.getHoursWorked);
empDetails.setName = "arohi";
empDetails.setColor = "white";
empDetails.setDateofBirth = "21-042015";
empDetails.setHoursWorked = 45;
