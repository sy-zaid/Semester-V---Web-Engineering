// Task - 3 | JAVASCRIPT
function findInputs(...inputs) {
  // console.log(inp1)
  let input_array = [];
  for (let input of inputs) {
    input_array.push(document.getElementById(input).value);
  }

  console.log(input_array);
  console.log(document.querySelector("#username"));
}

function addNewStudent() {
  const body = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tdStudentID = document.createElement("td");
  const tdStudentName = document.createElement("td");
  const tdBatch = document.createElement("td");
  const tdAction = document.createElement("td");
  const studentId = Math.round(Math.random() * 100) + 4;
  const studentName = "New Student " + studentId;

  const batch = Math.round(Math.random() * 5) + 2018;
  row.id = "row" + studentId;
  tdStudentID.innerHTML = "Student " + studentId;
  tdStudentName.innerHTML = studentName;
  tdBatch.innerHTML = batch;
  tdAction.innerHTML =
    '<button id="table-button" onclick="updateStudent(\'' +
    row.id +
    "')\">Update</button>";
  row.appendChild(tdStudentID);
  row.appendChild(tdStudentName);
  row.appendChild(tdBatch);
  row.appendChild(tdAction);
  body.appendChild(row);
}
function deleteStudent() {
  const studentId = prompt("Please enter Student # to delete:");
  const row = document.getElementById("row" + studentId);
  if (row) {
    const body = document.querySelector("tbody");
    body.removeChild(row);
  } else {
    alert("Student not found or invalid input.");
  }
}
function updateStudent(rowId) {
  const row = document.getElementById(rowId);
  if (row) {
    // Prompt the user to enter updated student data
    const updatedName = prompt("Enter updated student name:");
    const updatedBatch = prompt("Enter updated batch:");
    // Update the table cell values
    row.querySelector("td:nth-child(2)").textContent = updatedName;
    row.querySelector("td:nth-child(3)").textContent = updatedBatch;
  } else {
    alert("Student not found or invalid input.");
  }
}

// ------------------------- LAB TASK ------------------------- //
function updateBatch() {
  let batchno = window.prompt(
    "Enter the student number and batch number in comma seperated values"
  );
  batchno = batchno.split(",");
  let stdno = batchno[0];
  let batch = batchno[1];
  // console.log(batch,stdno)
  let elem_row = document.getElementById("row" + stdno);
  elem_row.querySelector("td:nth-child(3)").textContent = batch;

}

$(document).ready(function(){
  $(table).click(function(){
    $(this).hide()
  })
  console.log('Hi, lab 3')
  
})

