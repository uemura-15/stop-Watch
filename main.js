let display =document.getElementById("display");
let startStop =document.getElementById("startStop");
let reset =document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds =0;

let newHours = 0;
let newMinutes = 0;
let newSconds = 0;

let status = "stop";
let interval;

function stopWatch(){
    seconds++;
    if(seconds / 600 == 1){
        minutes++;
        seconds = 0;
        if(minutes / 600 == 1){
            hours++;
            minutes = 0;
        }
    }
    if(seconds < 10){
        newSconds = "0" + seconds;
    }else{
        newSconds = seconds;
    }
    if(minutes < 10){
        newMinutes ="0" + minutes;
    }else{
        newMinutes = minutes;
    }
    if(hours < 10){
        newHours = "0" + hours;
    }else{
        newHours = hours;
    }
    
   display.innerHTML = newHours +  ":" + newMinutes + ":" + newSconds; 
}

startStop.addEventListener("click", function(){
    if(status == "stop"){
        interval = setInterval(stopWatch, 100);
        startStop.innerHTML = "STOP";
        status = "start";
    }  
    else{
        clearInterval(interval);
        startStop.innerHTML = "START";
        status = "stop";
    }
})

reset.addEventListener("click", function(){
    clearInterval(interval);
    startStop.innerHTML = "START";
    status = "stop";
    display.innerHTML = "00:00:00";
    hours =0;
    minutes = 0;
    seconds = 0;
})