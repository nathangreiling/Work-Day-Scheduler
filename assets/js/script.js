// grabs current date and generates it in the html
var displayCurrentTime = document.getElementById("currentDay");
var currentTime = moment().format("MMM Do YY");
displayCurrentTime.textContent = currentTime;

// displays the tense of the time blocks according to the current time 
function timeSlots () {
    $(".form-control").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        var currentHour = moment().hours();
        currentHour = parseInt(currentHour);

        if (currentHour > blockTime) {
            $(this).addClass("past");
        } else if (currentHour === blockTime){
            $(this).addClass("present");
        } else if (currentHour < blockTime) {
            $(this).addClass("future");
        }
    });
  };

timeSlots();

// saves user input, specific to each hour, to local storage
var saveTasks = function(){
    localStorage.setItem(taskTime, JSON.stringify(userInput));
}
var saveBtn = document.querySelector(".saveBtn");
$(".saveBtn").on("click", function(){
    taskTime = $(this).siblings(".input-group-prepend").text().trim();
    userInput = $(this).siblings(".form-control").val().trim();
    saveTasks();
});

// takes the data in local storage, parses it, and returns it to the corresponding row 
var loadTasks = function(){
    var saved9 = JSON.parse(localStorage.getItem("09:00"));
    var saved10 = JSON.parse(localStorage.getItem("10:00"));
    var saved11 = JSON.parse(localStorage.getItem("11:00"));
    var saved12 = JSON.parse(localStorage.getItem("12:00"));
    var saved13 = JSON.parse(localStorage.getItem("13:00"));
    var saved14 = JSON.parse(localStorage.getItem("14:00"));
    var saved15 = JSON.parse(localStorage.getItem("15:00"));
    var saved16 = JSON.parse(localStorage.getItem("16:00"));
    var saved17 = JSON.parse(localStorage.getItem("17:00"));
    document.getElementById("09:00").textContent = saved9;
    document.getElementById("10:00").textContent = saved10;
    document.getElementById("11:00").textContent = saved11;
    document.getElementById("12:00").textContent = saved12;
    document.getElementById("13:00").textContent = saved13;
    document.getElementById("14:00").textContent = saved14;
    document.getElementById("15:00").textContent = saved15;
    document.getElementById("16:00").textContent = saved16;
    document.getElementById("17:00").textContent = saved17;
}

loadTasks();

