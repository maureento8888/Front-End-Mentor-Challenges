// Selectors
const navBurger = document.querySelector(".nav-burger");
// const navBurgerClose = document.querySelector(".nav-burger-close");
const nav = document.querySelector(".nav-modal");

// Toggle Functions
const openModal = () => {
	// Toggle mobile navigation
	navBurger.addEventListener("click", () => {
		nav.classList.toggle("modal-active");
	})
};

openModal();
