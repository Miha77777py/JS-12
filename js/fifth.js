const getAllPropValues = (arr, prop) => arr.map(el => el[prop]);

const arr = [
    {
        name: "Tom",
        age: 25,
        occupation: "web-developer",
    },
    {
        name: "John",
        age: 43,
        occupation: "full-stack",
    },
    {
        name: "Lily",
        age: 19,
        occupation: "web-designer",
    },
    {
        name: "Ben",
        age: 31,
        occupation: "backend-developer",
    },
];

console.log(getAllPropValues(arr, "occupation"));