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
    let descriptionEl = document.querySelector("#descriptionInput")
    let saveBtn = document.querySelector("#save")
   
    

    renderLastRegistered();

function renderLastRegistered() {
  let descriptionEl = localStorage.getItem("email");

  if (!descriptionEl) {
    return;
  }

  descriptionEl.textContent = descriptionEl;
  
}

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("saveBtn")

  

    localStorage.setItem("descriptionInput", descriptionEl);
    console.log("descriptionEl")
   
    renderLastRegistered();
  })




    
    
