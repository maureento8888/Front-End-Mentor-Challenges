// Selectors
const navBurger = document.querySelector(".nav-burger");
const nav = document.querySelector(".nav-modal");

// Toggle Functions
const openModal = () => {
	navBurger.addEventListener("click", () => {
		nav.classList.toggle("modal-active");
	});
};

openModal();
