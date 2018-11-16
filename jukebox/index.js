var body = document.getElementsByTagName('body')[0]

// controls
var play = document.getElementById('play')
var pause = document.getElementById('pause')
var next = document.getElementById('next')
var repeat = document.getElementById('repeat')
var previous = document.getElementById('previousSong')

// Name of song and artist
var songTitle = document.getElementById('songTitle')
var artist = document.getElementById('artist')


// Album cover
 var albumCover = document.getElementById('albumCover')

// songs
var s1 = { url: new Audio('songs/lordknows.mp3'), title: 'Lord Knows', cover: "'alcovers/creed3.jpeg'", artistName: "Meek Mill & Tory Lanez"}
var s2 = { url: new Audio('songs/donotdistrub.mp3'), title: 'Do Not Disturb', cover: "'alcovers/morelife.jpg'", artistName: "Drake"}
var s3 = { url: new Audio('songs/patrick.mp3'), title: "Patrick's M.A.A.D City",cover: "'alcovers/patrickalbumcover.jpg'", artistName: "Patrick" }
var s4 = { url: new Audio('songs/superduperkyle.mp3'), title: 'SuperDuperKyle', cover: "'alcovers/kylealbumcover.jpg'", artistName: "Kyle & MadeinTYO"}
var s5 = {url: new Audio('songs/paradiseextended.mp3'),title:'Paradise Extended', cover: "'alcovers/bigseanalbumcover.jpeg'", artistName: "Big Sean"}
var s6 = {url: new Audio('songs/bigbank.mp3'),title:'Big Bank',cover: "'alcovers/bigbankalbumcover.jpg'", artistName:"YG, 2Chainz, Big Sean, Nicki Minaj" }
var s7 = {url: new Audio('songs/losecontrol.mp3'),title:'Lose Control', cover: "'alcovers/losecontrolalbum.jpg'", artistName: "Missy Elliott, Ciara & Fat Man Scoop " }
var s8 = {url: new Audio('songs/bounce.mp3'),title:'Bounce', cover: "'alcovers/collegrove.jpg'", artistName: "2Chainz & Lil Wayne" }
var s9 = {url: new Audio('songs/ff7.mp3'),title:'Ride Out', cover: "'alcovers/ff.jpg'", artistName: "Kid Ink, Tyga, Wale, YG, Rich Homie Quan" }

var listOfSongs = [s1, s2, s3 ,s4, s5, s6, s7, s8, s9]
var trackNum = 0;


// Play Song
function playFunction() {
  // console.log(trackNum.url);
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = listOfSongs[trackNum].title
  artist.innerHTML= listOfSongs[trackNum].artistName
  albumCover.style.background = "url("+listOfSongs[trackNum].cover +")";
  albumCover.style.backgroundSize = "cover";
  albumCover.style.backgroundRepeat = "no-repeat";
  body.style.background = "url("+listOfSongs[trackNum].cover +")";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
}


// Play next song
function nextSong() {
  listOfSongs[trackNum].url.pause()
  listOfSongs[trackNum].url.currentTime = 0
  // listOfSongs[trackNum]
  trackNum ++;
  // listOfSongs[trackNum].play()
  if (trackNum > listOfSongs.length - 1) {
    trackNum = 0
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = listOfSongs[trackNum].title
    artist.innerHTML= listOfSongs[trackNum].artistName
    albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
    albumCover.style.backgroundSize = "cover";
    albumCover.style.backgroundRepeat = "no-repeat";
    body.style.background = "url("+listOfSongs[trackNum].cover +")";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";

  }else {
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = listOfSongs[trackNum].title
    artist.innerHTML= listOfSongs[trackNum].artistName
    albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
    albumCover.style.backgroundSize = "cover";
    albumCover.style.backgroundRepeat = "no-repeat";
    body.style.background = "url("+listOfSongs[trackNum].cover +")";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";

  }
}

// Play just that just passed
function previousSong() {
  listOfSongs[trackNum].url.pause()
  listOfSongs[trackNum].url.currentTime = 0
  if (trackNum == 0) {
    trackNum = listOfSongs.length - 1
  }else {
    trackNum --;
  }
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = listOfSongs[trackNum].title
  artist.innerHTML= listOfSongs[trackNum].artistName
  albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
  albumCover.style.backgroundSize = "cover";
  albumCover.style.backgroundRepeat = "no-repeat";
  body.style.background = "url("+listOfSongs[trackNum].cover +")";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";


}


// Pause song
function pauseSong() {
  listOfSongs[trackNum].url.pause()
}

// Repeat song
function repeatSong() {
  listOfSongs[trackNum].url.currentTime = 0
  listOfSongs[trackNum].url.play()
}

play.addEventListener('click', function() {
  playFunction();
});

next.addEventListener('click', function() {
  nextSong();
})

pause.addEventListener('click', function() {
  pauseSong();
})

repeat.addEventListener('click', function() {
  repeatSong()
})

previous.addEventListener('click', function () {
  previousSong()
})





// gotta add a function name in addEventListener
// window.addEventListener('load',)
