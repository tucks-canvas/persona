/* Script: Side-Menu */

var sidemenu = document.getElementById("sidemenu");

function openmenu()
{

    sidemenu.style.right = "0";

}

function closemenu()
{

    sidemenu.style.right = "-250px";

}

/* Script: Filter */

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {

   linkWork.forEach(l=> l.classList.remove('active-work'))
   this.classList.add('active-work')

}

linkWork.forEach(l=> l.addEventListener("click", activeWork))





