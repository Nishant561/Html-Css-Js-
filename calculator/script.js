const buttons = document.querySelectorAll(".button")
const input = document.querySelector(".input")

let string = '';
Array.from(buttons).forEach((btns)=>{
    btns.addEventListener("click",(e)=>{
        if(e.target.innerHTML == 'AC'){
            input.value = ''
            string = ''
        }else if(e.target.innerHTML == "Del"){
            string= input.value
            input.value = string.substring(0,string.length - 1);
            string= input.value
        }else if(e.target.innerHTML == '='){

            string = eval(string);
            input.value= string
            
        }else{
            string += e.target.innerHTML;
        input.value = string;
        }
        


        
    })
})


