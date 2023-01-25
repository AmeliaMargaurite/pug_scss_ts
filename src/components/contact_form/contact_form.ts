const queryString = window.location.search;
const params = new URLSearchParams(queryString);

for (const [key, value] of params.entries()) {
	const el = document.querySelector(`#${key}`);
	if (el) {
		const p = document.querySelector(`#${key} ~ p.warning`);
		if (p) {
			p.innerHTML = value;
			p.classList.add("active");
		}
	}
}
