$(document).ready(function() {
  (function localFileVideoPlayer() {
  	'use strict'
    var URL = window.URL || window.webkitURL
    var displayMessage = function (message, isError) {
      var element = document.querySelector('#message')
      element.innerHTML = message
      element.className = isError ? 'error' : 'info'
    }

    var addMusic = function (event) {
      var NbMusic = this.files.length;
      var ulList = document.getElementById('songs');

      for (var i = 0; i < NbMusic; i++) {
        var file = this.files[i]
        var urlFile = URL.createObjectURL(file)
        ulList.innerHTML += "<li id=song" + i + " data-source=" + urlFile + "></li>"
        var currentLi = document.getElementById("song" + i);
        currentLi.innerHTML += "<span class='ion-play'></span> <label>" + this.files[i].name + "</label>"
      }

      var msg = document.getElementById("messageImport");
      msg.innerHTML = "Succes ! Go to My Music"

    }

    var inputNode = document.getElementById("playerId");
    // inputNode.addEventListener('change', playSelectedFile, false)
    inputNode.addEventListener('change', addMusic, false)
  })()
})
