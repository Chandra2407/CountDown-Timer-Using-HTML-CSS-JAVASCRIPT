const dayCount = document.getElementById("day");
const hourCount = document.getElementById("hour");
const minuteCount = document.getElementById("minute");
const secondCount = document.getElementById("second");

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

const text1 = document.getElementById("text1");

function  countDownNewYear() {
   
   let newYear = new Date("01/01/2023");
   let currentDate = new Date();
   let totalSeconds = (newYear - currentDate)/1000;
   let days = Math.floor(totalSeconds/3600/24);
   let hours = Math.floor(totalSeconds/3600)%24;
   let minutes = Math.floor(totalSeconds/60)%60;
   let seconds = Math.floor(totalSeconds)%60;
   let text = "Until new year";
   
   dayCount.innerHTML = days;
   hourCount.innerHTML = hours;
   minuteCount.innerHTML = minutes;
   secondCount.innerHTML = seconds;
   text1.innerHTML = text;
}

function countDownYourBirthday(){
    
    let newYear = new Date("03/30/2022");
    let currentDate = new Date();
    let totalSeconds = (newYear - currentDate)/1000;
    let days = Math.floor(totalSeconds/3600/24);
    let hours = Math.floor(totalSeconds/3600)%24;
    let minutes = Math.floor(totalSeconds/60)%60;
    let seconds = Math.floor(totalSeconds)%60;
   let text = "Until your birthday";

    
    dayCount.innerHTML = days;
    hourCount.innerHTML = hours;
    minuteCount.innerHTML = minutes;
    secondCount.innerHTML = seconds;
    text1.innerHTML = text;
}
function countDownMyBirthday(){
    
    let newYear = new Date("07/24/2022");
    let currentDate = new Date();
    let totalSeconds = (newYear - currentDate)/1000;
    let days = Math.floor(totalSeconds/3600/24);
    let hours = Math.floor(totalSeconds/3600)%24;
    let minutes = Math.floor(totalSeconds/60)%60;
    let seconds = Math.floor(totalSeconds)%60;
   let text = "Until my birthday";

    
    dayCount.innerHTML = days;
    hourCount.innerHTML = hours;
    minuteCount.innerHTML = minutes;
    secondCount.innerHTML = seconds;
    text1.innerHTML = text;
}
var intervalId;

 function showNewYear() {
     
     intervalId = setInterval(countDownNewYear,1000);

     
 }
 showNewYear();

 function showYourBirthday () {
     clearInterval(intervalId);   
     intervalId = setInterval(countDownYourBirthday,1000);
 }
 function showMyBirthday () {

     clearInterval(intervalId);
    intervalId = setInterval(countDownMyBirthday, 1000);
     
 }
 function reset(){
     clearInterval(intervalId);
     showNewYear();
 }
 button1.onclick = function() {showYourBirthday()};
 button2.onclick = function() {showMyBirthday()};
 button3.onclick = function() {reset()};