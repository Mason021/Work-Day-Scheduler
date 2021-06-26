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

    var enteredText = (this.previousElementSibling.value);

    console.log(enteredText);

    localStorage.setItem("what was said", enteredText);
};


    // localStorage.getItem("what was said");

    // if (enteredText !== null) {
    //     var textSticky = JSON.parse(enteredText);
    // }
    
    
    // localStorage.setItem(actualCurrentTime, enteredInfo)
    // localStorage.setItem(enteredInfo, )
    // console.log("hello")
    // console.log(this.previousElementSibling.value)
    // console.log(enteredInfo)


// Get item from local storage if any
// $("#9 .description").val(localStorage.getItem("9"));
// $("#10 .description").val(localStorage.getItem("10"));
// $("#11 .description").val(localStorage.getItem("11"));
// $("#12 .description").val(localStorage.getItem("12"));
// $("#13 .description").val(localStorage.getItem("13"));
// $("#14 .description").val(localStorage.getItem("14"));
// $("#15 .description").val(localStorage.getItem("15"));
// $("#16 .description").val(localStorage.getItem("16"));
// $("#17 .description").val(localStorage.getItem("17"));

// click event //
saveBtn.on("click", saveEnteredText)