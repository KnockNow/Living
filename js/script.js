var LIVING = LIVING || {
  "events" : {
    "song" : {
      "list_updated" : "living.song.list_updated"
    }
  }
};

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function tplHTMLSong(source, title, artist, genre) {
  source = (typeof source === "string") ? source : '';
  title = (typeof title === "string") ? title : '';
  artist = (typeof artist === "string") ? artist : '';
  genre = (typeof genre === "string") ? genre : '';

  return '<tr>'
    + '<td data-source="' + source + '" class="song-title">'
    + '<span class="icon-control ion-play"></span>'
    + '<span>' + title + '</span>'
    + '</td>'
    + '<td class="song-artist">' + artist + '</td>'
    + '<td class="song-genre">' + genre + '</td>'
    + '</tr>';
};

(function($){
  function addPlayIcon($element) {
    return $element.find('.icon-control').removeClass('ion-pause').addClass('ion-play');
  }

  function addPauseIcon($element) {
    return $element.find('.icon-control').removeClass('ion-play').addClass('ion-pause');
  }

  function addMusicPlayedStyle($element) {
    return $element.parent().addClass('musicPlayed');
  }

  function removeMusicPlayedStyle($element) {
    return $element.parent().removeClass('musicPlayed');
  }

  function researchListSong (songList) {
    var songListName = [];

    $.each(songList, function(index) {
      $(this).contents().filter(function() {
        songListName.push($(this).text());
      });
    });

    return songListName;
  }

  $(function(){
      var bar = $('#bar');
      var cursor = $('#cursor');
      var player = $('audio');
      var labelCurrentSong = $('#currentSong');

      var _audio = document.getElementById("audio-player"); // We need to use nativ selector instead jQuery selector to access specific properties
      var currentSong = null;
      var nextSong = null;

      // Manage play/pause audio for song in table and style
      $('#panel-music').on('click', 'td.song-title', function() {
          nextSong = $(this);

          if (currentSong === null) { // Any song played
            addPauseIcon(nextSong);
            addMusicPlayedStyle(nextSong);
          } else if (currentSong[0] === nextSong[0]) { // Next song is current song we check if player is paused or play and apply the good behaviour
              if (_audio.paused) {
                addPauseIcon(nextSong);

                _audio.play();
              } else {
                addPlayIcon(nextSong);
                addMusicPlayedStyle(nextSong);

                _audio.pause();
              }

              return false;
          }  else { // Next song is different of the current song
            addPlayIcon(currentSong);
            removeMusicPlayedStyle(currentSong);

            addPauseIcon(nextSong);
            addMusicPlayedStyle(nextSong);
          }

          currentSong = nextSong;

          var songSrc = nextSong.data('source');
          var songName = nextSong.text();

          player.attr('src', songSrc);
          labelCurrentSong.text(songName);

          _audio.play();

          setInterval(function(){
            var seconds, minutes, hours, time, duration, percent;

            time = _audio.currentTime;
            duration = _audio.duration;
            percent = time / duration;
            percentLabel = (100 - (100 - (percent * 100))) + "%";


            bar.css('width', percentLabel);
            cursor.css('left', percentLabel);

            time = Math.round(time);
            seconds =  time % 60;
            minutes = (time - seconds) / 60;
            hours = (time - seconds - (minutes * 60)) / 3600;
        }, 200);
      });

      // Search feature
      // List by default content
      var songList = $('#panel-music td');
      var songListName = researchListSong(songList);

      // Event trigger on loaded json file check js (list_song.js)
      // Modification of some elements in DOM with AJAX must be reload to avoid missing DOM
      $('#panel-music').on(LIVING.events.song.list_updated, function() {
        songList = $(document).find('#panel-music td');
        songListName = researchListSong(songList);
      });

      $('input.search').on('keydown', function(e) {
          var value = $(this).val();

          if (e.which === 8 && value.length === 1) {
            $(songList).parent().show();
          }
      });

      $('input.search').on('keyup', function(e) {
          var value = $.trim($(this).val());

          if (value.length > 0) {
            var strEscaped = escapeRegExp(value);
            var regex = new RegExp(strEscaped, "i");

            $.each(songListName, function (index) {
              if (!regex.test(songListName[index])) {
                $(songList[index]).parent().hide();
              } else {
                $(songList[index]).parent().show();
              }
            });
          }
      });
  });
})(jQuery);
