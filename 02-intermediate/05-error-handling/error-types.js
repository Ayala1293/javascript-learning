/*
// this will give a range error because age is negative
let age = -5;

if (age < 0) {
  throw new RangeError("Age cannot be negative");
}

// this will give a range error because score is not between 0 and 100
let score = 120;

if (score < 0 || score > 100) {
  throw new RangeError("Score must be between 0 and 100");
} else {
  console.log("Score accepted");
}

// this will give a range error because score is not between 0 and 100
let score = 120;

try {
  if (score < 0 || score > 100) {
    throw new RangeError("Score must be between 0 and 100");
  }

  console.log("Score accepted");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("Checking complete");

// this will give a range error because score is not between 0 and 100
let score = 120;

try{
  if (score < 0 || score > 100) {
    throw new RangeError("Score must be between 0 and 100");
  }
}catch (error) {
  console.log(error.name);
  console.log(error.message);
}
console.log("Please enter a valid score")
*/

let score = 120;

try {
  if (score < 0 || score > 100) {
    throw new RangeError("Score must be between 0 and 100");
  } else {
    console.log("Score accepted");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);

  console.log("Please enter a valid score");
}
