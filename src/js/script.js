import { passwordGenerator as generatePassword } from "./passGenerator.js";
import { shuffle } from "./shuffle.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const output = document.querySelector(".output__password");
const btnGenerate = document.querySelector(".btn--generate");
const btnCopy = document.querySelector(".main__output i");
const tooltip = document.querySelector(".tooltip__text");

let password;

btnGenerate.addEventListener("click", function () {
	password = shuffle(generatePassword());
	output.textContent = password;
	output.classList.remove("placeholder");
	output.classList.add("active");
});

btnCopy.addEventListener("click", async function () {
	if (password === undefined) {
		tooltip.textContent = "Empty!";
		tooltip.style.visibility = "visible";
		tooltip.style.opacity = "1";

		setTimeout(() => {
			tooltip.style.visibility = "invisible";
			tooltip.style.opacity = "0";
		}, 2000);

		return;
	}

	await navigator.clipboard.writeText(password);

	this.className = "fas fa-copy";

	tooltip.textContent = "Copied!";
	tooltip.style.visibility = "visible";
	tooltip.style.opacity = "1";

	setTimeout(() => {
		tooltip.style.visibility = "invisible";
		tooltip.style.opacity = "0";
		this.className = "far fa-copy";
	}, 2000);
});
