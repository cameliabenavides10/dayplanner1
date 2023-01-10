// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});


// // function appending date and time to page using days.js
var intervalHeaderTime = function() {
    var todayHeader = dayjs();
   $('#currentDay').text(todayHeader.format('MMM D, YYYY h:mm:ss a'));
 };
 // interval set to read function in order to update seconds
setInterval(intervalHeaderTime, 1000);

;

// // The following will be in order to change the colors on the planner depending on time of day.

var intervalCurrentHour = function() {
           var currentHour = dayjs();
// i dont want to append it anywhere but im not sure how to write it yet
   currentHour.format('h A');


// setInterval(intervalCurrentHour, 1000);
 
// // do another for loop and see if you can select the ids and append them to a blank variable that will equal timegroups

var nine = $("#12PM").text();
var ten = $("#hour-10").text();
var eleven= $("#hour-11").text();
var twelve= $("#hour-12").text(); 
var one= $("#hour-13").text();
var two= $("#hour-14").text();
var three= $("#hour-15").text();
var four=$("#hour-16").text();
var five= $("#hour-17").text();
var eight= $("#8PM").text();


var theHours = [nine, ten, eleven, twelve, one, two, three, four, five, eight ];

console.log(theHours[9] === "8 PM");


 for (let i=0; i < theHours.length; i++){
 if (currentHour.format('h A') === theHours[i]){
   $("textarea").css("background-color", "#ff6961");
 } else if(currentHour.format('h A') < theHours[i]){
  $("textarea").css("background-color", "#77dd77");
} else { 
 $("textarea").css("background-color", "#d3d3d3");
 }
 }

};

setInterval(intervalCurrentHour, 1000);











// click event that will store text written into local storage
$(".saveBtn").on("click", function (){
var textPlanner = $(this).siblings("textarea").val();
var timePlanner = $(this).parent().attr("id");
localStorage.setItem(timePlanner, textPlanner);
}) 


// here we are getting the local storage key and value pairs and setting the value to it. 
$("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
$("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
$("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
$("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
$("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
$("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
$("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
$("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
$("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));