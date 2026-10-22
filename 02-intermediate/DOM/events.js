const nameInput = document.getElementById("name-input");
const output = document.getElementById("output");

nameInput.addEventListener("input", function (event) {
  output.textContent = event.target.value;
});
nameInput.addEventListener("keydown", function (event) {
  console.log(event.key);
});

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("You pressed Enter!");
  }
});

const status = document.getElementById("status");

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    status.textContent = `Hello, ${nameInput.value}!`;
  }
});