$(document).ready(function() {
  (function localFileVideoPlayer() {
  	'use strict'
    var URL = window.URL || window.webkitURL
    var displayMessage = function (message, isError) {
      var element = document.querySelector('#message')
      element.innerHTML = message
      element.className = isError ? 'error' : 'info'
    }

    var cleanTitle = function (name) {
      var clean = name.replace(/_/g," ");
      var reg = new RegExp("[.;]+", "g");
      var tab = clean.split(reg);
      return tab[0];
    }

    var addMusic = function (event) {
      var html = '';
      var NbMusic = this.files.length;
      var ulList = document.getElementById('songs');

      for (var i = 0; i < NbMusic; i++) {
        var file = this.files[i]
        var urlFile = URL.createObjectURL(file)
        html += tplHTMLSong(urlFile, cleanTitle(this.files[i].name), 'unknown', 'unknown');

        // ulList.innerHTML += "<li id=song" + i + " data-source=" + urlFile + "></li>"
        // var currentLi = document.getElementById("song" + i);
        // currentLi.innerHTML += "<span class='ion-play'></span> <label>" + cleanTitle(this.files[i].name) + "</label>"
      }
      $('#panel-music tbody').append(html);
      $('#panel-music').trigger(LIVING.events.song.list_updated);


      var msgMusic = document.getElementById('NoMusic');
      var msg = document.getElementById('messageImport');
      var msgSucces = document.getElementById('messageSuccesImport');
      var playerId = document.getElementById('playerId');

      msg.style.display = 'none';
      msgSucces.style.display = 'initial';
      msgMusic.style.display = 'none';
      playerId.style.display = 'none';
    }

    var inputNode = document.getElementById("playerId");
    inputNode.addEventListener('change', addMusic, false)
  })()
})
