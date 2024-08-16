let colorString = "0123456789ABCDEF";


const color = document.querySelector(".color");
const button = document.querySelector(".btn");

function randomColorGenerator(){
    return Math.floor(Math.random()*colorString.length);
}

button.addEventListener("click",()=>{
    let hash = "#";
    for(i=0;i<6;i++){
        hash += colorString[randomColorGenerator()];
    }
    document.body.style.backgroundColor = hash;
    color.textContent = hash;
})









