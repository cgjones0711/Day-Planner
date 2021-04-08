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





document.body.addEventListener("click", function(event) {
event.preventDefault();

let appointmentMessage = {
  messageInput: messageInput.value.trim()
};

localStorage.setItem("9", JSON.stringify(appointmentMessage));
localStorage.setItem("10", JSON.stringify(appointmentMessage));
localStorage.setItem("11", JSON.stringify(appointmentMessage));
localStorage.setItem("12", JSON.stringify(appointmentMessage));
localStorage.setItem("13", JSON.stringify(appointmentMessage));
localStorage.setItem("14", JSON.stringify(appointmentMessage));
localStorage.setItem("15", JSON.stringify(appointmentMessage));
localStorage.setItem("16", JSON.stringify(appointmentMessage));
localStorage.setItem("17", JSON.stringify(appointmentMessage));

});

})
