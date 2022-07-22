//function mobileMenu(){}


// Responsive meni
const mobileMenu = (element) => {
   let menu = document.querySelector('.header ul');
  // let btn = document.querySelector('.header button');
  let btn = element;

  if(btn.innerText === 'MENU'){
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
  } else {
    menu.style.display = 'none';
    btn.innerText = 'MENU';
  }
}


// Gelerija
let rightBtn = document.querySelector('.slider-wrapper #right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-wrapper .slider-images img');

//console.log('duzina: ' + pictures.length);

let imgNum = 0;

// Pomeranje slike u desno
const moveRight =  ()=>{
  displayNone();
  imgNum++;
  if(imgNum === pictures.length){
    imgNum = 0;
  }
  console.log(imgNum);
pictures[imgNum].style.display = 'block';
}

// Pomeranje slike u levo
const moveLeft = ()=>{
  // console.log('left');
     displayNone();
     imgNum--;

     if(imgNum === -1){
       imgNum = pictures.length-1;
     }
     pictures[imgNum].style.display = 'block';
     console.log(imgNum);
 };


// Event listeneri za btn strelice
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click',  moveLeft);


// Funkcija koja sakriva sve slike
const displayNone = ()=>{
  pictures.forEach((img)=>{
    img.style.display = 'none';
  })
}


// ************ Portfolio  ************
const portfolioSort = (button)=>{

    let category = button.getAttribute('data-category');
   // console.log(category);

  let portfolioItems = document.querySelectorAll('.portfolio-single-item');

        portfolioItems.forEach((item)=>{
            item.style.display = 'none';
        })

      if(category === 'sve'){
          portfolioItems.forEach((item)=>{
              item.style.display = 'block';
          })
      }

      portfolioItems.forEach((item)=>{
           // console.log(item.getAttribute('data-category'));
            if(item.getAttribute('data-category').includes(category)){
                item.style.display = 'block';

            }
      });

}


// ******************* otvaranje modal
const openModal = ()=>{
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

        modalWindow.style.display = 'block';
        overlay.style.display = 'block';

}


// Zatvaranje modal
const closeModal = ()=>{
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');

      modalWindow.style.display = 'none';
      overlay.style.display = 'none';

}