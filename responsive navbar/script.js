const bars = document.querySelector(".bar");
const links = document.querySelector(".nav-1");

bars.addEventListener("click",()=>{
    links.classList.toggle("show-links")
    if(bars.classList.contains("fa-bars")){
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
    } else if(bars.classList.contains("fa-xmark")){
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    }
})

