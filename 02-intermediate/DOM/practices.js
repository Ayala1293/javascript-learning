const unserInput = document.getElementById("user-input")
const button = document.getElementById("show-button")
const paragraph = document.getElementById("output")



button.addEventListener("click", function(){
  console.log(unserInput.value)
})
paragraph.textContent = unserInput.value;