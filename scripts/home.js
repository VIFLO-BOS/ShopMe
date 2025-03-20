(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				entry.target.classList.toggle("scrolled", entry.isIntersecting);
			});
		},
		{ threshold: 0.1 } // Trigger when 20% of the element is visible
	);
	document.querySelectorAll("section").forEach((el) => observer.observe(el));
})();

// THIS IS FOR THE MARQUEE

document.addEventListener("DOMContentLoaded", () => {
	const marquee = document.querySelector(".mar-text");
	if (!marquee) return; // Prevent errors if element is missing

	let position = window.innerWidth; // Start from right
	let speed = 1.5;
	let isPause = false;

	function moveMarquee() {
		if (!isPause) {
			// Fix: Move only when NOT paused
			position -= speed; // Move left
			if (position < -marquee.clientWidth) {
				position = window.innerWidth;
			}
			marquee.style.transform = `translateX(${position}px)`;
		}
		requestAnimationFrame(moveMarquee);
	}

	moveMarquee();

	marquee.addEventListener("click", () => {
		isPause = !isPause; // Toggle pause state
	});
});

// THIS IS TO GET THE TOGGLE BUTTON TO WORK

const bars = document.getElementById("open-ico");
const fallBars = document.getElementById("close-ico");
const dropdownMenuContainer = document.getElementById("modaDrop-cont");
const closeDropdownMenuContainer =
	document.getElementById("closeModaDrop-cont");
const dropShopMenuContainerToggler = document.getElementById(
	"dropShopMenuContainerToggler"
);
const dropShopMenuContainer = document.getElementById("dropShopMenuContainer");
console.log(dropdownMenuContainer);

bars.addEventListener("click", (e) => {
	e.preventDefault();
	bars.classList.toggle("hidden");
	fallBars.classList.toggle("hidden");
	dropdownMenuContainer.classList.remove("hidden");
	dropdownMenuContainer.classList.add("visible");
});

fallBars.addEventListener("click", (e) => {
	e.preventDefault();
	bars.classList.toggle("hidden");
	fallBars.classList.toggle("hidden");
	dropdownMenuContainer.classList.remove("visible");
	dropdownMenuContainer.classList.add("hidden");
});

closeDropdownMenuContainer.addEventListener("click", (e) => {
	e.preventDefault();
	dropdownMenuContainer.classList.add("hidden");
	bars.classList.toggle("hidden");
	fallBars.classList.toggle("hidden");
});

dropShopMenuContainerToggler.addEventListener("click", (e) => {
	e.preventDefault();
	dropShopMenuContainer.style.display = "flex";
});

dropShopMenuContainer.addEventListener('mouseleave', (e) => {
	e.preventDefault();
	dropShopMenuContainer.style.display = 'none';
})

// THIS IS ALSO TO TOGGLE THE DROP-MENU ON THE MENU LINK
// Select buttons and menus
const accToggler = document.getElementById("acc-btn");
const shopToggler = document.getElementById("shop-btn");
const categoriesToggler = document.getElementById("categories-btn");

const shopMenu = document.getElementById("shop-menu");
const categoriesMenu = document.getElementById("modaSheet");
const accMenu = document.getElementById("acc-menu");

// Function to hide all menus
function hideAllMenus() {
	accMenu.style.display = "none";
	shopMenu.style.display = "none";
	categoriesMenu.classList.add("hidden");
}

// Event listener for Account button
accToggler.addEventListener("mouseenter", () => {
	accMenu.style.display = "block";
	shopMenu.style.display = "none";
});

// Event listener for Shop button
shopToggler.addEventListener("mouseenter", () => {
	shopMenu.style.display = "block";
	accMenu.style.display = "none";
});

// Event listener for Categories button
categoriesToggler.addEventListener("click", (event) => {
	categoriesMenu.classList.toggle("hidden");
	event.stopPropagation(); // Prevents immediate closing when clicking the button
});

// Close categories menu when mouse leaves it
categoriesMenu.addEventListener("mouseleave", () => {
	categoriesMenu.classList.add("hidden");
});

// Close menus when clicking anywhere outside of them
document.addEventListener("click", (event) => {
	if (
		!accToggler.contains(event.target) &&
		!shopToggler.contains(event.target) &&
		!categoriesToggler.contains(event.target) &&
		!accMenu.contains(event.target) &&
		!shopMenu.contains(event.target) &&
		!categoriesMenu.contains(event.target)
	) {
		hideAllMenus();
	}
});

// Alternative: Close menus when the user hovers outside all menus
document.addEventListener("mouseover", (event) => {
	if (
		!accToggler.contains(event.target) &&
		!shopToggler.contains(event.target) &&
		!categoriesToggler.contains(event.target) &&
		!accMenu.contains(event.target) &&
		!shopMenu.contains(event.target) &&
		!categoriesMenu.contains(event.target)
	) {
		hideAllMenus();
	}
});

// Detect hover outside the menus and close them
document.addEventListener("mouseover", (event) => {
	if (
		!accToggler.contains(event.target) &&
		!shopToggler.contains(event.target) &&
		!categoriesToggler.contains(event.target) &&
		!accMenu.contains(event.target) &&
		!shopMenu.contains(event.target) &&
		!categoriesMenu.contains(event.target)
	) {
		hideAllMenus();
	}
});

//this is to change the navbar log color
const navLogo = document.querySelectorAll(".nav-logo");
for (let i = 0; i < navLogo.length; i++) {
	if (i % 2 === 0) {
		navLogo[i].style.color = "rgb(41, 58, 136)";
		// console.log(navLogo[i] + `is even`);
	} else {
		navLogo[i].style.color = "rgb(240, 134, 14)";
		// console.log(navLogo[i] + `is odd`);
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
// console.log(aniBackEl);

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
	const productAds = document.getElementById("product-ads");
	// const rightSiderAds = document.getElementById('rightSider-ads');

	function changeBanner() {
		productAds.style.opacity = 0.01;
		// rightSiderAds.style.opacity = 0.01;

		setTimeout(() => {
			i = (i + 1) % listOfBanners.length;
			productAds.src = listOfBanners[i];
			productAds.style.opacity = 1;
			// console.log(productAds.src);
		}, 500);
	} // Closing changeBanner function

	// function rightSiderAdsChanger() { // Moved this function outside
	//     setTimeout(() => {
	//         i = (i + 1) % listOfBanners.length;
	//         rightSiderAds.src = listOfBanners[i];
	//         rightSiderAds.style.opacity = 1;
	//         // console.log(productAds.src);
	//     }, 500);
	// } // Closing rightSiderAdsChanger function

	setInterval(changeBanner, 3000);
	// setInterval(rightSiderAdsChanger, 3500);
})();

(() => {
	//this is to get the date in the footer text current!
	const footerYear = document.getElementById("footerYear");
	const date = new Date().getFullYear();
	footerYear.textContent = date;
})();
