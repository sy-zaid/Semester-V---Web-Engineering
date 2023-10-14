// Task - 3 | JAVASCRIPT
// 3. Extend the OK and Cancel button functionality by using JS

// Defining variables for gettings elements from the HTML.
let rememberme = document.getElementById("rememberme");
let loginbut = document.getElementById("submit-login");
let resetbut = document.getElementById("reset-button");
let username = document.getElementById("input-username");
let password = document.getElementById("input-password");

// a. Create a function called findInputs() and return all the inputs in an array. Call the function from
// the OK button click and assign the output to an array.

function findInputs(...inputs) {
  let input_array = [];
  for (let input of inputs) {
    console.log(input.value);
    if (document.getElementById(input).value != "") {
      input_array.push(document.getElementById(input).value);
    }
  }
  return input_array;
}

// b. Create a function called validateInputs() and return true or false after looping through each input
// element obtained from the findInputs() function and verifiying if mandatory Login ID and
// Password are filled in or not. Call the validateInputs() function from the OK button click after
// findInputs() function.

// c. Show message to enter input if validateInput() output is false and return from the click event.
// The c task is done with b task to make the code simpler.

function validateInputs(...inputs) {
  input_val = findInputs(...inputs);
  if (input_val.length == 2 && rememberme.checked) {
    alert("Logged in successfully with remember me checked!");
  } else if (input_val.length == 2) {
    alert("Logged in Successfully!");
  } else {
    alert("Invalid Input!");
  }
}

// d. Create a function called login() and check if Remember Me is checked or not. If it is checked,
// show message in an alert as “Logged in successfully with Remember Me Marked as Set”,
// OTHERWISE, just show “Logged in Successfully”. Call the login() function on button click.

function login() {
  if (rememberme.checked) {
    alert("Logged in successfully with remember me checked!");
  } else {
    alert("Logged in Successfully!");
  }
}

// e. Create a function called clear() and clear all the inputs. Call the function from Cancel button
// when it is clicked.

resetbut.addEventListener("click", function () {
  username.value = "";
  password.value = "";
});
