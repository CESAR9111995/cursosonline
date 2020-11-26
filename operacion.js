const header = document.querySelector('header');
const body = document.querySelector('body');
const boton = document.querySelector('#modo-oscuro');
var Menu = document.querySelectorAll('header ul li');

function cambiarColor(){
    if(header.classList.contains('cabecera')){
        header.classList.remove('cabecera');
        body.style.backgroundColor = '#EDF3F3';
        boton.classList.remove('luna2');
        for(let i = 0; i < Menu.length; i++){
            Menu[i].classList.toggle('textomenu-mod-oscuro');
        }
    } else{
 header.classList.add('cabecera');
 boton.classList.add('luna2');
 body.style.backgroundColor = 'black';
 for(let i = 0; i < Menu.length; i++){
     Menu[i].classList.toggle('textomenu-mod-oscuro');
 }
    }
  
}

document.querySelector('#modo-oscuro').addEventListener('click', cambiarColor);
