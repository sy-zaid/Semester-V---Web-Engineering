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

// ------------------------- LAB # 02 | STUDENT TASKS ------------------------- //

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
    const updatedcode = prompt("Enter updated course code:");
    row.querySelector("td:nth-child(1)").textContent = updatedcode;

    const updatedName = prompt("Enter updated course Name:");
    row.querySelector("td:nth-child(2)").textContent = updatedName;

    const updatedChrs = prompt("Enter updated course Chrs:");
    row.querySelector("td:nth-child(3)").textContent = updatedChrs;

    const updatedYear = prompt("Enter year:");
    row.querySelector("td:nth-child(4)").textContent = updatedYear;
  } else {
    alert("Course not found or invalid input.");
  }
}

function removeCourse() {
  let courseId = prompt("Please enter Course code to delete that course:");

  const row = document.getElementById(courseId);
  if (row) {
    const body = document.querySelector("tbody");
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

// ------------------------- Lab Task 5 -------------------------
$("#row1, #row2, #row3").on({
  mouseenter: function () {
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function () {
    $(this).css("background-color", "lightblue");
  },
  click: function () {
    $(this).css("background-color", "yellow");
  },
});

// // ------------------------- Lab Task  6 -------------------------//
$("#studentNames").click(function () {
  $("studentNames").hide();
});

$("#studentNames").click(function () {
  $("studentNames").show();
});

// ------------------------- Lab Task 10 -------------------------//
$(document).ready(function () {
  $("#search").on("keypress", function (e) {
    if (e.which == 13) {
      var value = $(this).val().toUpperCase();
      $.ajax({
        url: "https://open.er-api.com/v6/latest/" + value,
        dataType: "json",
        type: "GET",
        success: function (data, status, xhr) {
          var oRates = data.rates;
          var html = "";
          for (var o in oRates) {
            if (oRates.hasOwnProperty(o)) {
              html += `<tr><td>${o}</td><td>${oRates[o]}</td></tr>`;
            }
          }
          $("#TBody").html(html);
        },
        error: function (jqXhr, textStatus, errorMessage) {
          alert(errorMessage);
        },
      });
    }
  });
});

// -----EVENT Listeners-----//

$(document).ready(function () {
  $("#abc").on({
    click: function () {
      $(this).css("background-color", "lightgray");
      // $('#abc').hide()
    },
    dblclick: function () {
      $(this).css("background-color", "lightblue");
    },
    hover: function () {
      $(this).css("background-color", "yellow");
    },
  });
});

// $(document).ready(function () {
//   $("button").click(function () {
//     $("div").animate(
//       {
//         left: "250px",
//       },
//       "slow"
//     );
//   });
// });

// --------------- LAB TASK | Searching through a table---------------//
$(document).ready(function () {
  $("#search").on("input", function () {
    var value = $(this).val().toLowerCase();
    $("#table-data tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// ------------------------- HOME TASK | MINIMETEO ------------------------- //

$(document).ready(function () {
  const APIkey = "0808cfd6c47640d43cf1297274f2e2e0";
  let cities = ["karachi", "lahore", "islamabad"];
  let currentDate = new Date();
  currentDate = currentDate.toLocaleString();

  cities.forEach(function (city) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather`,
      method: "GET",
      data: { q: city, appid: APIkey, units: "metric" },
      dataType: "json",
      success: function (response) {
        setValues(response, city);
      },
    });
  });

  function setValues(response, cityname) {
    $(`#${cityname}-temperature`).text(response.main.temp + " °C");
    $(`#${cityname}-date`).text(currentDate);
    $(`#${cityname}-weather-status`).text(response.weather[0].description);
    $(`#${cityname}-weather-icon`).attr(
      "src",
      `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
    );
    $(`#${cityname}-weather-icon`).attr("style", `filter: brightness(500%)`);
  }
});
