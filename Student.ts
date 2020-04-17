class student{
rollnum: string;
name: string;
   constructor(roll: string, name: string) {
    this.rollnum = roll;
    this.name = name;
}
 display=()=>console.log("Roll Number:"+ this.rollnum + "\tStudent Name:"+ this.name); 
}
let st = new student('11m2020', 'Ram');
st.display();