let studentName = "Sarah";

try {
  console.log(studentNme);
} catch (error) {
  console.log(error.message);
}

console.log("Program continues");

/*
there is a spelling error in the console.log in the try block 
hence having a reference error causing execution to move to the catch block , 
hence printing an error occurred, 
since the error has been caught and handled, 
execution continues hence printing program continues
*/
