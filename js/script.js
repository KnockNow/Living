var LIVING = LIVING || {
  "events" : {
    "song" : {
      "list_updated" : "living.song.list_updated"
    }
  }
};

// Clean input user for regex (Never trust in user input)
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

// Build template html for song
function tplHTMLSong(source, title, artist, genre) {
  source = (typeof source === "string") ? source : '';
  title = (typeof title === "string") ? title : '';
  artist = (typeof artist === "string") ? artist : '';
  genre = (typeof genre === "string") ? genre : '';

  var colorBg = 'colorBg';

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
      var tmp = [];
      $(this).contents().filter(function() {
        tmp.push($(this).text());
      });
      songListName.push(tmp.join(' '));
    });

    return songListName;
  }

  $(function(){
      var container = $(".container");
      var mute = $('#muteButton');
      var muted = $('#mutedButton');
      var close = $('#closeButton');
      var play = $("#playButton");
      var pause = $("#pauseButton");
      var seek = $("#seek");

      var bar = $('#bar');
      var cursor = $('#cursor');
      var player = $('audio');
      var labelCurrentSong = $('#currentSong');

      var _audio = document.getElementById("audio-player"); // We need to use nativ selector instead jQuery selector to access specific properties
      var currentSong = null;
      var nextSong = null;

      // Autoplay the next song in list if exists
      $(_audio).on('ended', function () {
        if (currentSong !== null) {
          var next = currentSong.parent().next();

          if (next.length === 1) {
            next.find('td.song-title').trigger('click');
          }
        }
      });

      // Manage play/pause audio for song in table and style
      $('#panel-music').on('click', '.song-title', function() {
          nextSong = $(this);

          // Buttons de control audio
          $("#controlAudio .bouttonControl").css("display", "block");
          $('#playButton').css("display", "none");
          $('#pauseButton').css("display", "inline-block");
          _audio.volume = 1;
          muted.hide();
          mute.show();

          play.click(function() {
              _audio.play();
              $(this).hide();
              pause.show();
              addPauseIcon(nextSong);
          });

          pause.click(function() {
              _audio.pause();
              $(this).hide();
              play.show();
              addPlayIcon(nextSong);
          });

          mute.click(function() {
              _audio.volume = 0;
              $(this).hide();
              muted.show();
          });


          muted.click(function() {
              _audio.volume = 1;
              $(this).hide();
              mute.show();
          });


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
          labelCurrentSong.text(" " + songName);

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
      var songList = $('#panel-music tbody tr');
      var songListName = researchListSong(songList);

      // Event trigger on loaded json file check js (list_song.js)
      // Modification of some elements in DOM with AJAX must be reload to avoid missing DOM
      $('#panel-music').on(LIVING.events.song.list_updated, function() {
        songList = $(document).find('#panel-music tbody tr');
        songListName = researchListSong(songList);
      });

      // Workaround research on last char deleted
      $('input.search').on('keydown', function(e) {
          var value = $(this).val();

          if (e.which === 8 && value.length === 1) {
            $(songList).show();
          }
      });

      // Research on (title, artist, genre)
      $('input.search').on('keyup', function(e) {
          var value = $.trim($(this).val());

          if (value.length > 0) {
            var strEscaped = escapeRegExp(value);
            var regex = new RegExp(strEscaped, "i");

            $.each(songListName, function (index) {

              if (!regex.test(songListName[index])) {
                $(songList[index]).hide();
              } else {
                $(songList[index]).show();
              }
            });
          }
      });
  });
})(jQuery);
