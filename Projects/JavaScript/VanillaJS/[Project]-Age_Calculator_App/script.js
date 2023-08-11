const form = document.querySelector('form');
const inputElements = document.querySelectorAll('input');

const dayInput = document.querySelector('input[name="day"]');
const monthInput = document.querySelector('input[name="month"]');
const yearInput = document.querySelector('input[name="year"]');

const errorMessageInvalid = document.querySelectorAll('.error_message-invalid');
const errorMessageEmpty = document.querySelectorAll('.error_message-empty');

const dayOutput = document.querySelector('.days');
const monthOutput = document.querySelector('.months');
const yearOutput = document.querySelector('.years');

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const numberOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validate = () => {
	let isValid = true;
	inputElements.forEach((element) => {
		if (!element.value) {
			isValid = false;
			element.parentElement.classList.add('error_empty');
		} else if (dayInput.value > 31 || dayInput.value <= 0) {
			isValid = false;
			element.parentElement.classList.remove('error_empty');
			element.parentElement.classList.add('error_invalid');
		} else if (monthInput.value > 12 || monthInput.value <= 0) {
			isValid = false;
			element.parentElement.classList.remove('error_empty');
			element.parentElement.classList.add('error_invalid');
		} else if (yearInput.value > year || yearInput.value <= 0) {
			isValid = false;
			element.parentElement.classList.remove('error_empty');
			element.parentElement.classList.add('error_invalid');
		} else {
			isValid = true;
			element.parentElement.classList.remove('error_invalid');
		}
	});
	return isValid;
};

const handleSubmit = (event) => {
	event.preventDefault();
	if (validate()) {
		if (dayInput.value > day) {
			day = day + numberOfMonths[month - 1];
			month = month - 1;
		}
		if (monthInput.value > month) {
			month = month + 12;
			year = year - 1;
		}

		const dayValue = day - dayInput.value;
		const monthValue = month - monthInput.value;
		const yearValue = year - yearInput.value;

		dayOutput.innerHTML = `<span>${dayValue}</span> days`;
		monthOutput.innerHTML = `<span>${monthValue}</span> months`;
		yearOutput.innerHTML = `<span>${yearValue}</span> years`;

		event.target.reset();
	}
};

form.addEventListener('submit', handleSubmit);
