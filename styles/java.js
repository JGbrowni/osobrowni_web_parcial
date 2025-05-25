
/******** intro animation ********/

let intro = document.querySelector('.intro');
let letras = document.querySelector('.bienvenida');
let letrasSpan = document.querySelectorAll('.letrasb');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() =>{
        letrasSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            letrasSpan.forEach((span, index) => {
                setTimeout(() => {
                   span.classList.remove('active');
                   span.classList.add('fade'); 
                }, (span + 1) * 50);
            });
        }, 2650);

        setTimeout(() => {
            intro.style.top = '-110vh';
        }, 2700);
        

    });
});

/******** dropdown animation ********/

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark fa-sm'
    : 'fa-solid fa-bars fa-sm'
}

/******************* Galeria ***************** */

const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', showInformations))

function showInformations() {
  this.removeEventListener('click', showInformations)
  this.addEventListener('click', hideInformations)
  
  this.querySelector('.card-content-wrapper').style.display = 'block'
  this.querySelector('.card-content-wrapper').style.opacity = 0
  
  this.querySelector('.card-content').style.animationName = 'show'
  
  setTimeout(() => {
    this.querySelector('.card-content h2').style.display = 'block'
    this.querySelectorAll('.card-content p').forEach(paragraph => paragraph.style.display = 'block')
    
    this.querySelector('.card-content-wrapper').style.opacity = 1
  }, 1000)
}

function hideInformations() {
  this.addEventListener('click', showInformations)
  
  this.querySelector('.card-content-wrapper').style.display = 'none'
  this.querySelector('.card-content-wrapper').style.opacity = 0

  this.querySelector('.card-content h2').style.display = 'none'
  
  this.querySelectorAll('.card-content p').forEach(paragraph => paragraph.style.display = 'none')
  
  this.querySelector('.card-content').style.animationName = 'hide'   
}