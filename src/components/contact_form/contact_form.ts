const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// Check if user selected a website package
const websitePackage = params.get("package");

if (websitePackage) {
	const subjectEl: HTMLInputElement | null =
		document.querySelector("input#subject");
	if (subjectEl) {
		subjectEl.value = websitePackage;
	}

	// Check if type param has come through too
	const packageType = params.get("type");
	const hiddenTypeInput: HTMLInputElement | null =
		document.querySelector("input#package-type");
	if (hiddenTypeInput && packageType) {
		hiddenTypeInput.value = packageType;
	}
}

for (const [key, value] of params.entries()) {
	const el = document.querySelector(`#${key}`);
	if (el) {
		el.classList.add("warning");
		const p = document.querySelector(`#${key} ~ p.warning`);
		if (p) {
			p.innerHTML = value;
			p.classList.add("active");
		}
	}
}

// Manually add input patters
const patterns = {
	string: "[A-Za-zÀ-ÖØ-öø-ÿ\\-\\_]",
	email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};

const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));

const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));
