

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


for (let key = 9; key < 18; key++) {
  
  const stringifyObj = localStorage.getItem(key);
  let currentData = JSON.parse (stringifyObj)
  console.log(currentData)
 let HTMLel = document.querySelector("#" + currentData.timeSlot)
  HTMLel.innerHTML = currentData.message
  console.log(HTMLel)
}


document.body.addEventListener("click", function(event) {
event.preventDefault();

document.body.addEventListener("click", function(event) {
event.preventDefault();

let appointmentMessage9 = {
  message: messageInput9.value.trim(), timeSlot:"messageInput9" };
    localStorage.setItem("9", JSON.stringify(appointmentMessage9));

let appointmentMessage10 = {
  message: messageInput10.value.trim(), timeSlot:"messageInput10" };
    localStorage.setItem("10", JSON.stringify(appointmentMessage10));

let appointmentMessage11 = {
  message: messageInput11.value.trim(), timeSlot:"messageInput11" };
    localStorage.setItem("11", JSON.stringify(appointmentMessage11));

let appointmentMessage12 = {
  message: messageInput12.value.trim(), timeSlot:"messageInput12" };
    localStorage.setItem("12", JSON.stringify(appointmentMessage12));

let appointmentMessage13= {
  message: messageInput13.value.trim(), timeSlot:"messageInput13" };
    localStorage.setItem("13", JSON.stringify(appointmentMessage13));

let appointmentMessage14 = {
  message: messageInput14.value.trim(), timeSlot:"messageInput14"};
    localStorage.setItem("14", JSON.stringify(appointmentMessage14));
  
let appointmentMessage15 = {
  message: messageInput15.value.trim(), timeSlot:"messageInput15"};
    localStorage.setItem("15", JSON.stringify(appointmentMessage15));

let appointmentMessage16 = {
  message: messageInput16.value.trim(), timeSlot:"messageInput16"};
    localStorage.setItem("16", JSON.stringify(appointmentMessage16));
    
let appointmentMessage17 = {
  message: messageInput17.value.trim(), timeSlot:"messageInput17"}; 
    localStorage.setItem("17", JSON.stringify(appointmentMessage17));


    
});

})
