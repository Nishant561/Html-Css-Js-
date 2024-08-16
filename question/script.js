const showBtn = document.querySelectorAll(".fa-plus");
const article = document.querySelectorAll("article");

showBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      let ss =   e.currentTarget.parentElement.parentElement.parentElement;
      let yy = ss.querySelector(".answers")
      article.forEach((e)=>{
        if(ss != e){
              yy.classList.remove("show-text")

        }
        yy.classList.toggle("show-text")
      })
    })
})


