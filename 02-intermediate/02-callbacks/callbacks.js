/*function sayHello (){
  console.log("Hello!")
}

function sayGoodbye (){
 console.log("Goodbye")
}

function runCallback(callback){
  callback()
}


runCallback(sayHello);
runCallback( sayGoodbye);



function showName(name){
  console.log("my name is "+ name);
}

function runCallback (callback){
  callback("Mark")
}
runCallback(showName)
*/


const numbers = [10, 20, 30];
function processNumbers(numbers, callback) {
   callback(numbers)
}

function showNumber(number) {
    console.log(number);
}

processNumbers(numbers, showNumber);