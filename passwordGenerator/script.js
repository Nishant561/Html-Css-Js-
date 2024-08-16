const password = document.querySelector(".password");
const number = document.querySelector("#number");
const character = document.querySelector("#character")
const generate = document.querySelector(".generate")
const range = document.querySelector(".range")
const copy = document.querySelector(".copy")

generate.addEventListener("click",()=>{
   let pass=""
   let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   let numberinclude = '1234567890'
   let char ='!@#$%^&*'

   if(number.checked){
    string += numberinclude
  
   }
   if(character.checked){
    string +=char
   
   }

   for(i=1 ; i<= Number(document.querySelector(".range").value); i++){
    let position =Math.floor( Math.random() * string.length +1)
    pass += string.charAt(position)

   }

   password.value = pass


})


copy.addEventListener("click",()=>{
    let pass = password.value
    window.getSelection(password.value)
    window.navigator.clipboard.writeText(password.value)
})

// function changer(){
//     let rangeVlaue = range.value;
//     password.value = rangeVlaue
// }
