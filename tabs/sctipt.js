const contents = document.querySelectorAll(".contents");
const btns = document.querySelectorAll(".btn-tabs");
const article = document.querySelector(".article-content");

article.addEventListener("click",(e)=>{
    let id = e.target.dataset.id;
    if(id){
        btns.forEach((button)=>{
            button.classList.remove("active")
            e.target.classList.add("active");
        })

        contents.forEach((articles)=>{
            articles.classList.remove("active");
        })
        const elements = document.getElementById(id);
        elements.classList.add("active");

    }
})