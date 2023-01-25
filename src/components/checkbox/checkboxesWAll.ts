const allCheckbox: HTMLInputElement | null = document.querySelector(
	"input[type=checkbox]#all_checkboxes"
);

if (allCheckbox) {
	const choicesCheckboxes: NodeListOf<HTMLInputElement> =
		document.querySelectorAll("input[type=checkbox]:not(#all_checkboxes)");

	const toggleAll = (allCheckbox: HTMLInputElement) => {
		choicesCheckboxes.forEach((btn) => {
			btn.checked = allCheckbox.checked;
		});

	};

	allCheckbox.onchange = () => toggleAll(allCheckbox);

	for (let checkbox of choicesCheckboxes) {
		checkbox.onchange = () => {
			const unchecked = [...choicesCheckboxes].find(
				(box) => box.checked === false
			);
			unchecked ? (allCheckbox.checked = false) : (allCheckbox.checked = true);
		};
	}
} else console.error('"All" checkbox option is missing');
