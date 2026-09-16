/*
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let num = 0 ; num < fruits.length ; num++ ){
  console.log(fruits[num]);
} 

let numbers = [10, 15, 20, 25, 30, 35];

for (let num = 0; num < numbers.length; num++){
  if(numbers[num]%2 === 0){
    console.log(numbers[num])
  }
}


let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  
  total = total + numbers[i];
  
}console.log(total);

let numbers = [10, 15, 20, 25, 30, 35];

let total =0 ;
 for (let i = 0; i < numbers.length; i++)
  if(numbers[i] % 2 === 0){
    total += numbers[i];
  } console.log(total);


  let numbers = [5, 12, 7, 20, 3, 18];

let total = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    total += numbers[i];
  }
}
console.log(total);

let numbers = [4, 15, 22, 7, 30, 11];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    total += numbers[i];
  }
}
console.log(total);


let numbers = [5, 12, 8, 21, 30, 7];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
console.log(count);

let numbers = [5, 12, 8, 21, 30, 7, 16];
let count =0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count++;
  }
}
console.log(count);


let numbers = [5, 12, 8, 21, 30, 7, 16, 25];
total = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0 && numbers[i] > 10) {
    total ++
  }
}
console.log(total);

let numbers = [12, 5, 27, 9, 34, 18];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);



let numbers = [12, 5, 27, 9, 34, 18];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(smallest);


let numbers = [12, 5, 27, 9, 34, 18];

let smallest = numbers[0];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
   if (numbers[i] < smallest) {
    smallest = numbers[i];
  }  if ( numbers[i] > largest) {
    largest = numbers[i];
}
}
 
console.log(smallest);
console.log(largest);

let numbers = [10, 25, 7, 42, 18, 30];
let value;
let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 4) {
    value = numbers[i];
    found = true;
  }
   
}
if (found) {
      console.log(`${value} was found`);
    } else {
      console.log("Value not found");
    }

  let numbers = [10, 25, 10, 42, 10, 18, 10];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 10) {
    count++;
  }
}
console.log(count);  
*/

