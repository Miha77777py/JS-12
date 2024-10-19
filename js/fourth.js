const countTotalSalary = employees => 
    Object.values(employees).reduce((acc, el) => acc + el, 0);

const employees = {
    "Tom": 32000,
    "John": 92000,
    "Lily": 240000,
    "Mike": 84000,
}

console.log(countTotalSalary(employees));