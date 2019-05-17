// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(param1, param2, cb) {
  return cb(param1, param2)
}


/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function consume1(param1, param2, cb) {
  return cb(param1 + param2);
}
consume1(5, 7, function (plus) {
  console.log(plus)
});


function consume(x, y, cb) {
  return cb(x * y);

}
consume(3, 8, function (multiply) {
  console.log(multiply)
});

function greeting(first, last, cb) {
  return (`Hello Mary Poppins, nice to meet you!`)
}
greeting('Mary', 'Poppins', greeting);

console.log(greeting());






// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// closure allows functions to access the outer variables closure is going to allow `nestedfunction()` to access anything outside of it complete its task 
// sometimes someone coding will ask something of a function that is impossible with only the information 
// with the function itself so with closrure in mind the function looks elswhere or outside to find the information it needs

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();