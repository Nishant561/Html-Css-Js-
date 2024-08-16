const bars = document.querySelector(".fa-bars");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links");
bars.addEventListener("click",()=>{
    let heightOfLinks = links.getBoundingClientRect().height;
    let heightOfLinksContainer = linksContainer.getBoundingClientRect().height;
    console.log(heightOfLinksContainer)
    if(heightOfLinksContainer === 0){
        linksContainer.style.height = heightOfLinks+"px";

    }else{
        linksContainer.style.height =0+"px";
    }
})



