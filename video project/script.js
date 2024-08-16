const btn = document.querySelector(".btn");
const swi = document.querySelector(".switch");
const video = document.querySelector(".video-container")
const pre = document.querySelector(".pre-loader")
btn.addEventListener("click",(e)=>{
    if(!swi.classList.contains("slide")){
        swi.classList.add("slide");
        video.pause();
    }else{
        swi.classList.remove("slide");
        video.play();
    }
})

window.addEventListener("load",()=>{
    pre.classList.add("hide");
})