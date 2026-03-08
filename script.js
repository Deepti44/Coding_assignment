let time = 3600;
let interval;

function updateTimer(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerHTML = minutes + ":" + seconds;

}

function startTimer(){

if(!interval){

interval = setInterval(function(){

if(time > 0){
time--;
updateTimer();
}
else{
clearInterval(interval);
document.getElementById("message").innerHTML = "Time's Up!";
}

},1000);

}

}

function pauseTimer(){
clearInterval(interval);
interval = null;
}

function resetTimer(){

clearInterval(interval);
interval = null;
time = 3600;
updateTimer();
document.getElementById("message").innerHTML = "";

}