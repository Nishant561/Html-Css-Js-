const forms  = document.querySelector(".forms");
const itemsValue = document.querySelector(".values");
const alert_message = document.querySelector(".alert");
const submit = document.querySelector(".submit-btn");
const grocery_container = document.querySelector(".grocery-container")

window.addEventListener("DOMContentLoaded",setUpItems)
grocery_container.addEventListener("click",(e)=>{
    let dataId = e.target.dataset.id;
    const id = e.target.parentElement.parentElement.dataset.id;

    if(dataId === 'del'){
        const parent = e.target.parentElement.parentElement;
        grocery_container.removeChild(parent)
        removeFromLocalStorage(id)
    }
    if(dataId === 'edit'){
        
    }
})



forms.addEventListener("submit",formSubmit)


function formSubmit(e){
    e.preventDefault();
    const values = itemsValue.value;

    if(values){
        const id = new Date().getTime().toString();
        const element = document.createElement("div");
        element.classList.add("grocery-list");
        let attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="items-list">${values}</p>
        <div class="button-container">
            
                <i class="fa-regular items-btn fa-pen-to-square" data-id="edit"></i>
         
           
                <i class="fa-solid  items-btn fa-trash" data-id="del"></i>

        </div>`
        
        grocery_container.appendChild(element)
        alerts("items added successfully","success")
        addTOLocalstorage(id,values)
        setBackToDefault()

    }else{
        
        alerts("please enter the value","danger")
    }




}

function setBackToDefault(){
    itemsValue.value = ""
}

function alerts(message,action){
    alert_message.classList.add(`alert-${action}`)
    alert_message.textContent = message

    setTimeout(()=>{
        alert_message.textContent = ""
        alert_message.classList.remove(`alert-${action}`)
    },1000)
}

function addTOLocalstorage(id,value){
    const items = {id,value}
    let checkItems = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];
   checkItems.push(items);
   console.log(checkItems)
   localStorage.setItem("list",JSON.stringify(checkItems));
}

function removeFromLocalStorage(id){
    let checkItems = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];
    checkItems = checkItems.filter((item)=>{
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(checkItems));
}

function setUpItems(){
    const checkItems = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[]
    if(checkItems.length > 0){
        checkItems.forEach((item)=>{
            createItems(item.id,item.value)
        })
    }
}

function createItems(id, value){
    const element = document.createElement("div");
        element.classList.add("grocery-list");
        let attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="items-list">${value}</p>
        <div class="button-container">
            
                <i class="fa-regular items-btn fa-pen-to-square" data-id="edit"></i>
         
           
                <i class="fa-solid  items-btn fa-trash" data-id="del"></i>

        </div>`
        
        grocery_container.appendChild(element)
      
        setBackToDefault()

}