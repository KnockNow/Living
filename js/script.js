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

            bar.width(percent);
            cursor.css('left', percentLabel);

            time = Math.round(time);
            seconds =  time % 60;
            minutes = (time - seconds) / 60;
            hours = (time - seconds - (minutes * 60)) / 3600;
        }, 200);
      });

      // Search feature
      var songList = $('#panel-music td.song-title');
      var songListName = [];

      $.each(songList, function(index) {
        songListName.push($(this).text());
      });

      $('input.search').on('keyup', function() {
          var value = $.trim($(this).val());

          if (value.length === 0) {
            $(songList).parents().show();

            return false;
          }

          var regex = new RegExp(value, "i");

          $.each(songListName, function (index) {
              if (!regex.test(songListName[index])) {
                $(songList[index]).parent().hide();
              }
          });
      });
  });
})(jQuery);
