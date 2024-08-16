const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];



const deadline = document.querySelector(".deadline");


const theDeadlineDate = new Date(2024, 2, 24,11,30 );

window.addEventListener("DOMContentLoaded",()=>{
    deadline.textContent = `The deadline ends on 
    ${weekdays[theDeadlineDate.getDay()]}
    ${theDeadlineDate.getDate()},
    ${months[theDeadlineDate.getMonth()]},
    ${theDeadlineDate.getFullYear()},
    ${theDeadlineDate.getHours()}:
    ${theDeadlineDate.getMinutes()}
    am.
    `
})






function theCountDownGenerator(){
    const currentDate = new Date();
const milisecondInDay = 24*60*60*1000;
const milisecondInHour = 60*60*1000;
const milisecondInMinutes = 60*1000;
const milisecondInSecond = 1000;
    let timeInMiliSecond = currentDate.getTime()
    let theFutureDateInMiliSecond = theDeadlineDate.getTime();
    let theDifference = theFutureDateInMiliSecond-timeInMiliSecond 
    
    let day = Math.floor(theDifference / milisecondInDay)
    let hour = Math.floor((theDifference % milisecondInDay)/milisecondInHour)
     let min = Math.floor((theDifference%milisecondInHour)/milisecondInMinutes)
    let sec = Math.floor((theDifference%milisecondInMinutes)/milisecondInSecond)
    

    let final = [day , hour , min , sec]

    
   
   
     document.querySelector(".day").textContent = day;
      document.querySelector(".hour").textContent = hour;
      document.querySelector(".min").textContent = min;
      document.querySelector(".sec").textContent = sec;
    

}
let timese = setInterval(theCountDownGenerator,1000)
theCountDownGenerator()