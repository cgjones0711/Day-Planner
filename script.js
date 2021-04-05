// date time function
$("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentHour = moment().hours();
console.log(currentHour)

//button icon script
$('input[type="submit"]').each(function () {
  $(this).hide().after('<button>').next().button({
       icons: { primary: $(this).attr('icon') },
       label: $(this).val()
   }).click(function (event) {
        event.preventDefault();
        $(this).prev().click();
   });
});

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
    let descriptionEl = document.querySelector("#description")
    let saveBtn = document.querySelector("#save")
    let msgDiv = document.querySelector("#msg")
    let userSpan = document.querySelector("#") 

    renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  let initials = localStorage.getItem("initials");
 
   if (!initials ){
    return;
  }

  userSpan.textContent = initials;
  
}

  enterBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let initials = document.querySelector("#initials").value;
 

  if (initials === "") {
    displayMessage("error", "Come on Bro");
  } 
  else {
    displayMessage("success", "I Got You");

    localStorage.setItem("initials", initials);
    renderLastRegistered();
  }
});





    
    
