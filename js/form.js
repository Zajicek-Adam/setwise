let inputs = document.getElementsByClassName("form-input");
let labels = document.getElementsByClassName("form-label");

const form = document.getElementById("form");

Array.from(inputs).forEach((input, index) => {
	input.addEventListener("focus", () => {
		labels[index].classList.add("set");
	});
	input.addEventListener("focusout", () => {
		if (input.value.length == 0) {
			labels[index].classList.remove("set");
		}
	});
});

window.addEventListener("pageshow", (e) => {
	console.log(labels);
	console.log(inputs);

	Array.from(inputs).forEach((input, index) => {
		if (input.value.length != 0) {
			labels[index].classList.add("set");
		}
	});
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (!form.checkValidity()) {
		return;
	}
	window.location.href = "../dashboard.html";
});
