export {};

declare global {
	interface Window {
		toggleMenu: () => void;
	}
}

const closeMenuOnEsc = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		const hamburger = document.getElementById("hamburger");
		const nav = document.getElementById("nav");

		hamburger?.classList.remove("open");
		nav?.classList.remove("open");
		document.body.style.overflowY = "auto";

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
		document.body.style.overflowY = "hidden";
		window.addEventListener("keydown", closeMenuOnEsc);
	} else {
		document.body.style.overflowY = "auto";
		window.removeEventListener("keydown", closeMenuOnEsc);
	}
};

window.toggleMenu = toggleMenu;
