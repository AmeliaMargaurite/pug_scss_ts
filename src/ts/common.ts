import { throttleFunction } from "./helpers";

export {};

declare global {
	interface Window {
		toggleMenu: () => void;
		closeMenu: () => void;
		toggleMode: () => void;
	}
}

const closeMenuOnEsc = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		closeMenu();
	}
};

const closeMenu = () => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
	const nav = document.getElementById("main-menu");

	hamburger?.classList.remove("open");
	nav?.classList.remove("open");

	document.body.style.overflowY = "auto";
	hamburger.setAttribute("aria-expanded", "false");

	window.removeEventListener("keydown", closeMenuOnEsc);
};

const openMenu = () => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
	const nav = document.getElementById("main-menu");

	hamburger?.classList.add("open");
	nav?.classList.add("open");

	document.body.style.overflowY = "hidden";
	window.addEventListener("keydown", closeMenuOnEsc);
	hamburger.setAttribute("aria-expanded", "true");
};

const toggleMenu = (openState = true) => {
	const nav = document.getElementById("main-menu");

	const isOpen = nav?.classList.contains("open");

	if (isOpen) {
		closeMenu();
	} else {
		openMenu();
	}
};

const toggleMenuOnWindowSize = (e: WindowEventHandlers) => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;

	if (window.innerWidth <= 768) {
		hamburger.setAttribute("aria-expanded", "false");
	} else {
		closeMenu();
		hamburger.setAttribute("aria-expanded", "true");
	}
};

window.addEventListener(
	"resize",
	throttleFunction(toggleMenuOnWindowSize, 1500)
);

window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;

/**
 * Light/Dark Mode
 */

const root = document.querySelector(":root") as HTMLElement;

// TOGGLE
const toggleMode = (forceMode = "dark") => {
	// console.log(forceMode);
	if (isLightMode()) {
		setMode("dark");
	} else {
		setMode("light");
	}
};

const setMode = (mode: "light" | "dark") => {
	const toggleText = document.getElementById("light-dark-toggle__label");
	const labelText = document.getElementById("light-dark-mode-btn__label");
	root.setAttribute("color-mode", mode);
	toggleText
		? (toggleText.innerHTML = mode === "light" ? "dark" : "light")
		: null;
	labelText
		? (labelText.innerHTML =
				mode === "light" ? "Switch to dark mode" : "Switch to light mode")
		: null;

	console.log(toggleText, labelText);
	toggleText?.parentElement?.classList.add(mode);
	toggleText?.parentElement?.classList.remove(
		mode === "light" ? "dark" : "light"
	);
	root.className = mode + "Mode";
	localStorage.setItem("color-mode", mode);
};

window.toggleMode = toggleMode;

// CHECK MODE

const isLightMode = () => {
	const colorMode = root.getAttribute("color-mode");
	return colorMode === "light";
};
window.addEventListener("DOMContentLoaded", () => {
	// WATCH

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", () => toggleMode());

	// CHECK SAVED STATE

	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		setMode("dark");
	}

	const storedDataMode = localStorage.getItem("color-mode") as "light" | "dark";
	if (storedDataMode) {
		setMode(storedDataMode);
	}
});
