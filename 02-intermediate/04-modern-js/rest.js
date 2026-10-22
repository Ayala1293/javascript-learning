const { ChevronsLeft } = require("lucide-react");

// The ...numbers catches all the arguments passed in
function addNumbers(...numbers) {
  console.log(numbers); 
}

addNumbers(1, 2);       // Output: [1, 2]
addNumbers(5, 10, 15);  // Output: [5, 10, 15]

function makeSandwich(bread, meat, ...extraToppings) {
  console.log("Bread:", bread);
  console.log("Meat:", meat);
  console.log("Extras:", extraToppings); // This is an array!
}

makeSandwich("Wheat", "Turkey", "Lettuce", "Tomato", "Mayo");
// Output:
// Bread: Wheat
// Meat: Turkey
// Extras: ["Lettuce", "Tomato", "Mayo"]


function showHobbies(name, ...hobbies){
  console.log("Name", name);
  console.log("Hobbies", hobbies)
}


showHobbies("Mark", "Cooking", "Cycling", "Running")