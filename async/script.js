// let nishant = new Promise((resolve,reject)=>{
//     let a = 1 + 3;
//     if(a == 2){
//         resolve("The promise is resolved")
//     }else{
//         reject("The promise is not resloved")
//     }
// })

// nishant.then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message)
// })




// async function nishant(){
//     try{
//         const response = await fetch('https://goweather.herokuapp.com/weather/ny')
//         let links = await response.json()
//         console.log(links)
//     }
//    catch{
//     console.log("hello")
//     }
// }

// nishant()



// let nishant = fetch('https://goweather.herokuapp.com/weather/ny')
// .then((nishant)=>{
//     return nishant.json()
// }).then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.log("Error")
// })





async function nishant(){

    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json();
        display(data)


    } catch {
        console.log("error")
    }




}

nishant()


function display(menu){
    const text = menu.map((item)=>{
        return `
        <div class="images">
        <img src="${item.url}" alt="img of cat"/>
    </div>
        `
    }).join("")
    document.querySelector(".ii").innerHTML = text
}