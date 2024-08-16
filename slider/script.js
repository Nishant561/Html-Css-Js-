const slide = document.querySelectorAll(".slide img");
const nxtBtn = document.querySelector(".next-btn")
const preBtn = document.querySelector(".prev-btn")

let counter = 0;

slide.forEach((item,index)=>{
    item.style.left = `${index * 100}%`
})

nxtBtn.addEventListener("click",()=>{
    counter++;
    slider();
})
preBtn.addEventListener("click",()=>{
    counter--;
    slider()
})

function slider() {
    if (counter === slide.length){
        counter = 0;
    }
    if (counter < 0){
        counter = slide.length - 1;
    }
    slide.forEach((item, index) => {
        item.style.transform = `translateX(-${counter * 100}%)`; // Corrected line
    });
}