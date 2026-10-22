/*
const heading = document.getElementById("main-heading");

console.log(heading.textContent);

const title = document.getElementById("page-title");

if (title !== null) {
  title.textContent = "JavaScript Is Fun";
}
const message = document.querySelector(".message");


const message = document.querySelector(".message");

console.log(message.textContent);

const  heading = document.querySelector("#page-title");

console.log(heading.textContent);
*/

const messages = document.querySelectorAll(".message");

for (let i = 0; i < messages.length; i++) {
  messages[i].textContent = "Fruit";
  console.log(messages[i].textContent);
}