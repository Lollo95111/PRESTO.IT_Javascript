


// CATTURA GLI ELEMENTI

let categoriesWrapper = document.querySelector('#categoriesWrapper');
let cardsWrapper = document.querySelector('#cardsWrapper');
let priceInput = document.querySelector('#priceInput');
let priceNumbers = document.querySelector('#priceNumbers')
let wordInput = document.querySelector('#wordInput')
// COLLEGAMENTO FILE .JSON

fetch('annunci.json').then( (response)=> response.json()).then((data)=>{
    console.log(data)



function setCategory(params){
    let categories = data.map((annuncio)=> annuncio.category);
// console.log(categories);

let unique = [];

categories.forEach( (category) =>{
    if(!unique.includes(category)){
        unique.push(category)

    }
});
// console.log(unique)




unique.forEach((category)=>{
    let div = document.createElement('div');
    div.classList.add("form-check");
    div.innerHTML = `
    
    <input class="form-check-input" type="radio" name="category" checked id="${category}">
    <label class="form-check-label" for="${category}">
      ${category}
    </label>
    
    `
    categoriesWrapper.appendChild(div);

})

    }

    setCategory()
    


// CREAZIONE CARD

   function showCards(array){

    array.sort((a,b)=> b.price - a.price)

    cardsWrapper.innerHTML = '';

    array.forEach((annuncio) => {

       let div = document.createElement('div')
       div.classList.add('card-custom', 'mb-5');
       div.innerHTML= `
       <img src="${annuncio.image}"alt="Nome Prodotto 1">
                <h4>${annuncio.name}</h3>
                <h5>${annuncio.category}</h4>
                <p class="card-text" >${annuncio.price} €</p>
       
       `
      cardsWrapper.appendChild(div)

    });

}


showCards(data);



let radios = document.querySelectorAll('.form-check-input');


// filtri per categoria

function filterByCategory(array){

let checked = Array.from(radios).find ( (button) => button.checked);

let categoria = checked.id;

if(categoria != 'all'){

let filtered = array.filter((annuncio) => annuncio.category == categoria);

return filtered;
}else{
    return array;
}
}




radios.forEach((button) => {
    button.addEventListener('click',()=>{
         globalFilter()
    })
})

function setPriceInput(){
    let maxPrice = data[0].price;
    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    priceNumbers.innerHTML = maxPrice;
}
setPriceInput();


priceInput.addEventListener('input',()=>{
    priceNumbers.innerHTML = priceInput.value;
    globalFilter()
})



function filterByPrice (array) {
    let filtered = array.filter((annuncio)=> +annuncio.price <= +priceInput.value)
        return filtered;

    
}

wordInput.addEventListener('input',()=>{
   globalFilter()
})

function filterByWord(array) {

    let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()))
    return filtered


}

function globalFilter(){
let filterCategory = filterByCategory(data);
let filterPrice = filterByPrice(filterCategory);
let filterWord = filterByWord(filterPrice);
showCards(filterWord);

}



}) ; 





