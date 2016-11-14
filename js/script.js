(function($){
  $(function(){
      var player = $('audio');
      var currentSong = $('#currentSong');

      $('#songs').on('click', 'li', function() {
        var songSrc = $(this).data('source');
        var songName = $(this).text();

        player.attr('src', songSrc);
        currentSong.text(songName);
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
