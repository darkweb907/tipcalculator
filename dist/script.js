/** @format */
"use strict";
let tips = document.querySelectorAll(".tips");
let totper = document.querySelector("#totper");
let topmon = document.querySelector(".topmon");

let totbody = (first, second, target) => {
	let percent = parseInt(target) / 100;
	let tipped = first * percent + second;
	return tipped;
};

tips.forEach((tip) => {
	tip.addEventListener("click", (e) => {
		let form = Number(document.querySelector("#bills").value);
		let person = Number(document.querySelector("#person").value);

		if (form == "0" && person == "0") {
			alert("empty value try input something");
		} else {
			if (e.target.value === "Custom") {
				let omit = 0;
				while (omit === 0 || omit === 20) {
					omit = Math.floor(Math.random() * 5 + 1) * 5;
					let percent = omit / 100;
					// total amount of the person tips
					let totmonth = totbody(form, person, omit);
					topmon.textContent = totmonth.toFixed(2);
					// total amount perperson
					totper.textContent = (totmonth / person).toFixed(2);
				}
			} else {
				// total amount of the person tips

				let totmonth = totbody(form, person, e.target.value);
				topmon.textContent = totmonth.toFixed(2);

				// total amount perperson
				totper.textContent = (totmonth / person).toFixed(2);
			}
		}
	});
});

// Reset button for all

const Reset = document.querySelector(".reset");
Reset.onclick = () => {
	let form = document.querySelector("#bills");
	let person = document.querySelector("#person");

	// reset the input value
	form.value = "";
	person.value = "";

	topmon.textContent = "0.00";
	totper.textContent = "0.00";
};
