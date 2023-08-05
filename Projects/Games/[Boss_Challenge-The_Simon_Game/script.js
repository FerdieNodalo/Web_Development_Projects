let buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

$(document).on('keypress', function () {
	if (!started) {
		$('h1#level-title').text(`level ${level}`);
		nextSequence();
		started = true;
	}
});

const nextSequence = () => {
	userClickedPattern = [];

	level++;
	$('h1#level-title').text(`level ${level}`);

	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	$(`div#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
};

$('div.btn').on('click', function (e) {
	let userChosenColor = $(e.target).attr('id');
	userClickedPattern.push(userChosenColor);

	playSound(userChosenColor);
	setTimeout(function () {
		animatePress(userChosenColor);
	}, 100);

	checkAnswer(userClickedPattern.length - 1);
});

const checkAnswer = (currentLevel) => {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		let audio = new Audio('sounds/wrong.mp3');
		audio.play();
		$('body').addClass('game-over');

		setTimeout(function () {
			$('body').removeClass('game-over');
		}, 200);
		$('h1#level-title').text('Game Over, Press Any Key to Restart');

		startOver();
	}
};

const startOver = () => {
	level = 0;
	gamePattern = [];
	started = false;
};

const playSound = (name) => {
	let audio = new Audio(`sounds/${name}.mp3`);
	return audio.play();
};

const animatePress = (currentColor) => {
	$(`div#${currentColor}`).addClass('pressed');

	setTimeout(function () {
		$(`div#${currentColor}`).removeClass('pressed');
	}, 100);
};
