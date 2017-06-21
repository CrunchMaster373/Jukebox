var vid = document.getElementById("bgvid");
//Jukebox HTML elements stored in variables
var playIcon = document.getElementById("play")
var pauseIcon = document.getElementById("pause")
var stopIcon = document.getElementById("stop")
var nextIcon = document.getElementById("next")
var prevIcon = document.getElementById("previous")
var newSongButton = document.querySelector("#newsong")
var lBrown = document.getElementById("LBrown")
var mfDoom = document.getElementById("MFDoom")
var kidCudi = document.getElementById("KidCudi")
var Gambino = document.getElementById("Childish")
var Baccono = document.getElementById("Guns")
var Systeme = document.getElementById("Magic")
var titleSpot = document.querySelector("#ShowMusicTitle")
var artistSpot = document.querySelector("#ShowArtist")

// counter
var index = [0];

var songs = [
  new Audio("Music/11 Lady Brown feat. Cise Starr.mp3"),
  new Audio("Music/mfdoom-vomitspit.mp3"),
  new Audio("Music/Kid Cudi and Crookers - Day 'n' Night.mp3"),
  new Audio("Music/Do Ya Like.mp3"),
  new Audio("Music/Baccano! - Gun's and Roses.mp3"),
  new Audio("Music/Un Gaou A Oran.mp3")
]

//instantiation: jukebox object created, songs pushed into jukebox array
var jukebox = new Jukebox(songs)

var titles = [
  "Title: Lady Brown ft. Cise Starr",
  "Title: Vomitspit",
  "Title: Day N Night",
  "Title: Do Ya Like",
  "Title: Gun's and Roses",
  "Title: Un Gaou A Oran"
]

var artists = [
  "Artist: Nujabes",
  "Artist: MF Doom",
  "Artist: Kid Cudi",
  "Artist: Childish Gambino",
  "Artist: Baccano",
  "Artist: Magic Systeme"
]

//Jukebox object constructor function: Jukebox object structure & methods
function Jukebox() {
  this.songs = songs
}

//setting the button methods
Jukebox.prototype.play = function() {
  this.songs[index].play()
}

Jukebox.prototype.pause = function() {
  this.songs[index].pause()
}

Jukebox.prototype.stop = function() {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
}

Jukebox.prototype.back = function() {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index--
  if (index < 0) {
    index = this.songs.length -1
  }
  this.songs[index].play()
}

Jukebox.prototype.forward = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index++
  this.songs[index]
  if (index === this.songs.length) {
      index = [0]
  }
  this.songs[index].play()
}

// button event listeners
playIcon.addEventListener("click", function(event){
  event.preventDefault();
  ShowMusicTitle.innerHTML = titles[index];
  ShowArtist.innerHTML = artists[index];
  jukebox.play();
  playIcon.style.color = "#FF1493";
  pauseIcon.style.color = "#000000";
  stopIcon.style.color = "#000000";
  prevIcon.style.color = "#000000";
  nextIcon.style.color = "#000000";
})

pauseIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  pauseIcon.style.color = "#FF1493";
  playIcon.style.color = "#000000";
  stopIcon.style.color = "#000000";
  nextIcon.style.color = "#000000";
  prevIcon.style.color= "#000000";
})

stopIcon.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.stop()
  stopIcon.style.color = "#FF1493";
  playIcon.style.color = "#000000";
  pauseIcon.style.color = "#000000";
  nextIcon.style.color= "#000000";
  prevIcon.style.color= "#000000";
})

nextIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.forward()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  nextIcon.style.color="#FF1493"
  prevIcon.style.color="#000000"
  playIcon.style.color = "#000000";
  pauseIcon.style.color = "#000000";
  stopIcon.style.color = "#000000";

})

prevIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.back()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  prevIcon.style.color="#FF1493";
  nextIcon.style.color="#000000";
  playIcon.style.color = "#000000";
  pauseIcon.style.color = "#000000";
  stopIcon.style.color = "#000000";
})

newSongButton.addEventListener("click", function(event) {
  event.preventDefault()
  var songField = document.querySelector("#songfield")
  var newSong = new Audio(songField.value)
  var titleField = document.querySelector("#titlefield")
  var newTitle = "Title: " + titleField.value
  var artistField = document.querySelector("#artistfield")
  var newArtist = "Artist: " + artistField.value
  songs.push(newSong)
  titles.push(newTitle)
  artists.push(newArtist)
})

lBrown.addEventListener("click", function(event){
  event.preventDefault()
  var lbrownmusic = new Audio("Music/11 Lady Brown feat. Cise Starr.mp3")
  var lbrownTitle = "Title: " + "Lady Brown"
  var lbrownArtist= "Artist: " + "Nujabes"
  songs.push(lbrownmusic)
  titles.push(lbrownTitle)
  artists.push(lbrownArtist)

})

mfDoom.addEventListener("click", function(event){
  event.preventDefault()
  var mfdoomusic = new Audio("Music/mfdoom-vomitspit.mp3")
  var mfdoomTitle = "Title: " + "Vomitspit"
  var mfdoomArtist = "Artist: " + "MF Doom"
  songs.push(mfdoomusic)
  titles.push(mfdoomTitle)
  artists.push(mfdoomArtist)

})

kidCudi.addEventListener("click", function(event){
  event.preventDefault()
  var DayNight = new Audio("Music/Kid Cudi and Crookers - Day 'n' Night.mp3")
  var DayNightTitle = "Title: " + "Day /& Night"
  var DayNightArtist = "Artist: " + "Kid Cudi"
  songs.push(DayNight)
  titles.push(DayNightTitle)
  artists.push(DayNightArtist)

})

Gambino.addEventListener("click", function(event){
  event.preventDefault()
  var childish = new Audio("Music/Do Ya Like.mp3")
  var childishTitle = "Title: " + "Do Ya Like"
  var childishArtist = "Artist: " + "Childish Gambino"
  songs.push(childish)
  titles.push(childishTitle)
  artists.push(childishArtist)

})

Baccono.addEventListener("click", function(event){
  event.preventDefault()
  var gbaccano = new Audio("Music/Baccano! - Gun's and Roses.mp3")
  var baccanoTitle = "Title: " + "Guns & Roses"
  var baccanoArtist = "Artist: " + "Baccono"
  songs.push(gbaccano)
  titles.push(baccanoTitle)
  artists.push(baccanoArtist)

})

Systeme.addEventListener("click", function(event){
  event.preventDefault()
  var mSysteme = new Audio("Music/Un Gaou A Oran.mp3")
  var systemeTitle = "Title: " + "Guns & Roses"
  var systemeArtist = "Artist: " + "Baccano"
  songs.push(mSysteme)
  titles.push(systemeTitle)
  artists.push(systemeArtist)

})
