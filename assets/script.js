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


// function appending date and time to page using days.js
var intervalHeaderTime = function() {
    var todayHeader = dayjs();
    $('#currentDay').text(todayHeader.format('MMM D, YYYY h:mm:ss a'));
};
// interval set to read function in order to update seconds
setInterval(intervalHeaderTime, 1000);



// The following will be in order to change the colors on the planner depending on time of day.
// var intervalCurrentHour = function() {
// var currentHour = dayjs();
// i dont want to append it anywhere but im not sure how to write it yet
//  $('#currentDay').text(currentHour.format('h A'));
// };
// setInterval(intervalCurrentHour, 1000);
// console.log(intervalCurrentHour);
// var timeGroups = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM","5 PM"]
// var hourBox = document.querySelector(".time-block");
// do another for loop and see if you can select the ids and append them to a blank variable that will equal timegroups

var nine = $("#hour-9").text();
var ten = $("#hour-10").text();
var eleven= $("#hour-11").text();
var twelve= $("#hour-12").text(); 
var one= $("#hour-13").text();
var two= $("hour-14").text();
var three= $("#hour-15").text();
var four=$("#hour-16").text();
var five= $("#hour-17").text();


var theHours = [nine, ten, eleven, twelve, one, two, three, four, five];

console.log(theHours[0]);



// for looping the objects in 


// wait can you make a for loop with an object??
//  for (let i=0; i < theHours.length; i++){
// if (currentHour === timeGroups){
//     // set to present color using the style thing? 
// } else if(currentHour > timeGroups){
//     // set to past color 
// } else { 
//     // set to future color
// }
//  }