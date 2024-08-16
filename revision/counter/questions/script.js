
const questionCollection = document.querySelectorAll(".questions-collections");


questionCollection.forEach((e)=>{
    const button = e.querySelector(".fa-plus");
    const answers = e.querySelector(".answers")

    button.addEventListener("click",()=>{
        
     document.querySelectorAll(".answers").forEach((allAnswers)=>{
        if(allAnswers !== answers){
            allAnswers.classList.remove("active")
        }
     })

     answers.classList.toggle("active")
    })
})