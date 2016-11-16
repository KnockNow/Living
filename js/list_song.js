(function($){
  var tplHTMLSong = function (source, title, artist, genre) {
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
