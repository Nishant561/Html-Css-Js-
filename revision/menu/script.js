const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    
  ];
const article = document.querySelector("article");
const buttonSection = document.querySelector(".button-section");
window.addEventListener("DOMContentLoaded",()=>{
  displayItems(menu);
  dynamicButton(menu)
})

function displayItems(menus){
  const text = menu.map((items)=>{
    return`  <div class="article-container">
    <div class="img-container">
        <img  src="${items.img}">
    </div>
    <div class="article-description">
        <div class="price-heading">
            <h4>${items.title}</h4>
            <p>$${items.price}</p>
        </div>
        <div class="description">
            ${items.desc}
        </div>
        
    </div>
</div>`
  }).join("");
  

  article.innerHTML = text;

}


function dynamicButton(menus){
  const buttonCategory = menus.reduce((values,items)=>{
                          if(!values.includes(items.category)){
                            values.push(items.category)
                          }

                          return values;
  },["all"])

  const displayButton = buttonCategory.map((items,index)=>{
    return `<button class="indicators" data-id="${items}">${items} </button>`
  }).join("")

  buttonSection.innerHTML = displayButton;

  const buttonSelection = buttonSection.querySelectorAll(".indicators")
  buttonSelection.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategories = menu.filter((item) => { // Change 'items' to 'item'
            if (item.category === category) {
                return item;
            }
        });

        if (category === 'all') {
            displayItems(menu);
        } else {
            displayItems(menuCategories);
        }
    });
});



}


