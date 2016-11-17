$( document ).ready(function() {

  (function($){
    $(function(){
        $.getJSON("js/data/song.json", function(data) {
          var elem = data.data;

          var html = '';
          for (i in elem) {
            var source = elem[i].source;
            var title = elem[i].title;
            var artist = elem[i].artist;
            var genre = elem[i].genre;
            var extension = elem[i].extension;

            html += '<li id="Mos_'+ i +'">'
              + '<i class="ion-play song-title" data-source="'+ source +'"></i><div id="container_'+ i +'" class="element_container">'
              + '<div class="elem_mosaic">Titre : '+ title +'</div>'
              + '<div class="elem_mosaic">Artist : '+ artist +'</div>'
              + '<div div class="elem_mosaic">Genre : '+ genre +'</div>'
              + '<div div class="elem_mosaic">Extension : '+ extension +'</div></div></li>';
          }
          $('#songs_grid').append(html);

          $('.element_container').css({
            'display': 'none'
          });

          $('#songs_grid li').hover(function(){
            var element_id =  $(this).attr('id');
            console.log($(this).attr('data-source'));
            $(this).css({
              'width' : '250px',
              'height' : '200px',
            });
            $(this).find('.element_container').show();
            $(this).find('.element_container').css({
                'font-family': 'Roboto'+', sans-serif',
                'font-weight': 'bold'
            })


        },
        function(){
          $(this).css({
            'width' : '50px',
            'height' : '50px'
          });
          $(this).find('.element_container').toggle();
        });

      });
    });

    $('#list_songs').on("click",function() {
      $('#songs_grid').css("display", "none");
      $('table').css("display", "table");
    });

    $('#mosaic_songs').on("click",function() {
      $('table').css("display", "none");
      $('#songs_grid').css("display", "flex");
    });

  })(jQuery);

});
