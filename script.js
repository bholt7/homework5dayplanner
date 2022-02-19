$(init);

// display date and time 
function init (){
$("#currentDay").text(moment().format("dddd, MMMM Do LTS"));

}