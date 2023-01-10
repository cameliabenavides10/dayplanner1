$(document).ready(function(){ 


// // function appending date and time to page using days.js
var intervalHeaderTime = function () {
    var todayHeader = dayjs();
    $('#currentDay').text(todayHeader.format('MMM D, YYYY h:mm:ss a'));
};
// interval set to read function in order to update seconds
setInterval(intervalHeaderTime, 1000);

;

// // The following will be in order to change the colors on the planner depending on time of day.


var intervalCurrentHour = function () {
    var currentHour = dayjs().hour();
    // i dont want to append it anywhere but im not sure how to write it yet
    console.log(currentHour);

    







// these if statements will read the currrent hour given by dayjs and the time-block class to coorespond with each other. 
     $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
        
        if (hourBlock < currentHour) {
            $(this).addClass("past")
        }
        if (hourBlock > currentHour) {
            $(this).addClass("future");
        }
        if (hourBlock === currentHour) {
            $(this).addClass("present");
        }
    })




};
// setting interval timer to run function every second in order to keep current time correct
setInterval(intervalCurrentHour, 1000);











// click event that will store text written into local storage
$(".saveBtn").on("click", function () {
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

});