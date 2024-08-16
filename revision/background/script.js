const body = document.querySelector("body");
const button = document.querySelector(".buts");
const stop = document.querySelector(".stop");
const hex = "0123456789ABCDEF";
const span = document.querySelector(".color")
function randomNumberGenerator(){
    let code ="#"
  for(let i=1 ; i<=6 ;i++){
    code += hex[Math.floor(Math.random()*hex.length)]
  }
  body.style.backgroundColor = code;
  span.textContent = code;
}

let time;
button.addEventListener("click",()=>{
    clearInterval(time)
 time =setInterval(randomNumberGenerator,1000);
})

stop.addEventListener("click",()=>{
    clearInterval(time);
})

