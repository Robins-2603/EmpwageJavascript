console.log("Welcome to the employee wage programs.");
/*
UC4- Calculate Wages till a condition of total
working hours of 160 or max days of 20 is
reached for a month
*/
const IS_ABSENT = 0;
const IS_PartTime = 1;
const IS_FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagePerHr = 20;
const maxWorkingDays = 20;
const maxWorkingHrs = 160;
    
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
   introducing the while loop by replacing for loop for calculating Empwage
   here we put employeecheck in the loop
   as well as adding the hours to get totalEmpHrs and totalWorkingDays also
   */

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= maxWorkingHrs && totalWorkingDays <= maxWorkingDays){ 
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 ) % 3;
    totalEmpHrs += getWorkingHrs(employeeCheck); 
}

// calculating the empwage and empHrs and here we printing totalWorkingDays as well
let empWage = totalEmpHrs*EmpWagePerHr;
console.log("EmpWage: " +empWage);
console.log("Total EmpHrs: " +totalEmpHrs);
console.log("Total Working Days: " +totalWorkingDays);
