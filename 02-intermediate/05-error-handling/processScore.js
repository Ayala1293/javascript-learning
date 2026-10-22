function processScores(score) {
  for (let i = 0; i < score.length; i++) {
    try {
      if (score[i] < 0 || score[i] > 100) {
        throw new RangeError("Score must be between 0 and 100");
      } else {
        console.log("Score accepted");
      }
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    } finally {
      console.log("Finished checking score");
    }
  }
}

processScores([120, 85, -5, 45]);
