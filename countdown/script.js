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

const endDate = document.querySelector(".end-date");
const formatterH5 = document.querySelectorAll(".formatter h5");

let futureDate = new Date(2024, 2 , 13 ,11 ,30);

const fYear = futureDate.getFullYear();
const fMonth = months[futureDate.getMonth()];
const fHours = futureDate.getHours();
const fMinutes = futureDate.getMinutes();
const fday = weekdays[futureDate.getDay()];
const fdate = futureDate.getDate();

endDate.textContent =`Giveaway ends on ${fday} ${fdate} ${fMonth}, ${fYear} ${fHours}:${fMinutes}am`




function remainingTime(){
    const currentDate = new Date();
    let t = futureDate.getTime() - currentDate.getTime();;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;
    
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t%oneDay)/oneHour);
    let minutes = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/oneSecond);

    const totalTime = [days , hours , minutes , seconds];

    formatterH5.forEach((items,index)=>{
        if(totalTime[index] < 10){
            items.textContent = `0${totalTime[index]}`;
        }else{
            items.textContent = totalTime[index];
        }
        
    })

    if(t<0 ){
        document.querySelector(".countdown-format").innerHTML = `<p> The 
        giveaway has expired.</p>`
    }
    


}

let time = setInterval(remainingTime,1000);

remainingTime();
