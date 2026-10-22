const message = document.getElementById("message");
const button = document.getElementById("toggle-button");

button.addEventListener("click", function () {
  message.classList.toggle("highlight");
});