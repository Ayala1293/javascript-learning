//throwing error from functions
function checkScore(score) {
  if (score < 0 || score > 100) {
    throw new RangeError("Score must be between 0 and 100");
  } else {
    console.log("Score accepted");
  }
}

try {
  checkScore(120);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
try {
  checkScore(85);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
try {
  checkScore(45);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
