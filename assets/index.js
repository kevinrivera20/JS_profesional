import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from './plugins/AutoPlay.js' 


const video = document.querySelector("video")
const button = document.querySelector("button")
const button1 = document.querySelector("#Button1")
const player = new MediaPlayer({
    el: video,
    plugins: [
    new AutoPlay() 
    ],
});

button.onclick = () => player.handlePlay()
button1.onclick = () => player.toggleMute()
