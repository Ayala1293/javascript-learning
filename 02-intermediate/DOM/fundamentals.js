const input = document.getElementById("type-greeting")
const button = document.getElementById("button")
const paragraph = document.getElementById("paragraph")

button.addEventListener("click", function(){
  paragraph.textContent= (`Hello ${input.value}` )
})
