window.onload = () => {
	const wrappers = document.getElementsByClassName("img__wrapper");

	const openZoom = (event: Event, wrapper: Element) => {
		const img: HTMLImageElement | null = wrapper.querySelector("picture img");
		if (img) {
			const zoomImage = document.createElement("img");
			zoomImage.src = img?.src;
			const zoomWrapper = document.createElement("zoom-wrapper");
			zoomWrapper.appendChild(zoomImage);
			document.body.appendChild(zoomWrapper);
		}
	};

	if (wrappers.length > 0) {
		for (let wrapper of wrappers) {
			wrapper.addEventListener("click", (e) => openZoom(e, wrapper));
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
		this.onclick = () => this.closeZoom();
	}
}

customElements.define("zoom-wrapper", ZoomWrapper);
