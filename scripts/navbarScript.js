// THIS IS TO GET THE TOGGLE BUTTON TO WORK

const bars = document.getElementById('open-ico');
const fallBars = document.getElementById('close-ico');
const dropdown = document.getElementById('drop-cont');

bars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    fallBars.classList.toggle('hidden');
    dropdown.classList.add('visible');
    dropdown.classList.remove('hidden');
});

fallBars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    fallBars.classList.toggle('hidden');
    dropdown.classList.remove('visible');
    dropdown.classList.add('hidden');
});

// THIS IS ALSO TO TOGGLE THE DROP-MENU ON THE MENU LINK
const accTogler= document.getElementById('acc-btn');
const shopTogler = document.getElementById('shop-btn');

const shopmenu = document.getElementById('shop-menu');
const accmenu = document.getElementById('acc-menu');

accTogler.addEventListener('click', () => {
    accmenu.classList.toggle('visible');

});

shopTogler.addEventListener('click', () => {
    shopmenu.classList.toggle('visible');
});




