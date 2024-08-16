const info = document.querySelector(".information-section")
const buttons = document.querySelectorAll(".btn")
const content = document.querySelectorAll(".contents")
info.addEventListener("click",(e)=>{
    let id = e.target.dataset.id;
    if(id){
        buttons.forEach((btns)=>{
            btns.classList.remove("active")
            e.target.classList.add("active")
        })
        content.forEach((cc)=>{
            cc.classList.remove("active")
        })


    }
    const element = document.getElementById(id)
    element.classList.add("active")



})