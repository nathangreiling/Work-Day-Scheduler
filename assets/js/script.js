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
  }
timeSlots();

