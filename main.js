/* Script: Side-Menu */

const navmenu = document.getElementById('nav-menu');
const navtoggle = document.getElementById('nav-toggle');
const navclose = document.getElementById('nav-close');

if(navtoggle){

    navtoggle.addEventListener('click', ()=>{

        navmenu.classList.add('show-menu');

    })

}

if(navclose){

    navclose.addEventListener('click', ()=>{

        navmenu.classList.remove('show-menu');

    })

}

/* Script: Slider */

let slides = document.querySelectorAll('.favourite__contents');
let index = 0;

function next(){

    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

}

function previous(){

    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');

}

/* Script: Auto Play */

setInterval(next, 9000); 

