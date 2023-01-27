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
		const p = document.querySelector(`#${key} ~ p.warning`);
		if (p) {
			p.innerHTML = value;
			p.classList.add("active");
		}
	}
}
