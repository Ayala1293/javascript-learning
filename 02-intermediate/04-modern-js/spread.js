// Copying an array
const oldFruits = ['apple', 'banana'];
const newFruits = [...oldFruits, 'orange']; 

console.log(newFruits); // ['apple', 'banana', 'orange']

// Combining two arrays
const group1 = [1, 2];
const group2 = [3, 4];
const allTogether = [...group1, ...group2];

console.log(allTogether); // [1, 2, 3, 4]


const user = { name: 'Sam', age: 20 };

// Copying the object and adding a new property
const updatedUser = { ...user, city: 'London' };

console.log(updatedUser); // { name: 'Sam', age: 20, city: 'London' }


const car = { brand: 'Toyota', color: 'red' };

// We want to change the color to 'blue', but keep a safe copy
const updatedCar = { ...car, color: 'blue' };

console.log(car.color);        // 'red' (original is safe!)
console.log(updatedCar.color); // 'blue' (only the copy changed)