// associating the html selectors to a variable
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// creating a function to control the clock and display it
function setDate() {
    // associating the Date library to a variable (I guess)
    const now = new Date();
    // changing the html text by use innerHtml
    document.getElementById("hours").innerHTML = now.getHours();
    document.getElementById("minutes").innerHTML = now.getMinutes();
    document.getElementById("seconds").innerHTML = now.getSeconds();
    // creating the clock logic
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes/60) * 360) + 90;
    const hoursDegrees = ((hours/12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console output
    console.log("Seconds:" + seconds);
    console.log("Minutes:" + minutes);
    console.log("Hours:" + hours);

}
// calling the function for each 1s
setInterval(setDate, 1000);
