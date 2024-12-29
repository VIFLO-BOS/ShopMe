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
// Select buttons and menus
const accToggler = document.getElementById('acc-btn');
const shopToggler = document.getElementById('shop-btn');

const shopMenu = document.getElementById('shop-menu');
const accMenu = document.getElementById('acc-menu');

// Event listener for Account button
accToggler.addEventListener('click', () => {
    accMenu.style.display = "block" // Show/hide account menu
    shopMenu.style.display = "none"; // Show/hide account menu

});

// Event listener for Shop button
shopToggler.addEventListener('click', () => {
    shopMenu.style.display = "block"; // Show/hide shop menu
    accMenu.style.display = "none"; // Show/hide shop menu

});

// Close menus when clicking outside
document.addEventListener('click', (event) => {
    // Check if the clicked element is not a toggler or menu
    if (
        !accToggler.contains(event.target) &&
        !shopToggler.contains(event.target) &&
        !accMenu.contains(event.target) &&
        !shopMenu.contains(event.target)
    ) {
        accMenu.style.display = "none";
        shopMenu.style.display = "none";
    }
});


//this is to change the navbar log color
const navLogo = document.querySelectorAll('.nav-logo');
for (let i = 0; i < navLogo.length; i++) {
    if (i % 2 === 0) {
        navLogo[i].style.color = "rgb(41, 58, 136)";
        console.log(navLogo[i] + `is even`)
    } else {
        navLogo[i].style.color = "rgb(240, 134, 14)";
        console.log(navLogo[i] + `is odd`)
    }
}




// THIS IS THE JUMBOTRON SECTION

const url = [
    // '/ShopMe/images/animations/33bb21e074e40751e2fce2b593be2e19.mp4',
    '/ShopMe/images/animations/ea41f6fa6d717bbb4cb360fa0a2259be.mp4',
    '/ShopMe/images/animations/9383f3dc376a03f487abe3c5f945e63d.mp4',
    '/ShopMe/images/animations/be314a6761d0795919f2b6be86b7cf7c.mp4',
    '/ShopMe/images/animations/d3e5b1018b878fa8365b612052af5084.mp4',
    '/ShopMe/images/animations/d210d0cf656cb2a4cb34374c994ebf3a.mp4',
    '/ShopMe/images/animations/ea41f6fa6d717bbb4cb360fa0a2259be.mp4',
    '/ShopMe/images/animations/f6c8282ccf611fcba48ec8affda85124.mp4'
];

const videoElement = document.getElementById('data-slide');

const jumbotronSlider = () => {
    let i;
    setInterval(() => {
        i = Math.floor(Math.random() * url.length);
        videoElement.src = `${url[i]}`;  
        console.log(url[i]);
        i = (i + 1) % url.length;
    }, 12000);
};

jumbotronSlider();










