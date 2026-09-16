/*
// function with a parameter 
function greeting (name){
  console.log("Hello, " + name);
}

greeting("Alice");
greeting("Mark");
greeting("John");

// function with multiple parameters 

function greeting2 (name, age){
  console.log(`My name is ${name} and I am ${age} years old.`);
}

greeting2("Alice", 25);
greeting2("Mark", 30);
greeting2("John", 35);


// function with a return value
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 10);
console.log (result); 


// functions plus conditions 

function checkAge(name, age){
  if(age >= 18){
    console.log(`Hello ${name}, you are an adult.`);
  }  else{
    console.log(`Hello ${name}, you are a child.`);
  }
}

checkAge("Alice", 25);
checkAge("Mark", 15);
checkAge("John", 30);




function checkNumber(num){
  if(num %2 === 0){
    return "even";
  }
  else{
    return "odd";
  }
}

let result1 = checkNumber(5);
console.log(result1);
let result2 = checkNumber(10);
console.log(result2);
let result3 = checkNumber(15);
console.log(result3);



function canEnter(age){
  if(age >= 18){
    return "can enter";
  }
  else{
    return "cannot enter";
  }
}
let status = canEnter(20);
console.log (status);


function calculateDiscount(price) {
  if(price >= 1000){
    return price -(price * 0.1);
  } else {
    return price;
  }
}

let discount1 = calculateDiscount(1800);
console.log(discount1);
let discount2 = calculateDiscount(800);
console.log(discount2);

*/





function calculateGrade(score) {

if (score < 0 || score > 100) {
    return "Invalid score";
  }
  else if (score >= 80 ) {
    return "A";  
  } 
  else if (score >= 70 && score <= 79){
    return "B";
  }
  else if (score >= 60 && score <= 69){
    return "C";
  }
  else if (score >= 50 && score <= 59){
    return "D";
  }
  else{
    return "F";
  }
}
 let grade = calculateGrade(102);
 console.log(grade);