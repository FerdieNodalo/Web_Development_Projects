const ratingBtn = document.querySelectorAll('button[type="button"]');
const submitBtn = document.querySelector('button[type="submit"]');

const firstContainer = document.querySelector('.container');
const secondContainer = document.querySelector('.container2');

let ratingResult = document.querySelector('.rating');
let ratingValue = 0;

/* for (let i = 0; i < ratingBtn.length; i++) {
	ratingBtn[i].addEventListener('click', handleRatingClick);
} */

ratingBtn.forEach((btn) => {
	btn.addEventListener('click', handleRatingClick);
});

function handleRatingClick(event) {
	ratingValue = event.target.value;
	console.log(event);
}

submitBtn.addEventListener('click', handleSubmitClick);

function handleSubmitClick() {
	if (ratingValue !== 0) {
		secondContainer.classList.remove('hidden');
		firstContainer.classList.add('hidden');
		ratingResult.textContent = `You selected ${ratingValue} out of 5`;
	} else {
		alert('Please select a number to rate.');
	}
}
