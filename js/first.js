const user = {
    name: "Tom",
    age: 24,
    hobby: "programming",
    premium: true,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

Object.entries(user).forEach((el) => {
    console.log(`${el[0]}: ${el[1]}`);
});