/* consider the following assignment below:
let first_number = 15;
let second_number = 17;

write 3 ways using javascript code to swap the values of the code above.

the final output should be:
first_number = 17;
second_number = 15;*/

// 1. Arthmetic Operations: 
let first_number = 15;
let second_number = 17;

// Using arithmetic operations to swap values
first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;

console.log("first_number =", first_number);
console.log("second_number =", second_number);

// 2. Callback Functions: Can be passed as arguements to other functions, allowing them to be executed to a later time.
let first_number = 15;
let second_number = 17;

// Define a callback function to swap values
function changeValues(callback) {
  callback();
}

// Pass a function as a callback to swap the values
changeValues(function() {
  let temp = first_number;
  first_number = second_number;
  second_number = temp;
});

console.log("first_number =", first_number);
console.log("second_number =", second_number);

// 3. Using a Variable
let first_number = 15;
let second_number = 17;

let temp = first_number;
first_number = second_number;
second_number = temp;

console.log("first_number =", first_number);
console.log("second_number =", second_number);