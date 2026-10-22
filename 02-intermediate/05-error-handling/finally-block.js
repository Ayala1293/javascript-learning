/*
// this will give a reference error because total is not defined in this scope
try {
  console.log("Starting program");
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Program finished");
}

// this will give a range error because score is not between 0 and 100
try {
  console.log("Step 1");
  console.log("Step 2");
} catch (error) {
  console.log("An error occurred");
} finally {
  console.log("Step 3");
}
*/
function checkScore(score) {
  try {
    if (score < 0 || score > 100) {
      throw new RangeError("Score must be between 0 and 100");
    } else {
      console.log("Score accepted");
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  } finally {
    console.log("Score check completed");
  }
}

checkScore(120);
checkScore(85);
