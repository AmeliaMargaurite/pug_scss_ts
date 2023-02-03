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

// Manually add input patterns
const patterns = {
	string: ".[-_'A-Za-zÀ-ÖØ-öø-ÿ\\s]+",
	email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};

const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));

const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));
