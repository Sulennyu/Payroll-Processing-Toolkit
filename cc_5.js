let employees = [
    {name:"John",hourlyRate:25.00,hoursWorked:25},
    {name:"Sam",hourlyRate:20.00,hoursWorked:47},
    {name:"Belle",hourlyRate:17.00,hoursWorked:52},
    {name:"Arthur",hourlyRate:15.00,hoursWorked:27}

];

// Step 3: calculateBasePay hoursWorked <= 40 hrs

function calculateBasePay (rate,hours) {
 if (hours <= 40) {
    return hours * rate;
 } else {
    return 40 * rate;
 }
}


// Step 4: calculateOvertimePay hoursWorked > 40hrs

function calculateOvertimePay (rate,hours) {
if (hours > 40) {
    const overtimeHours = hours-40;
    return overtimeHours * rate * 1.5;
}
    return 0;
}


//Step 5: calculateTaxes (grossPay) that deducts 15% tax

function calculateTaxes (grossPay) {
    const taxAmount = (grossPay * 0.15)
    return grossPay - (taxAmount);
}


//Step 6: ProcessPayroll (returns an object)
 
function processPayroll (employee) {
    const {name, hourlyRate, hoursWorked} = employee;
    const basePay = calculateBasePay(hourlyRate,hoursWorked);
    const overtimePay = calculateOvertimePay(hourlyRate,hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);
    return {
        name: name, 
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay : grossPay,
        netPay : netPay
    };
}



//Step 7: Loop Through Employee Array

employees.forEach(employee =>{console.log(processPayroll(employee))});