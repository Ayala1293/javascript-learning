const username = document.getElementById("username");
const form = document.getElementById("registration-form");

username.addEventListener("input", function () {
  console.log(username.value);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value === "") {
    console.log("Please Enter a username");
  } else {
    console.log("Hello", username.value);
  }
});
