$("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentHour = moment().hours();
console.log(currentHour)

$(".time-block").each(function () {
    let hour = parseInt($(this).attr("id")); 
    
    if (hour < currentHour) {
        $(this).addClass("past");
      }
      if (hour === currentHour) {
        $(this).addClass("present");
      }
      if (hour < currentHour) {
        $(this).addClass("future");
      }

    })  
    