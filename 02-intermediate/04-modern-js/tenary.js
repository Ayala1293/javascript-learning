//Ternary Operator

const age = 20;
const message = age >= 18 ? "You can vote!" : "Too young to vote.";

console.log(message); // "You can vote!"

//Using Ternary Expressions Inside Variables
const isRaining = true;

console.log(isRaining ? "Take an umbrella ☔" : "Enjoy the sun ☀️");
// Output: "Take an umbrella ☔"

//Nested/Combined Conditions

const score = 85;

const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

console.log(grade); // "B"




//challange

const isLoggedin = true;

const message1 = isLoggedin ? "Welcome back, user": "PLease Log in to continue";
console.log(message1)