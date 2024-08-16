const bars = document.querySelector(".bar");
const sideBar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
bars.addEventListener("click",()=>{
    sideBar.classList.toggle("show");
})
cross.addEventListener("click",()=>{
    if(sideBar.classList.contains("show")){
        sideBar.classList.remove("show");
    }
})
