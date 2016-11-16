(function($){
  $(function(){
      var v = document.getElementsByTagName("audio")[0];
      var bar = document.getElementById('bar');
      var cursor = document.getElementById('cursor');
      var player = $('audio');
      var currentSong = $('#currentSong');

      var idListen = '';
      var idNext = '';

      $('#messageSuccesImport').click(function() {
        changeView('music');
      })

      $('#songs').on('click', 'li', function() {
            var songSrc = $(this).data('source');
            var songName = $(this).text();

            //Take the select id
            idNext = $(this).closest('li').attr('id');

            //Style li played
            if (idListen) {
                $('#'+idListen).removeClass('musicPlayed');
                $('#'+idListen).children('span').removeClass('ion-pause').addClass('ion-play');
            }

            if (idListen == idNext) {
                if (v.paused) {
                    $(this).children('span').removeClass('ion-play').addClass('ion-pause');
                    v.play();
                }else{
                    $(this).children('span').removeClass('ion-pause').addClass('ion-play');
                    $(this).addClass('musicPlayed');
                    v.pause();

                }
                return false;
            }

            $(this).addClass('musicPlayed');
            $(this).children('span').removeClass('ion-play').addClass('ion-pause');
            idListen = idNext;

            player.attr('src', songSrc);
            currentSong.text(songName);

            v.play();

            where = function(elem){
                return elem.currentTime;
            };

            duree = function(elem){
                return elem.duration;
            };

            dure = function(elem) {
                return elem.duration;
            }

            setInterval(function(){
              var seconde, minute, heure, duree, dureeTotale, pourcentage;
              duree = where(v);
              dureeTotale = dure(v);
              pourcentage = duree / dureeTotale;
              bar.style.width = (100 - (100 - (pourcentage * 100))) + "%";
              cursor.style.left = (100 - (100 - (pourcentage * 100))) + "%";
              duree = Math.round(duree);
              seconde =  duree % 60;
              minute = (duree - seconde) / 60;
              heure = (duree - seconde - (minute * 60)) / 3600;
          }, 200);

      });

      // Search feature
      var songList = $('#songs li');
      var songListName = [];

      $.each(songList, function(index) {
        songListName.push($(this).text());
      });

      $('input.search').on('keyup', function() {
          var value = $.trim($(this).val());

          if (value.length === 0) {
              $(songList).show();

              return false;
          }

          var regex = new RegExp(value, "i");

          $.each(songListName, function (index) {
              if (!regex.test(songListName[index])) {
                $(songList[index]).hide();
              }
          });
      });
  });
})(jQuery);
