// for each
const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach(function (fruit, index) {
  // console.log(`${index}: ${fruit}`);
});

/* const numbers1 = [10, 15, 20, 25, 30, 35, 40];

numbers.forEach(function(number){
  if (number %2 === 0){
    //console.log(`${number}`)
  }
})
  */

/* const numbers = [10, 15, 20, 25, 30, 35, 40];
let count = 0;

numbers.forEach(function(number){
  if(number %2 === 0){
    count ++
  }
})
console.log(count)
*/

/*
const users = [
  { name: "Mark", age: 31 },
  { name: "Brian", age: 24 },
  { name: "Kevin", age: 28 },
  { name: "James", age: 35 }
];


users.forEach(function(user){
  if(user.age >= 30){
    console.log(`${user.name}`)
  }
})

*/

/*
const numbers = [5, 10, 15, 20];

const newArray= numbers.map(function(number){
  return number*2;
})

console.log(newArray)  

const names = ["mark", "brian", "kevin", "james"];

const newName = names.map(function(name){
  return name.toUpperCase();
})
console.log(newName)



const users = [
  { name: "Mark", age: 31 },
  { name: "Brian", age: 24 },
  { name: "Kevin", age: 28 },
  { name: "James", age: 35 }
];

const newAge = users.map(function(user){
  return {
    name : user.name,
    age: user.age +1,
  }
})

console.log(newAge)



const products = [
  { name: "Laptop", price: 80000 },
  { name: "Phone", price: 30000 },
  { name: "Headphones", price: 5000 }
];


const discount = products.map(function(product){
  return {
    name : product.name,
    price: product.price - (product.price * 0.1),
  }
})

console.log(discount)




const numbers = [5, 12, 18, 21, 30, 33, 40];
const newNum = numbers.filter(function(number){
  return number > 20;
})

console.log(`${newNum}`)




const users = [
  { name: "Mark", age: 31 },
  { name: "Brian", age: 24 },
  { name: "Kevin", age: 28 },
  { name: "James", age: 35 }
];

const newUsers = users.filter(function(user){
return user.age >= 30;

console.log(newUsers)





const products = [
  { name: "Laptop", price: 80000, category: "Electronics" },
  { name: "Phone", price: 30000, category: "Electronics" },
  { name: "Shoes", price: 5000, category: "Fashion" },
  { name: "Headphones", price: 5000, category: "Electronics" },
  { name: "Jacket", price: 8000, category: "Fashion" }
];


const items = products.filter(function(product){
  return   (product. price > 10000 && product.category === "Electronics")
})

console.log(items)






const users = [
  { name: "Mark", age: 31, active: true },
  { name: "Brian", age: 24, active: false },
  { name: "Kevin", age: 28, active: true },
  { name: "James", age: 35, active: true },
  { name: "David", age: 42, active: false }
];



const newUsers = users.filter(function(user){
  return (user.age >= 30 && user.active === true)
})

console.log(newUsers)


const numbers = [5, 12, 18, 21, 30, 33, 40];

const newNum = numbers.find(function(number){
  return number >20 ;
})
console.log(newNum)


const users = [
  { id: 1, name: "Mark", age: 31 },
  { id: 2, name: "Brian", age: 24 },
  { id: 3, name: "Kevin", age: 28 },
  { id: 4, name: "James", age: 35 }
];

const newUser = users.find(function(user){
  return user.id === 3
})

console.log(newUser)




const products = [
  { id: 101, name: "Laptop", stock: 5 },
  { id: 102, name: "Phone", stock: 0 },
  { id: 103, name: "Headphones", stock: 8 },
  { id: 104, name: "Keyboard", stock: 3 }
];

const newProduct = products.find(function(product){
  return product.stock === 0;
})

console.log(newProduct)

const numbers = [5, 12, 18, 21, 30]; 

const newNumber = numbers.some(function(number){
  return number > 25
})
console.log(newNumber)

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Headphones", stock: 8 },
  { name: "Keyboard", stock: 3 }
];

const newProduct = products.some(function(product){
  return product.stock < 1;
})
console.log(newProduct)

const numbers = [10, 20, 30, 40, 50];
const newNumber = numbers.every(function(number){
  return number >5 ;
})
console.log(newNumber)

const numbers = [10, 20, 30, 40];
let total =0;
const newNumber = numbers.forEach(function(number){
  total = total + number;
})

console.log(total)


const numbers = [5, 10, 15];
const newNumber = numbers.reduce(function(total, number){
  return number + total;
},0);

console.log(newNumber)

const numbers = [10, 15, 20, 25, 30];

const newNumber = numbers.reduce(function(count, number){
   if (number %2 === 0){
    count ++
   } return count
},0)

console.log(newNumber)

const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 30000 },
    { name: "Headphones", price: 5000 }
];

const newProducts = products.reduce(function(total, product){
  return product.price + total;
  
},0)
console.log(newProducts)

*/

