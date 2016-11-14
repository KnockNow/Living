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
  });
})(jQuery);
