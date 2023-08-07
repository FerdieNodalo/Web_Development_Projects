const circleContainer = document.querySelector('.circle_container');
const flagContainer = document.querySelector('.flag_container');
const lyricsContainer = document.querySelector('.lyrics_container');
const title = document.querySelector('.title');
const lyricsOne = document.querySelector('.lyrics_one');
const lyricsTwo = document.querySelector('.lyrics_two');

circleContainer.addEventListener('click', function () {
	setTimeout(function () {
		flagContainer.style.cssText = `
  animation-duration: 1.2s;
	animation-name: moveUpDown;
	animation-iteration-count: infinite;
  `;
	}, 10000);

	lyricsContainer.classList.remove('hidden');
	lyricsContainer.style.cssText = `
	animation-name: fadeIn;
	animation-duration: 20s;
  `;

	const audio = new Audio(
		'audio/Lupang_Hinirang-Philippine_National_Anthem.mp3'
	);
	audio.play();
});
