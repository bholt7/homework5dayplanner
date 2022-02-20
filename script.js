$(init);

// display date and time 
function init (){
    
$("#currentDay").text(moment().format("dddd, MMMM Do LTS"));

color();
setInterval(color, 60000);

}

// changing the colors based on past present or future.
function color () {

    $(".time-block").each(function () {

    var timeofDay = parseInt($(this).attr("id").replace("hour-"));

    var immediate = parseInt(moment().format('H'));

    if (timeofDay < immediate) {

        $(this).attr("style", "background-color: teal");

    } else if (timeofDay > immediate) {

        $(this).attr("style", "background-color: goldenrod");

    } else {
        $(this).attr("style", "background-color: orange")
    }

});

}

// trying to get data from local storage.

$(".time-block").each(function () {
    var id = $(this).attr("id");

    var description = localStorage.getItem(id)
});

var saveBtn = document.querySelector(".savebtn");

    $(saveBtn).on("click", function() {

        var hour = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(hour, description)

    });