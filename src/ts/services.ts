const hash = window.location.hash;
console.log("test");

if (hash) {
	const el = document.querySelector(hash);
	if (el) {
		el.classList.add("highlight");
	}
}
