// // $(document).ready(function(){
// //   $(table).click(function(){
// //     $(this).hide()
// //   })
// //   console.log('Hi, lab 3')
// // })

// // ------------------------- Lab Task 5 -------------------------
// $("#studentNames").on({
//   mouseenter: function(){
//   $(this).css("background-color", "lightgray");
//   },
//   mouseleave: function(){
//   $(this).css("background-color", "lightblue");
//   },
//   click: function(){
//   $(this).css("background-color", "yellow");
//   }
//   });

// // // ------------------------- Lab Task  6 -------------------------//
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

// --------------- LAB TASK ---------------
$(document).ready(function () {
  $("#search").on("input", function () {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
