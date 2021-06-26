// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar -X

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours -X

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future -X

// WHEN I click into a time block
// THEN I can enter an event -X

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

var saveBtn = $(".saveBtn")

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

function timeColors() {
    var timeOfDayOnCalendar = moment().format("H");

    $(".time-block").each(function() {
        var actualCurrentTime = parseInt($(this).attr("id"));
        // console.log("actualCurrentTime");

        if (actualCurrentTime < timeOfDayOnCalendar) {
            $(this).addClass("past");
            console.log(this)
            console.log($(this))
        } else if (actualCurrentTime == timeOfDayOnCalendar) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future")
        }
    })
};
timeColors();

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

function saveEnteredText() {
    // var enteredInfo = 
    console.log("hello")
    console.log(this.previousElementSibling.value)
}

saveBtn.on("click", saveEnteredText)