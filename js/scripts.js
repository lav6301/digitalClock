


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

