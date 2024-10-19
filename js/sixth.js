const calculateTotalPrice = (arr, productName) => 
    arr.find((el) => el.name === productName).price *
        arr.find((el) => el.name === productName).quantity;

const arr = [
    {
        name: "Bread",
        price: 40,
        quantity: 120,
    },
    {
        name: "Milk",
        price: 62,
        quantity: 200,
    },
    {
        name: "Crisps",
        price: 72,
        quantity: 350,
    },
];

console.log(calculateTotalPrice(arr, "Bread"));
console.log(calculateTotalPrice(arr, "Milk"));
console.log(calculateTotalPrice(arr, "Crisps"));