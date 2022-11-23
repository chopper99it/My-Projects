let musicContainer = document.querySelector("#music__container");
let playBtn = document.querySelector("#play");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let audio = document.querySelector("#audio");
let progressContainer = document.querySelector("#progress-container");
let progress = document.querySelector("#progress");
let title = document.querySelector("#title");
let cover = document.querySelector("#cover");

//songs
let songs = ["TayTo", "Ocean", "Querry", "SongVaLamViec"];

//index
let songIndex = 2;

//call
loadSong(songs[songIndex]);

function loadSong(song) {
  // console.log(song);
  title.innerText = song;
  cover.src = `./img/${song}.jfif`;
  audio.src = `./Music list/${song}.mp3`;
}

//event play & pause
playBtn.addEventListener("click", () => {
  let isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
  // if (isPlaying) {
  //   pauseSong();
  // } else {
  //   playSong();
  // }
});

document.body.addEventListener("keydown", (e) => {
  let isPlaying = musicContainer.classList.contains("play");
  if (e.code === "Space") {
    isPlaying ? pauseSong() : playSong();
  }
});

//play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
  audio.play();
}

//pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");
  audio.pause();
}

//prev song
prevBtn.addEventListener("click", prevSong);
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

//next song
nextBtn.addEventListener("click", nextSong);
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

//update progress
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);
function updateProgress(e) {
  // console.log(e);
  let currentTime = e.srcElement.currentTime;
  let duration = e.srcElement.duration;
  // console.log(currentTime, duration);
  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

//set progress
progressContainer.addEventListener("click", setProgress);
function setProgress(e) {
  let width = this.clientWidth;
  // console.log(e);
  let clickX = e.offsetX;
  let duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
