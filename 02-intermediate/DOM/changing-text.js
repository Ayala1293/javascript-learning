const hiddenMessage = document.getElementById("hidden-message");

console.log("Text content:", hiddenMessage.textContent);
console.log("Inner text:", JSON.stringify(hiddenMessage.innerText));
console.log("Display style:", getComputedStyle(hiddenMessage).display);


const message = document.getElementById("message");

message.innerHTML = "I am learning <strong>DOM manipulation</strong>.";
console.log(message.innerHTML);

const message = document.getElementById("message");

message.innerHTML = "My name is <strong>Brian</strong> and I am learning <em>JavaScript</em>.";

const message = document.getElementById("message");

message.textContent = "Welcome <strong>to JavaScript</strong>!";