// create a variable for alarm and sound
let alarmTime = null;
let alarmTimeout = null;

var clockUser=document.querySelector(".clockButton1").Onclick();{
const alarmSound = new Audio('./sound/Tic-Tac-Mechanical-Alarm-Clock-2-chosic.com_.mp3');
alarmSound.play();
}

function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const meridiem = hours >=12 ? "PM" : "AM";
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

// check alarm with clock









updateClock();
// updated clock time by interval of call back function
setInterval(updateClock, 1000);

