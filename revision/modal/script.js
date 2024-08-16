const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");


open.addEventListener("click",()=>{
    document.querySelector(".content1").style.zIndex = "1";
    document.querySelector(".content").style.zIndex = "0";
    if(!overlay.classList.contains("active")){
        overlay.classList.add("active")
    }
})

close.addEventListener("click",()=>{
    document.querySelector(".content1").style.zIndex = "0";
    document.querySelector(".content").style.zIndex = "1";
    if(overlay.classList.contains("active")){
        overlay.classList.remove("active")
    }
})