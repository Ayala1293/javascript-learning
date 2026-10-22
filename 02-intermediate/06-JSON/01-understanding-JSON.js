/*

const products = {
  name: "Laptop",
  price: 55000,
  inStock: true,
};

// this will give a syntax error because of the trailing comma in the JSON string
const jsonTexts = '{"name": "Laptop", "price": 65000}';

const data = JSON.parse(jsonTexts);

console.log(data.name);
console.log(data.price);

// this will give a syntax error because of the trailing comma in the JSON string
const jsonText= `{"name": "Sarah", "age": 21}`
const userData = JSON.parse(jsonText);

console.log(userData.name);
console.log(userData.age);


// this will give a syntax error because of the trailing comma in the JSON string
const product = {
  name : "Phone",
  price : 25000,
  inStock : false
}
const productPrint = JSON.stringify(product)
console.log(productPrint)

// this will give a syntax error because of the trailing comma in the JSON string
let jsonText = `{"name": "John", "age": 30,}`
 try {
  const userData = JSON.parse(jsonText);
  console.log(userData.name);
 } catch (error) {
  console.log(error.name);
  console.log(error.message);
 }
 console.log("Program continues...")



  const student = {
  name: "Amina",
  age: 20,
  score: 85
};
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
console.log(typeof studentJSON);

const restoredStudent = JSON.parse(studentJSON);
console.log(restoredStudent);
console.log(restoredStudent.name);
console.log(typeof restoredStudent);
*/

const jsonText = '{"name":"Brian","age":19,"skills":["JavaScript","SQL"]}';

const userData = JSON.parse(jsonText);

console.log(userData.name);
console.log(userData.age);
console.log(userData.skills[0]);

const userJSON = JSON.stringify(userData);
console.log(userJSON);
