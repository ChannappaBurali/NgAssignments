class Employee{
    name:string;
    colors:string;
    DateOfBirth:string;
    constructor(name:string,color:string,dob:string){
        this.name=name;
        this.colors=color;
        this.DateOfBirth=dob;
    }
    get getName(): string {
        return this.name;
    }
    set setName(value: string) {
        this.name = value;
    }
    get getColor(): string {
        return this.colors;
    }
    set setColor(value: string) {
        this.colors = value;
    }
    get getDateofBirth(): string {
        return this.DateOfBirth;
    }
    set setDateofBirth(value: string) {
        this.DateOfBirth = value;
    }
}
class AdhocEmployee extends Employee{
hoursWorked:number;
constructor(hrs:number,name:string,color:string,dob:string) {
super(name,color,dob);
this.hoursWorked=hrs;
}
get getHoursWorked():number{
    return this.hoursWorked;
}
set setHoursWorked(value:number){
    this.hoursWorked=value;
}
}
var empDetails=new AdhocEmployee(22,"peter","white","2015-04-21");
console.log(empDetails.getName);
console.log(empDetails.getColor);
console.log(empDetails.getDateofBirth);
console.log(empDetails.getHoursWorked);
empDetails.setName="arohi";
empDetails.setColor="white";
empDetails.setDateofBirth="21-042015";
empDetails.setHoursWorked=45;
