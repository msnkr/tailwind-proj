let timer = 0;
let daysDom = document.querySelector(".days"),
    hoursDom = document.querySelector(".hours"),
    minutesDom = document.querySelector(".minutes"),
    secondsDom = document.querySelector(".seconds");




// Make a function that converts days, hours, minutes, seconds into milliseconds
function convertToMilli(days, hours, minutes, seconds) {
    daysInSeconds = days * 24 * 60 * 60;
    hoursInSeconds = hours * 60 * 60;
    minutesInSeconds = minutes * 60;
    return daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
}
timer = convertToMilli(2, 12, 52, 32)


// Make a function that minuses the seconds
// setInterval(() => {
//     seconds--;
//     console.log(seconds)
// }, 1000)


// Make a function that displays the items on the screen in their correct place
function updateDom(timer) {

    return
}

updateDom()