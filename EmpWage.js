console.log("Welcome to the employee wage programs.");
/*
UC3- Refactor the Code
to write a function
to get work hours
*/
const IS_ABSENT = 0;
const IS_PartTime = 1;
const IS_FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagePerHr = 20;
    
// using function
function getWorkingHrs(employeeCheck) {
    switch(employeeCheck) {
        case IS_PartTime:
            return PartTimeHrs; 
            console.log("Employee is HalfDay Working.") 
        
        case IS_FullTime:
            return FullTimeHrs;
            console.log("Employee is PRESENT.");
            break;
        default:
            return 0; 
            console.log("Employee is ABSENT.");       
    }
}
let employeeCheck = Math.floor(Math.random() * 10 ) % 3;
let empHrs = getWorkingHrs(employeeCheck);

// calculating the empwage and empHrs
let empWage = empHrs*EmpWagePerHr;
console.log("EmpWage: " +empWage);
console.log("EmpHrs: " +empHrs);
