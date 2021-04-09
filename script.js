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
let messageInput9 = document.getElementById("messageInput9");
let messageInput10 = document.getElementById("messageInput10");
let messageInput11 = document.getElementById("messageInput11");
let messageInput12 = document.getElementById("messageInput12");
let messageInput13 = document.getElementById("messageInput13");
let messageInput14 = document.getElementById("messageInput14");
let messageInput15 = document.getElementById("messageInput15");
let messageInput16 = document.getElementById("messageInput16");
let messageInput17 = document.getElementById("messageInput17");
let hourLoop = document.getElementById("#hourloop");
let saveBtn = document.querySelector("#save");
let comments=document.querySelector("comments")

document.body.addEventListener("click", function(event) {
event.preventDefault();

document.body.addEventListener("click", function(event) {
event.preventDefault();

let appointmentMessage9 = {
  messageInput9: messageInput9.value.trim() };
    localStorage.setItem("9", JSON.stringify(appointmentMessage9));

let appointmentMessage10 = {
  messageInput10: messageInput10.value.trim() };
    localStorage.setItem("10", JSON.stringify(appointmentMessage10));

let appointmentMessage11 = {
  messageInput11: messageInput11.value.trim() };
    localStorage.setItem("11", JSON.stringify(appointmentMessage11));

let appointmentMessage12 = {
  messageInput12: messageInput12.value.trim() };
    localStorage.setItem("12", JSON.stringify(appointmentMessage12));

let appointmentMessage13= {
  messageInput13: messageInput13.value.trim() };
    localStorage.setItem("13", JSON.stringify(appointmentMessage13));

let appointmentMessage14 = {
  messageInput14: messageInput14.value.trim() };
    localStorage.setItem("14", JSON.stringify(appointmentMessage14));
  
let appointmentMessage15 = {
  messageInput15: messageInput15.value.trim() };
    localStorage.setItem("15", JSON.stringify(appointmentMessage15));

let appointmentMessage16 = {
  messageInput16: messageInput16.value.trim() };
    localStorage.setItem("16", JSON.stringify(appointmentMessage16));
    
let appointmentMessage17 = {
  messageInput17: messageInput17.value.trim() }; 
    localStorage.setItem("17", JSON.stringify(appointmentMessage17));

});

})
