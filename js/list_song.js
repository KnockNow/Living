(function($){
  $(function(){
      $.getJSON("js/data/song.json", function(data) {
        var song = data.data;
        var html = '';

        for (i in song) {
          html += tplHTMLSong(song[i].source, song[i].title, song[i].artist, song[i].genre);
        }

        $('#panel-music tbody').append(html);
        $('#panel-music').trigger(LIVING.events.song.list_updated);
      });
  });
})(jQuery);
