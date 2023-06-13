window.addEventListener("load", () => {
	const wrappers = document.getElementsByClassName("img__wrapper");
	// @to-do Rework this to have event listeners on single wrapper
	// use e.target to open specific image
	if (wrappers.length > 0) {
		for (let wrapper of wrappers) {
			wrapper.addEventListener("click", (e) => openZoom(e, wrapper));
			wrapper.addEventListener("keydown", (e) =>
				checkKeydown(e as KeyboardEvent, wrapper)
			);
		}
	}
});

const openZoom = (event: Event | KeyboardEvent, wrapper: Element) => {
	const img: HTMLImageElement | null = wrapper.querySelector("picture img");

	if (img) {
		const zoomImage = document.createElement("img");
		zoomImage.src = img?.src;
		const zoomWrapper = document.createElement("zoom-wrapper");
		zoomWrapper.appendChild(zoomImage);
		document.body.appendChild(zoomWrapper);
	}
};

const checkKeydown = (event: KeyboardEvent, wrapper: Element) => {
	const existingZoomWrapper: HTMLElement | null = document.getElementsByTagName(
		"zoom-wrapper"
	)[0] as HTMLElement;

	if (existingZoomWrapper) {
		existingZoomWrapper.click();
	} else {
		if (event.key == "Enter" || event.key == "space") {
			openZoom(event, wrapper);
		}
	}
};

class ZoomWrapper extends HTMLElement {
	constructor() {
		super();
	}

	closeZoom() {
		document.body.style.removeProperty("overflow");
		this.remove();
	}

	connectedCallback() {
		document.body.style.overflow = "hidden";
		this.addEventListener("click", () => this.closeZoom());
	}
}

customElements.define("zoom-wrapper", ZoomWrapper);
