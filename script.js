$("#currentDay").text(moment().format("MMMM Do YYYY"));

let currentHour = moment().format("HH");
console.log(currentHour)
let hours = ["0100","0200","0300","0400","0500","0600","0700","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300","2400"];
let timeRows=document.getElementsByClassName(".future")
for (let i = 0; i < hours.length; i++) {
    
    function changeColors(){
        if (hours == currentHour){
            timeRows.addclass(".present")
        }
        if (hours > currentHour){
            timeRows.addclass(".future")
    }
    if (hours < currentHour){
        timeRows.addclass(".past")
        console.log(timeRows.addclass(".past"))

    
    }
} 
}
console.log
    