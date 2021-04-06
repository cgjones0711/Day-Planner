// date time function
$("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentHour = moment().hours();
console.log(currentHour)



//color changing function by hour
$(".time-block").each(function () {
    let hour = parseInt($(this).attr("id")); 
    
    if (hour < currentHour) {
        $(this).children(".description").addClass("past");
      }
      if (hour === currentHour) {
        $(this).children(".description").addClass("present");
      }
      if (hour < currentHour) {
        $(this).children(".description").addClass("future");
      }

    })  

    // Save on Click
    
let messageInput = document.querySelector("#messageInput");
let hourLoop = document.getElementById("#hourloop");
let saveBtn = document.querySelector("#save");
let comments=document.querySelector("comments")
















document.body.addEventListener("click", function(event) {
event.preventDefault();

let appointmentMessage = {
  messageInput: messageInput.value.trim()
};

localStorage.setItem("appointmentMessage", JSON.stringify(appointmentMessage));

});


