const bars = document.querySelector(".fa-bars");
const linkContainer = document.querySelector(".links-container");
const link = document.querySelector(".link");

let height = parseInt(link.getBoundingClientRect().height);
console.log(typeof height)
bars.addEventListener("click",()=>{
   
    if(linkContainer.getBoundingClientRect().height === 0){
        
        linkContainer.style.height = `${height}px`;

    }else{
        linkContainer.style.height = "0px";
    }
})


