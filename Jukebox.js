var vid = document.getElementById("bgvid");

var playIcon = document.getElementById("play")
var pauseIcon = document.getElementById("pause")
var stopIcon = document.getElementById("stop")
var nextIcon = document.getElementById("next")
var prevIcon = document.getElementById("previous")
var newSongButton = document.querySelector("#newsong")
var mfDoom = document.getElementById("MFDoom")
var kidCudi = document.getElementById("KidCudi")
var Gambino = document.getElementById("Childish")
var Baccono = document.getElementById("Guns")
var Systeme = document.getElementById("Magic")

var index = [0]
var titleSpot = document.querySelector("#ShowMusicTitle")
var artistSpot = document.querySelector("#ShowArtist")

var songs = [
  new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/mfdoom-vomitspit.mp3"),
  new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Kid Cudi and Crookers - Day 'n' Night.mp3"),
  new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Do Ya Like.mp3"),
  new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Baccano! - Gun's and Roses.mp3"),
  new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Un Gaou A Oran.mp3")
]

var titles = [
  "Title: Vomitspit",
  "Title: Day N Night",
  "Title: Do Ya Like",
  "Title: Gun's and Roses",
  "Title: Un Gaou A Oran"
]

var artists = [
  "Artist: MF Doom",
  "Artist: Kid Cudi",
  "Artist: Childish Gambino",
  "Artist: Baccano",
  "Artist: Magic Systeme"
]
function Jukebox(songs) {
  this.songs = songs
}
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

var jukebox = new Jukebox(songs)


playIcon.addEventListener("click", function(event){
  event.preventDefault()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  jukebox.play()
  playIcon.style.color = "#FF1493"
  pauseIcon.style.color = "#000000"
  stopIcon.style.color = "#000000"
})

pauseIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  pauseIcon.style.color = "#FF1493"
  playIcon.style.color = "#000000"
  stopIcon.style.color = "#000000"
})

stopIcon.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.stop()
  stopIcon.style.color = "#FF1493"
  playIcon.style.color = "#000000"
  pauseIcon.style.color = "#000000"
})

nextIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.forward()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  playIcon.style.color = "#FF1493"
  pauseIcon.style.color = "#000000"
  stopIcon.style.color = "#000000"
})

prevIcon.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.back()
  ShowMusicTitle.innerHTML = titles[index]
  ShowArtist.innerHTML = artists[index]
  playIcon.style.color = "#FF1493"
  pauseIcon.style.color = "#000000"
  stopIcon.style.color = "#000000"
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

mfDoom.addEventListener("click", function(event){
  event.preventDefault()
  var mfdoomusic = new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/mfdoom-vomitspit.mp3")
  var mfdoomTitle = "Title: " + "Vomitspit"
  var mfdoomArtist = "Artist: " + "MF Doom"
  songs.push(mfdoomusic)
  titles.push(mfdoomTitle)
  artists.push(mfdoomArtist)
  mfDoom.style.color = "#FF1493"
})

kidCudi.addEventListener("click", function(event){
  event.preventDefault()
  var DayNight = new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Kid Cudi and Crookers - Day 'n' Night.mp3")
  var DayNightTitle = "Title: " + "Day /& Night"
  var DayNightArtist = "Artist: " + "Kid Cudi"
  songs.push(DayNight)
  titles.push(DayNightTitle)
  artists.push(DayNightArtist)
  kidCudi.style.color = "#FF1493"
})

Gambino.addEventListener("click", function(event){
  event.preventDefault()
  var childish = new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Do Ya Like.mp3")
  var childishTitle = "Title: " + "Do Ya Like"
  var childishArtist = "Artist: " + "Childish Gambino"
  songs.push(childish)
  titles.push(childishTitle)
  artists.push(childishArtist)
  Gambino.style.color = "#FF1493"
})

Baccono.addEventListener("click", function(event){
  event.preventDefault()
  var gbaccano = new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Baccano! - Gun's and Roses.mp3")
  var baccanoTitle = "Title: " + "Guns & Roses"
  var baccanoArtist = "Artist: " + "Baccono"
  songs.push(gbaccano)
  titles.push(baccanoTitle)
  artists.push(baccanoArtist)
  Baccono.style.color = "#FF1493"
})

Systeme.addEventListener("click", function(event){
  event.preventDefault()
  var mSysteme = new Audio("/Users/olufunshoolagundoye/Desktop/NYCDA/JavascriptBasics/Jukebox/Music/Un Gaou A Oran.mp3")
  var systemeTitle = "Title: " + "Guns & Roses"
  var systemeArtist = "Artist: " + "Baccano"
  songs.push(mSysteme)
  titles.push(systemeTitle)
  artists.push(systemeArtist)
  Systeme.style.color = "#FF1493"
})

//   jukebox.play()
// })
//
//
//
// var audio = new Audio("track.mp3")
// audio.play()
