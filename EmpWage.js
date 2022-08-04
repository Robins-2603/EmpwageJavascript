console.log("Welcome to the employee wage programs.");
/*
UC4- Calculating Wages for a Month 
assuming 20 Working Days in a month
*/
const IS_ABSENT = 0;
const IS_PartTime = 1;
const IS_FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagePerHr = 20;
const totalWorkingDays = 20;
    
// using function
function getWorkingHrs(employeeCheck) {
    switch(employeeCheck) {
        case IS_PartTime:
            return PartTimeHrs; 
            //console.log("Employee is HalfDay Working.") 
        
        case IS_FullTime:
            return FullTimeHrs;
            //console.log("Employee is PRESENT.");
            
        default:
            return 0; 
            //console.log("Employee is ABSENT.");       
    }
}
   /* 
   introducing the for loop for calculating Empwage
   here we put employeecheck in the loop
   as well as adding the hours to get totalEmpHrs
   */

let totalEmpHrs = 0;
for(let day = 0; day<totalWorkingDays; day++){
    let employeeCheck = Math.floor(Math.random() * 10 ) % 3;
    totalEmpHrs += getWorkingHrs(employeeCheck); 
}

// calculating the empwage and empHrs
let empWage = totalEmpHrs*EmpWagePerHr;
console.log("EmpWage: " +empWage);
console.log("Total EmpHrs: " +totalEmpHrs);
