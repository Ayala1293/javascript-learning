const button = document.getElementById("add-button");
const buttonRmv = document.getElementById("remove-button");

const paragraph = document.createElement("p");
paragraph.textContent = "Hello! I created this paragraph using JavaScript.";

button.addEventListener("click", function () {
  document.body.appendChild(paragraph);
});

buttonRmv.addEventListener("click", function () {
  paragraph.remove();
});