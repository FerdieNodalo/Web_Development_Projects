let button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click', function () {
		makeSound(button[i].innerHTML);
		buttonAnimation(button[i].innerHTML);
	});
}

document.addEventListener('keydown', function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

const makeSound = (key) => {
	switch (key) {
		case 'w':
			let tom1 = new Audio('./sounds/tom-1.mp3');
			return tom1.play();
			break;
		case 'a':
			let tom2 = new Audio('./sounds/tom-2.mp3');
			return tom2.play();
			break;
		case 's':
			let tom3 = new Audio('./sounds/tom-3.mp3');
			return tom3.play();
			break;
		case 'd':
			let tom4 = new Audio('./sounds/tom-4.mp3');
			return tom4.play();
			break;
		case 'j':
			let snare = new Audio('./sounds/snare.mp3');
			return snare.play();
			break;
		case 'k':
			let crash = new Audio('./sounds/crash.mp3');
			return crash.play();
			break;
		case 'l':
			let kickBass = new Audio('./sounds/kick-bass.mp3');
			return kickBass.play();
			break;

		default:
			console.log(key);
	}
};

const buttonAnimation = (currentKey) => {
	let activeKey = document.querySelector(`.${currentKey}`);
	activeKey.classList.add('pressed');

	setTimeout(function () {
		activeKey.classList.remove('pressed');
	}, 200);
};
