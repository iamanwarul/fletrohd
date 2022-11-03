var music=document.querySelector(".music-element"),playBtn=document.querySelector(".play"),seekbar=document.querySelector(".seekbar"),currentTime=document.querySelector(".current-time"),duration=document.querySelector(".duration");function handlePlay(){music.paused?(music.play(),playBtn.className="pause",playBtn.innerHTML='<i class="material-icons">pause</i>'):(music.pause(),playBtn.className="play",playBtn.innerHTML='<i class="material-icons">play_arrow</i>'),music.addEventListener("ended",function(){playBtn.className="play",playBtn.innerHTML='<i class="material-icons">play_arrow</i>',music.currentTime=0})}music.onloadeddata=function(){seekbar.max=music.duration;var e=parseInt(music.duration%60),n=parseInt(music.duration/60%60);duration.innerHTML=n+":"+e},music.ontimeupdate=function(){seekbar.value=music.currentTime},handleSeekBar=function(){music.currentTime=seekbar.value},music.addEventListener("timeupdate",function(){var e=parseInt(music.currentTime%60),n=parseInt(music.currentTime/60%60);currentTime.innerHTML=n+":"+e},!1);var favIcon=document.querySelector(".favorite");function handleFavorite(){favIcon.classList.toggle("active")}var repIcon=document.querySelector(".repeat");function handleRepeat(){1==music.loop?(music.loop=!1,repIcon.classList.toggle("active")):(music.loop=!0,repIcon.classList.toggle("active"))}var volIcon=document.querySelector(".volume"),volBox=document.querySelector(".volume-box"),volumeRange=document.querySelector(".volume-range"),volumeDown=document.querySelector(".volume-down"),volumeUp=document.querySelector(".volume-up");function handleVolume(){volIcon.classList.toggle("active"),volBox.classList.toggle("active")}function handleVolumeDown(){volumeRange.value=Number(volumeRange.value)-20,music.volume=volumeRange.value/100}function handleVolumeUp(){volumeRange.value=Number(volumeRange.value)+20,music.volume=volumeRange.value/100}volumeDown.addEventListener("click",handleVolumeDown),volumeUp.addEventListener("click",handleVolumeUp);