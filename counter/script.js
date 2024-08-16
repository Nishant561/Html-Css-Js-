let count = 0;


const value = document.querySelector(".value");
const button = document.querySelectorAll(".btn");


button.forEach((btn)=>{
   
    btn.addEventListener("click",(e)=>{
        let valueClass = e.target.classList;
        if(valueClass.contains("decrease")){
            count--;
            value.textContent = count;
        }else if(valueClass.contains( "increase")){
            count++;
            value.textContent = count;
        }else{
            count = 0;
            value.textContent = count;
        }

        if(count>0){
            value.style.color = "green";
        }if(count<0){
            value.style.color = "red";
        }if(count === 0){
            value.style.color="#000";
        }
    })
})