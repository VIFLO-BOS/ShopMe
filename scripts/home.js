// THIS IS TO GET THE TOGGLE BUTTON TO WORK

const bars = document.getElementById("open-ico");
const fallBars = document.getElementById("close-ico");
const dropdown = document.getElementById("drop-cont");

bars.addEventListener("click", () => {
    bars.classList.toggle("hidden");
    fallBars.classList.toggle("hidden");
    dropdown.classList.add("visible");
    dropdown.classList.remove("hidden");
});

fallBars.addEventListener("click", () => {
    bars.classList.toggle("hidden");
    fallBars.classList.toggle("hidden");
    dropdown.classList.remove("visible");
    dropdown.classList.add("hidden");
});

// THIS IS ALSO TO TOGGLE THE DROP-MENU ON THE MENU LINK
// Select buttons and menus
const accToggler = document.getElementById("acc-btn");
const shopToggler = document.getElementById("shop-btn");

const shopMenu = document.getElementById("shop-menu");
const accMenu = document.getElementById("acc-menu");

// Event listener for Account button
accToggler.addEventListener("click", () => {
    accMenu.style.display = "block"; // Show/hide account menu
    shopMenu.style.display = "none"; // Show/hide account menu
});

// Event listener for Shop button
shopToggler.addEventListener("click", () => {
    shopMenu.style.display = "block"; // Show/hide shop menu
    accMenu.style.display = "none"; // Show/hide shop menu
});

// Close menus when clicking outside
document.addEventListener("click", (event) => {
    // Check if the clicked element is not a toggler or menu
    if (!accToggler.contains(event.target) &&
        !shopToggler.contains(event.target) &&
        !accMenu.contains(event.target) &&
        !shopMenu.contains(event.target)
    ) {
        accMenu.style.display = "none";
        shopMenu.style.display = "none";
    }
});

//this is to change the navbar log color
const navLogo = document.querySelectorAll(".nav-logo");
for (let i = 0; i < navLogo.length; i++) {
    if (i % 2 === 0) {
        navLogo[i].style.color = "rgb(41, 58, 136)";
        console.log(navLogo[i] + `is even`);
    } else {
        navLogo[i].style.color = "rgb(240, 134, 14)";
        console.log(navLogo[i] + `is odd`);
    }
}

// THIS IS THE JUMBOTRON SECTION

const url = [
    "/ShopMe/images/bags/aniBag1.jpeg",
    "/ShopMe/images/bags/anibag2.jpeg",
    "/ShopMe/images/bags/anibag3.jpeg",
    "/ShopMe/images/bags/anibag4.jpeg",
    "/ShopMe/images/bags/anibag5.jpeg",
    "/ShopMe/images/bags/aniBag6.jpeg",
];

const aniBackEl = document.querySelector(".hero-ctn");
console.log(aniBackEl);

const aniBack = () => {
    setInterval(() => {
        const i = Math.floor(Math.random() * url.length);
        aniBackEl.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.915), rgba(0, 0, 0, 0.967)), url(${url[i]})`;
        // console.log(url[i]); // Logs the selected image path
    }, 50000); // 5-second interval
};

aniBack();

// this is for the album section


// this is an immediate invoking function to change the image in the feature banner section
(() => {
    const listOfBanners = [
        "./images/ads/1.jpeg",
        "./images/ads/2.jpeg",
        "./images/ads/3.jpeg",
        "./images/ads/4.jpeg",
        "./images/ads/5.jpeg",
        "./images/ads/6.jpeg",
        "./images/ads/7.jpeg",
        "./images/ads/8.jpg",
        "./images/ads/9.jpeg",
        "./images/ads/10.jpeg",
        "./images/ads/11.jpeg",
        "./images/ads/12.jpeg",
        "./images/ads/13.jpeg",
    ];

    let i = 0;
    const productAds = document.getElementById('product-ads');

    function changeBanner() {
        productAds.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % listOfBanners.length;
            productAds.src = listOfBanners[i];
            productAds.style.opacity = 1;
            console.log(productAds.src);

        }, 500)

    }
    setInterval(changeBanner, 3000);
})()