const bars = document.querySelector(".bars");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links")
bars.addEventListener("click",()=>{
    linksContainer.classList.toggle("active")
    // const height1 = linksContainer.getBoundingClientRect().height;
    const height2 = links.getBoundingClientRect().height;
    console.log(height2)
})




