const place = document.querySelector(".city");
const temperature = document.querySelector(".temperature")
const type = document.querySelector(".type")
const button = document.querySelector(".fa-magnifying-glass");
const value = document.querySelector(".value")
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

  
  let apiKey = 'b21a2b6199f3ebf8be037d9431c73a85'
  
  let date = new Date();
  let TodaysDate = date.getDate();
  let year = date.getFullYear();
  let day = weekdays[date.getDay()]
  let month = months[date.getMonth()];
  
  button.addEventListener("click",()=>{
      let text = value.value;
      weather(text)
  })
function dateSetter(){
    document.querySelector(".day").textContent = `${day}`
    document.querySelector(".date").textContent = `${TodaysDate} ${month}, ${year}`
}



async function weather(city){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        let data = await response.json()
        place.textContent = data.name;
        temperature.textContent = `${(data.main.temp - 273.15).toFixed(2)} deg C`;
        type.textContent = data.weather[0].main;
        // document.querySelector(".fa-cloud").innerHTML = `<img src="${data.weather[0].icon}">`
        document.querySelector(".Perception").textContent = data.main.pressure;
        document.querySelector(".humidity").textContent = data.main.humidity;
        document.querySelector(".wind").textContent = data.wind.speed;
    }
    catch{
        console.log("error")
    }
}


window.addEventListener("DOMContentLoaded",()=>{
    dateSetter()
    weather("kapan")
})




