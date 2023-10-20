// Task - 3 | JAVASCRIPT
// 3. Extend the OK and Cancel button functionality by using JS

let rememberme = document.getElementById("rememberme");
let loginbut = document.getElementById("submit-login");
let resetbut = document.getElementById("reset-button");
let username = document.getElementById("input-username");
let password = document.getElementById("input-password");

// e. Create a function called clear() and clear all the inputs. Call the function from Cancel button
// when it is clicked.

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

// function validateInputs(...inputs) {
//   input_val = findInputs(...inputs);
//   console.log(input_val);
//   console.log(input_val.length);
//   if (input_val.length == 2 && rememberme.checked) {
//     alert("Logged in successfully with remember me checked!");
//   } else if (input_val.length == 2) {
//     alert("Logged in Successfully!");
//   } else {
//     alert("Invalid Input!");
//   }
// }

// d. Create a function called login() and check if Remember Me is checked or not. If it is checked,
// show message in an alert as “Logged in successfully with Remember Me Marked as Set”,
// OTHERWISE, just show “Logged in Successfully”. Call the login() function on button click.
function login() {
  if (rememberme.checked) {
    alert("Logged in successfully with remember me checked!");
  } else{
    alert("Logged in Successfully!");
  }
}

resetbut.addEventListener("click", function () {
  username.value = "";
  password.value = "";
});

// function addNewStudent() {
//   const body = document.querySelector("tbody");
//   const row = document.createElement("tr");
//   const tdStudentID = document.createElement("td");
//   const tdStudentName = document.createElement("td");
//   const tdBatch = document.createElement("td");
//   const tdAction = document.createElement("td");
//   const studentId = Math.round(Math.random() * 100) + 4;
//   const studentName = "New Student " + studentId;

//   const batch = Math.round(Math.random() * 5) + 2018;
//   row.id = "row" + studentId;
//   tdStudentID.innerHTML = "Student " + studentId;
//   tdStudentName.innerHTML = studentName;
//   tdBatch.innerHTML = batch;
//   tdAction.innerHTML =
//     '<button id="table-button" onclick="updateStudent(\'' +
//     row.id +
//     "')\">Update</button>";
//   row.appendChild(tdStudentID);
//   row.appendChild(tdStudentName);
//   row.appendChild(tdBatch);
//   row.appendChild(tdAction);
//   body.appendChild(row);
// }
// function deleteStudent() {
//   const studentId = prompt("Please enter Student # to delete:");
//   const row = document.getElementById("row" + studentId);
//   if (row) {
//     const body = document.querySelector("tbody");
//     body.removeChild(row);
//   } else {
//     alert("Student not found or invalid input.");
//   }
// }
// function updateStudent(rowId) {
//   const row = document.getElementById(rowId);
//   if (row) {
//     // Prompt the user to enter updated student data
//     const updatedName = prompt("Enter updated student name:");
//     const updatedBatch = prompt("Enter updated batch:");
//     // Update the table cell values
//     row.querySelector("td:nth-child(2)").textContent = updatedName;
//     row.querySelector("td:nth-child(3)").textContent = updatedBatch;
//   } else {
//     alert("Student not found or invalid input.");
//   }
// }

// // ------------------------- LAB TASK ------------------------- //
// function updateBatch() {
//   let batchno = window.prompt(
//     "Enter the student number and batch number in comma seperated values"
//   );
//   batchno = batchno.split(",");
//   let stdno = batchno[0];
//   let batch = batchno[1];
//   // console.log(batch,stdno)
//   let elem_row = document.getElementById("row" + stdno);
//   elem_row.querySelector("td:nth-child(3)").textContent = batch;
// }

// // $(document).ready(function(){
// //   $(table).click(function(){
// //     $(this).hide()
// //   })
// //   console.log('Hi, lab 3')
// // })

// // ------------------------- Lab Task 5 -------------------------
// // $("#studentNames").on({
// //   mouseenter: function(){
// //   $(this).css("background-color", "lightgray");
// //   },
// //   mouseleave: function(){
// //   $(this).css("background-color", "lightblue");
// //   },
// //   click: function(){
// //   $(this).css("background-color", "yellow");
// //   }
// //   });

// // ------------------------- Lab Task  6 -------------------------//
// $("#studentNames").click(function () {
//   $("studentNames").hide();
// });

// $("#studentNames").click(function () {
//   $("studentNames").show();
// });

// // ------------------------- Lab Task 10 -------------------------//
// $(document).ready(function () {
//   $("#myInput").on("keypress", function (e) {
//     if (e.which == 13) {
//       var value = $(this).val().toUpperCase();
//       $.ajax({
//         url: "https://open.er-api.com/v6/latest/" + value,
//         dataType: "json",
//         type: "GET",
//         success: function (data, status, xhr) {
//           var oRates = data.rates;
//           var html = "";
//           for (var o in oRates) {
//             if (oRates.hasOwnProperty(o)) {
//               html += `<tr><td>${o}</td><td>${oRates[o]}</td></tr>`;
//             }
//           }
//           $("#TBody").html(html);
//         },
//         error: function (jqXhr, textStatus, errorMessage) {
//           alert(errorMessage);
//         },
//       });
//     }
//   });
// });

// // -----EVENT Listeners-----//

// $(document).ready(function () {
//   $("#abc").on({
//     click: function () {
//       $(this).css("background-color", "lightgray");
//       // $('#abc').hide()
//     },
//     dblclick: function () {
//       $(this).css("background-color", "lightblue");
//     },
//     hover: function () {
//       $(this).css("background-color", "yellow");
//     },
//   });
// });
// // Wait for the document to be ready
// $(document).ready(function () {
//   // Attach a click event handler to the button element
//   $("button").click(function () {
//     // Use the animate() function to change the left position of all div elements
//     $("div").animate(
//       {
//         left: "250px", // Set the new left position
//       },
//       "slow"
//     ); // Specify the animation duration ('slow' for a slower animation)
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $(".test").hide();
//   });
// });

// // --------------- LAB TASK ---------------
// $(document).ready(function () {
//   $("#search").on("input", function () {
//     var value = $(this).val().toLowerCase();
//     $("#table").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });
