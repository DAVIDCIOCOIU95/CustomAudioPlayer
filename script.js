var song = new Audio;
var muted = false;
var vol = 1;
song.type = 'audio/mpeg';
song.src = "./song.mp3";//Audio file source url


// // Get all players
// let myArray = document.querySelectorAll('.song-player');

// myArray.forEach(element => {
//    var elementId = element.id;
//    console.log(elementId)

//    // Create new Audios 
// //    [elementId] = new Audio;
// //    [elementId].src = './'+elementId;
// //    console.log([elementId].src)
// });
// // Init Function


function skip(time) {
   if (time == 'back') {
     song.currentTime = (song.currentTime - 5);
   } else if (time == 'fwd') {
     song.currentTime = (song.currentTime + 5);
   }
}
function playpause() {
  if (!song.paused) {
    song.pause();
document.querySelector(".btn-playpause").innerHTML = '<i class="fa fa-play fa-2x"></i>';

  } else {
    song.play();
document.querySelector(".btn-playpause").innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
function stop() {
  song.pause();
  song.currentTime = 0;
  document.getElementById('seek').value = 0;
}
function setPos(pos) {
  song.currentTime = pos;
}
function mute() {
  if (muted) {
    song.volume = vol;
    muted = false;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    song.volume = 0;
    muted = true;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}
function setVolume(volume) {
  song.volume = volume;
  vol = volume;
}


song.addEventListener('timeupdate',function() {
  curtime = parseInt(song.currentTime,10);
  document.getElementById('seek').max = song.duration;
  document.getElementById('seek').value = curtime;

// Calculate the time left and the total duration 
let currentMinutes = Math.floor(song.currentTime / 60); 
let currentSeconds = Math.floor(song.currentTime - currentMinutes * 60); 
let durationMinutes = Math.floor(song.duration / 60); 
let durationSeconds = Math.floor(song.duration - durationMinutes * 60); 

// Add a zero to the single digit time values 
if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 


  document.querySelector(".total-duration").innerHTML = durationMinutes +':'+ durationSeconds;
  document.querySelector(".current-time").innerHTML = currentMinutes +':'+ currentSeconds;
})