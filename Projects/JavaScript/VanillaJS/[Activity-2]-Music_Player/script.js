let songsData = [
	{
		songName: 'Angels Like You',
		artistName: 'Miley Cyrus',
		filePath: 'audios/angels_like_you.mp3',
		imgCover: 'imgs/angels_like_you.png',
	},
	{
		songName: 'Pasilyo',
		artistName: 'SunKissed Lola',
		filePath: 'audios/pasilyo.mp3',
		imgCover: 'imgs/pasilyo.png',
	},
	{
		songName: 'Uhaw',
		artistName: 'Dilaw',
		filePath: 'audios/uhaw.mp3',
		imgCover: 'imgs/uhaw.png',
	},
	{
		songName: 'Until I Found You',
		artistName: 'Stephen Sanchez',
		filePath: 'audios/until_i_found_you.mp3',
		imgCover: 'imgs/until_i_found_you.png',
	},
	{
		songName: 'Usahay',
		artistName: 'South Border',
		filePath: 'audios/usahay.mp3',
		imgCover: 'imgs/usahay.png',
	},
];

let currentMusic = 0;

const body = document.querySelector('body');
const heading = document.querySelector('.heading');

const disk = document.querySelector('.disk');
const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek_bar');

const playBtn = document.querySelector('.play_btn');
const forwardBtn = document.querySelector('.forward');
const backwardBtn = document.querySelector('.backward');

const songName = document.querySelector('.music_name');
const artistName = document.querySelector('.artist_name');
const currentTime = document.querySelector('.current_time');
const musicDurationTime = document.querySelector('.song_duration-time');

// selecting the playBtn to toggle play and pause and rotation of disk
playBtn.addEventListener('click', () => {
	if (playBtn.className.includes('pause')) {
		music.play();
	} else {
		music.pause();
	}
	playBtn.classList.toggle('pause');
	disk.classList.toggle('play');
});

// setting up the music
const setMusic = (index) => {
	seekBar.value = 0; // setting the range value to 0
	let song = songsData[index];
	currentMusic = index;
	music.src = song.filePath;
	heading.textContent = `Playing ${index + 1} of 5 songs`;

	songName.textContent = song.songName;
	artistName.textContent = song.artistName;
	disk.style.backgroundImage = `url('${song.imgCover}')`;
	body.style.backgroundImage = `url('${song.imgCover}')`;

	currentTime.textContent = '00 : 00';

	setTimeout(() => {
		seekBar.max = music.duration;
		musicDurationTime.textContent = formatTime(music.duration);
	}, 300);
};

// formatting music duration time in min and sec format
const formatTime = (time) => {
	let min = Math.floor(time / 60);
	if (min < 10) {
		min = `0${min}`;
	}
	let sec = Math.floor(time % 60);
	if (sec < 10) {
		sec = `0${sec}`;
	}

	return `${min} : ${sec}`;
};

// setting the music player to 0
setMusic(0);

// seekBar
setInterval(() => {
	seekBar.value = music.currentTime;
	currentTime.textContent = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener('change', () => {
	music.currentTime = seekBar.value;
});

const playMusic = () => {
	music.play();
	playBtn.classList.remove('pause');
	disk.classList.add('play');
};

// forward and backward function

forwardBtn.addEventListener('click', () => {
	if (currentMusic >= songsData.length - 1) {
		currentMusic = 0;
	} else {
		currentMusic++;
	}
	setMusic(currentMusic);
	playMusic();
});

backwardBtn.addEventListener('click', () => {
	if (currentMusic <= 0) {
		currentMusic = songsData.length - 1;
	} else {
		currentMusic--;
	}
	setMusic(currentMusic);
	playMusic();
});
