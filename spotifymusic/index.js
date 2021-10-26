let songIndex = 0;
let audioElement = new Audio("songs/01.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar")
let songs = [
    { songName: "Maguva Maguva", filePath: "songs/01.mp3" },
    { songName: "Inka Edho", filePath: "songs/02.mp3" },
    { songName: "Okey Oka Lokam", filePath: "songs/03.mp3" },
    { songName: "Laahe Laahe", filePath: "songs/04.mp3" },
    { songName: "Life of Ram", filePath: "songs/05.mp3" },
    { songName: "hoyna Hoyna", filePath: "songs/06.mp3" },
    { songName: "Saranga Dariya", filePath: "songs/07.mp3" }
]

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle")

    }

})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/0${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})