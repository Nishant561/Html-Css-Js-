let count = 0;
const button = document.querySelectorAll(".style");
const value = document.querySelector(".value");
button.forEach((bts)=>{
    bts.addEventListener("click",(e)=>{
       let id =e.target.dataset.id
      if(id==="de"){
        count--;
        value.textContent = count;
      }else if(id==="re"){
        count=0;
        value.textContent = count;
      }else if(id==="in"){
        count++;
        value.textContent = count;
      }
        if(count>0){
            value.style.color = "green";
        }else if(count<0){
            value.style.color = "red";
        }else{
            value.style.color = "black"
        }
    })
})