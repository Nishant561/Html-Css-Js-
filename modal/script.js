const btn = document.querySelector(".open");
const mainDiv = document.querySelector(".main-div")
const model = document.querySelector(".main-div1");

btn.addEventListener("click",()=>{
    model.classList.remove("dd")
    mainDiv.style.visibility = "hidden";
    model.classList.add("show")
    
})