const mediaQuery = window.matchMedia("(max-width: 1280px)");

let burger = document.getElementById("burger");

let nav_links = document.querySelector(".nav-links");
let nav_buttons = document.querySelector(".nav-buttons");

let body = document.body;

const toggleBurger = () => {
	burger.classList.toggle("clicked");
	nav_buttons.classList.toggle("hidden");
	nav_links.classList.toggle("hidden");
	body.classList.toggle("menuOpen");
};

burger.addEventListener("click", (e) => {
	toggleBurger();
});

/* contactButton.addEventListener("click", (e) => {
	if (mediaQuery.matches) toggleBurger();
});
 */
function handleChange(event) {
	if (event.matches) {
		burger.classList.remove("hidden");
		nav_buttons.classList.add("hidden");
		nav_links.classList.add("hidden");
	} else {
		burger.classList.add("hidden");
		nav_buttons.classList.remove("hidden");
		nav_links.classList.remove("hidden");
	}
}

mediaQuery.addEventListener("change", handleChange);
handleChange(mediaQuery);
