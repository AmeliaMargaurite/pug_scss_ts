export {};

declare global {
	interface Window {
		toggleMenu: any;
	}
}

const toggleMenu = () => {
	const hamburger = document.getElementById("hamburger");
	const nav = document.getElementById("nav");
	hamburger?.classList.toggle("open");
	nav?.classList.toggle("open");
};

window.toggleMenu = toggleMenu;
