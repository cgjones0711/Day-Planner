$("#currentDay").text(moment().format("MMMM Do YYYY"));

let currentHour = moment().format("HH");
console.log(currentHour)
let timeBlocks=document.getElementsByClassName(".description")

for (let i = 0; i < timeBlocks.length; i++) {
    
    function changeColors(){
        if (timeBlocks == currentHour){
            timeBlocks.addclass(".present")
        }
        if (timeBlocks > currentHour){
            timeBlocks.addclass(".future")
    }
    if (timeBlocks < currentHour){
        timeBlocks.addclass(".past")

    
    }
} 
}
console.log
    