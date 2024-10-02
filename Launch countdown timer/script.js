let timer = 0;
let daysDom = document.querySelector(".days"),
    hoursDom = document.querySelector(".hours"),
    minutesDom = document.querySelector(".minutes"),
    secondsDom = document.querySelector(".seconds");


let days = 2,
    hours = 12,
    minutes = 44,
    seconds = 13;


// Make a function that converts days, hours, minutes, seconds into milliseconds
function convertToMilli(days, hours, minutes, seconds) {
    daysInSeconds = days * 86400
    hoursInSeconds = hours * 3600
    minutesInSeconds = minutes * 60;
    return daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
}
timer = convertToMilli(days, hours, minutes, seconds)



// Make a function that minuses the seconds
setInterval(() => {
    updateDom(timer);
    timer--;
}, 1000)


// Make a function with the logic


// Make a function that displays the items on the screen in their correct place
function updateDom(timer) {
    daysDom.innerHTML = Math.floor(timer / 86400);
    hoursDom.innerHTML = Math.floor(timer / 3600 % 24);
    minutesDom.innerHTML = Math.floor(timer / 60 % 60);
    secondsDom.innerHTML = Math.floor(timer % 60);
}


