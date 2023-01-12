export {};

declare global {
	interface Window {
		toggleMenu: any;
	}
}

const closeMenuOnEsc = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		const hamburger = document.getElementById("hamburger");
		const nav = document.getElementById("nav");

		hamburger?.classList.remove("open");
		nav?.classList.remove("open");

		window.removeEventListener("keydown", closeMenuOnEsc);
	}
};

const toggleMenu = () => {
	const hamburger = document.getElementById("hamburger");
	const nav = document.getElementById("nav");

	hamburger?.classList.toggle("open");
	nav?.classList.toggle("open");

	const isOpen = nav?.classList.contains("open");

	if (isOpen) {
		window.addEventListener("keydown", closeMenuOnEsc);
	} else {
		window.removeEventListener("keydown", closeMenuOnEsc);
	}
};

window.toggleMenu = toggleMenu;
