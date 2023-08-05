let picturesOfDice = [
	'./assets/images/dice1.png',
	'./assets/images/dice2.png',
	'./assets/images/dice3.png',
	'./assets/images/dice4.png',
	'./assets/images/dice5.png',
	'./assets/images/dice6.png',
];

const displayWInner = (randomNumber1, randomNumber2) => {
	let headingThatDisplaysTheWinner = document.getElementsByTagName('h1');

	if (randomNumber1 > randomNumber2) {
		headingThatDisplaysTheWinner[0].innerHTML = '🚩Play 1 Wins!';
	} else if (randomNumber1 < randomNumber2) {
		headingThatDisplaysTheWinner[0].innerHTML = 'Player 2 Wins!🚩';
	} else {
		headingThatDisplaysTheWinner[0].innerHTML = 'Draw!';
	}

	console.log(headingThatDisplaysTheWinner);
	return headingThatDisplaysTheWinner;
};

const randomImageGenerator = () => {
	let randomNumber1 = Math.floor(Math.random() * picturesOfDice.length);
	console.log(randomNumber1);

	let randomNumber2 = Math.floor(Math.random() * picturesOfDice.length);

	let randomizePicturesOfDice1 = picturesOfDice[randomNumber1];

	let randomizePicturesOfDice2 = picturesOfDice[randomNumber2];

	document
		.querySelector('img.img1')
		.setAttribute('src', randomizePicturesOfDice1);

	document
		.querySelector('img.img2')
		.setAttribute('src', randomizePicturesOfDice2);

	displayWInner(randomNumber1, randomNumber2);
};

randomImageGenerator();
