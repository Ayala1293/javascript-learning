const task = new Promise(function (resolve, reject) {
  resolve("Task completed!");
});

task.then(function (result) {
  console.log(result);
});

const tasks = new Promise(function (resolve, reject) {
  reject("Something went wrong!");
});

task
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });