$("#currentDay").text(moment().format("MMMM Do YYYY"));

let currentHour = moment().format("HH");
console.log(currentHour)

let timeBlocks = [
"0900",
"1000",
"1100",
"1200",
"1300",
"1400",
"1500", 
"1600",
"1700",
]

for (let i = 0; i < timeBlocks.length; i++) {
    let timeBlocks=document.getElementById(".time-block row ")
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
