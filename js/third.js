const findBestEmployee = employees => 
    Object.keys(employees)[
        Object.values(employees).indexOf(Math.max(...Object.values(employees)))
    ];

const employees = {
    "Tom": 32,
    "John": 92,
    "Lily": 24,
    "Mike": 84,
}

console.log(findBestEmployee(employees));