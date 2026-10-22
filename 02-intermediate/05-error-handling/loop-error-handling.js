let scores = [120, 85, 45];

function checkScore(score) {
  if (score < 0 || score > 100) {
    throw new RangeError("Score must be between 0 and 100");
  } else {
    console.log("Score accepted");
  }
}

for (let i = 0; i < scores.length; i++) {
  try {
    checkScore(scores[i]);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}