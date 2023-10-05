



// NAV BAR DINAMICA

let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".nav-link")
let logo = document.querySelector("#logo")
// console.log(window)


window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    let scrolled = window.scrollY;



    if(scrolled > 100 && scrolled < 1200 ){
        navbar.classList.add('navbar-blur' ,'bg-1')
        logo.src = "http://127.0.0.1:5500/media/occhialineri.png"
        links.forEach((link) => {
            link.style.color = "white";
            link.addEventListener('mouseenter', ()=>{
                link.style.color = 'black'
                link.style.borderBottom = '2px solid black'
            })
            link.addEventListener('mouseleave', ()=>{
                link.style.color = 'white';
                link.style.borderBottom = "none";
            })

            });
    }
    else if(scrolled > 1200 && scrolled < 2000){
        navbar.classList.add('navbar-blur','bg-5')
        logo.src = "http://127.0.0.1:5500/media/occhii.png"
        links.forEach((link) => {
            link.style.color = "grey";
            link.addEventListener('mouseenter', ()=>{
                link.style.color = 'darkred'
                link.style.borderBottom = '2px solid darkred'
            })
            link.addEventListener('mouseleave', ()=>{
                link.style.color = 'grey';
                link.style.borderBottom = "none";
            })
            });

    }else if(scrolled > 2000){
      navbar.classList.remove('navbar-blur' ,'bg-5','bg-1','bg-6')
      logo.src = "http://127.0.0.1:5500/media/occhiali.png"
      links.forEach((link) => {
          link.style.color = "black"; 
          
          link.addEventListener('mouseenter', ()=>{
              link.style.color = 'white'
              link.style.borderBottom = '2px solid white'
          })
          link.addEventListener('mouseleave', ()=>{
              link.style.color = 'black';
              link.style.borderBottom = "none";
          })
          })
        }else{
        navbar.classList.remove('navbar-blur' ,'bg-5','bg-1','bg-6')
        logo.src = "http://127.0.0.1:5500/media/occhiali.png"
        links.forEach((link) => {
            link.style.color = "black"; 
            
            link.addEventListener('mouseenter', ()=>{
                link.style.color = 'white'
                link.style.borderBottom = '2px solid white'
            })
            link.addEventListener('mouseleave', ()=>{
                link.style.color = 'black';
                link.style.borderBottom = "none";
            })
            });
            
    }


});



// LOG IN


let bottone = document.querySelector('#buttonShow')
let logIn = document.querySelectorAll('#logIn')

bottone.addEventListener('click',()=>{
  logIn.forEach((log)=>{
    log.classList.toggle('d-none')
  })

  })




  
































// CONTEGGIO DATI


let primoNum = document.querySelector('#primoNum')
let secNum = document.querySelector('#secNum')
let terzNum = document.querySelector('#terzNum')
let confirm = false;


let obsErv = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting && confirm == false){
createInterval(100,primoNum,100)
createInterval(200,secNum,50)
createInterval(200,terzNum,50)
confirm = true
}

})
});      
obsErv.observe(primoNum);



function createInterval(number,elementoHt,velocità){
  let counter = 0
let intervallo = setInterval(()=>{
  if(counter < number){
counter++
elementoHt.innerHTML = counter;
}else{
  console.log('bloccato')
  clearInterval(intervallo)
}

}, velocità)
}








// // Dati di esempio per le card
// const cardData = [
//     {
//       nome: "Occhiali Prada Symbole",
//       descrizione: "380€",
//       immagine: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPR09Z/E1ABF05S0/SPR09Z_E1AB_F05S0_C_054_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.800.jpg"
//     },
//     {
//       nome: "Bermuda in popeline",
//       descrizione: "790€",
//       immagine: "https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH213/1VJPF0009/SPH213_1VJP_F0009_S_221_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.800.jpg"
//     },
//     {
//       nome: "Camicia maniche corte in cotone stampata",
//       descrizione: "950€",
//       immagine: "https://www.prada.com/content/dam/pradabkg_products/U/UCS/UCS438/1VISF03LS/UCS438_1VIS_F03LS_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.800.jpg"
//     },
//     {
//         nome: "Bomber oversize in nappa",
//         descrizione: "5.000€",
//         immagine: "https://www.prada.com/content/dam/pradabkg_products/S/SC5/SC540/1U1IF0065/SC540_1U1I_F0065_S_211_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.800.jpg"
//       },
//   ];
  
  
// //   Funzione per creare le card

//   function creaCard(card) {
//     const cardContainer = document.getElementById("cardContainer");
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
  
//     const nomeElement = document.createElement("h3");
//     nomeElement.textContent = card.nome;
  
//     const descrizioneElement = document.createElement("p");
//     descrizioneElement.textContent = card.descrizione;
  
//     const immagineElement = document.createElement("img");
//     immagineElement.src = card.immagine;
//     immagineElement.alt = card.nome;
  
//     cardElement.appendChild(nomeElement);
//     cardElement.appendChild(descrizioneElement);
//     cardElement.appendChild(immagineElement);
  
//     cardContainer.appendChild(cardElement);
//   }
  
//   //Ciclo attraverso i dati delle card e le creo

//   for (let i = 0; i < cardData.length; i++) {
//     creaCard(cardData[i]);
//   }














  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




  let reviews = [

    // { name : "Angelo" , description : "Qualità prezzo top"},
    // { name : "Lorenzo" , description: "Bei colori, sito pulito e funzionale"},
    // { name : "Davide" , description: "Questo sito e' una bomba"},
    // { name : "Mattia" , description: "Questo sito e' troppo bello"},
    // { name : "Luca" , description: "Ottimi prodotti spedizioni non sempre puntiali"},
    // { name : "Giulia" , description: "Interfaccia comoda e seria"},
    // { name : "Sahy" , description: "Si pioteva far di meglio, cambiate il developer"}

]

let swiperWrapper = document.querySelector('#swiperWrapper');
let userName = document.querySelector('#userName')
let userDescription = document.querySelector('#userDescription')
let addReviewBtn = document.querySelector('#addReviewBtn')




addReviewBtn.addEventListener('click',()=>{
  reviews.push({ name : userName.value , description : userDescription.value},);
  generateCard();
  userName.value = ''
  userDescription.value = ''
  swiper.update();
  })



function generateCard() {
  swiperWrapper.innerHTML='';
  reviews.forEach((review) =>{
      let div = document.createElement('div');
      div.classList.add("swiper-slide");
      div.innerHTML = `
      <div class="review-card">
      <p class="h3">${review.name}</p>
      <p class="lead">${review.description}</p>
      </div>
      `
      swiperWrapper.appendChild(div);
  });
}
generateCard();




 








  

