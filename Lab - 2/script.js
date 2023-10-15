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

// ------------------------- STUDENT TASKS ------------------------- //

function addNewCourse() {
  const body = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tdCourseID = document.createElement("td");
  const tdCourseName = document.createElement("td");
  const tdChrs = document.createElement("td");
  const tdYear = document.createElement("td");
  const tdAction = document.createElement("td");

  let newcourse = prompt(
    "Add details in comma seperated values: (Code, Name, Credit Hours, Year)"
  );
  newcourse = newcourse.split(",");

  const CourseId = newcourse[0];
  const CourseName = newcourse[1];
  const Chrs = newcourse[2];
  const year = newcourse[3];

  row.id = CourseId;

  tdCourseID.innerHTML = CourseId;
  tdCourseName.innerHTML = CourseName;
  tdYear.innerHTML = year;
  tdChrs.innerHTML = Chrs;
  tdAction.innerHTML =
    '<button id="table-button" onclick="updateCourse(\'' +
    row.id +
    "')\">Update</button>";
  row.appendChild(tdCourseID);
  row.appendChild(tdCourseName);
  row.appendChild(tdChrs);
  row.appendChild(tdYear);
  row.appendChild(tdAction);
  body.appendChild(row);
}

function updateCourse(rowId) {
  const row = document.getElementById(rowId);
  if (row) {
    // Prompt the user to enter updated student data
    const updatedcode = prompt("Enter updated course code:");
    row.querySelector("td:nth-child(1)").textContent = updatedcode;

    const updatedName = prompt("Enter updated course Name:");
    row.querySelector("td:nth-child(2)").textContent = updatedName;

    const updatedChrs = prompt("Enter updated course Chrs:");
    row.querySelector("td:nth-child(3)").textContent = updatedChrs;

    const updatedYear = prompt("Enter year:");
    row.querySelector("td:nth-child(4)").textContent = updatedYear;

    // Update the table cell values
    //   row.querySelector("td:nth-child(2)").textContent = updatedName;
    //   row.querySelector("td:nth-child(3)").textContent = updatedBatch;
  } else {
    alert("Course not found or invalid input.");
  }
}

function removeCourse() {
  let courseId = prompt("Please enter Course code to delete that course:");

  const row = document.getElementById(courseId);
  if (row) {
    const body = document.querySelectorAll("tbody");
    body.removeChild(row);
  } else {
    alert("Course not found or invalid input.");
  }
}

function searchCourse() {
  const searchquery = prompt("Enter course code to search");
  const row = document.querySelector(`#${searchquery}`);
  row.style.backgroundColor = "yellow";
  setTimeout(function () {
    row.style.backgroundColor = "white";
    row.style.transition = "all ease 2s";
  }, 1500);
}
