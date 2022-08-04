console.log("Welcome to the employee wage programs.");
/*
UC1-checking emp status
Ability to check Employee is present or absent by using Random Function
*/
// updated the code according to UC2
const IS_ABSENT = 0;
const IS_PartTime = 1;
const IS_FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagePerHr = 20;
    let employeeCheck = Math.floor(Math.random() * 10 ) % 3; 
   // console.log(employeeCheck);

    // if(employeeCheck == IS_ABSENT){
    //     console.log("Employee is ABSENT.");
    // }if(employeeCheck == IS_FullTime){
    //     console.log("Employee is PRESENT.");
    // }else{
    //     console.log("Employee is HalfDay Working.")
    // }


//UC_2 Switch case


let empHrs = 0;
// let empCheck = Math.floor(Math.random()*10)%3;
switch(employeeCheck) {
    case IS_PartTime:
        empHrs = PartTimeHrs; 
        console.log("Employee is HalfDay Working.") 
        break;
    case IS_FullTime:
        empHrs = FullTimeHrs;
        console.log("Employee is PRESENT.");
        break;
    default:
        empHrs = 0; 
        console.log("Employee is ABSENT.");       
}

// calculating the empwage
let empWage = empHrs*EmpWagePerHr;
console.log("EmpWage: " +empWage);
