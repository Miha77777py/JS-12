const countProps = obj => Object.keys(obj).length;

console.log(countProps({
    name: "John",
    age: 32,
    hobby: "reading",
    isActive: false,
}));