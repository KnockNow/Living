$( document ).ready(function() {

  (function($){
    $(function(){
        $.getJSON("js/data/song.json", function(data) {
          var elem = data.data;

          var html = '';
          for (i in elem) {
            var source = elem[i].source;
            title = elem[i].title;
            artist = elem[i].artist;
            genre = elem[i].genre;
            extension = elem[i].extension;
            //$("#songs_grid").append("<li id=Mos_"+ i +"class=ion-play data-source="+ elem[i].source +"></li>")
            html += '<li id="Mos_'+ i +'"><i class="ion-play"></i><div id="container_'+ i +'" class="element_container"><div class="elem_mosaic">Titre : '+ title +'</div><div class="elem_mosaic">Artist : '+ artist +'</div><div div class="elem_mosaic">Genre : '+ genre +'</div><div div class="elem_mosaic">Extension : '+ extension +'</div></div></li>';
          }
          $('#songs_grid').append(html);
          $('#songs_grid li').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'width': '50px',
            'height': '50px',
            'list-style': 'none',
            'padding': '2em',
            'background-color': '#c0392b',
            'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, .05), 0 1px 4px 0 rgba(0, 0, 0, .08), 0 3px 1px -2px rgba(0, 0, 0, .2)',
            'border-radius': '10px'
          });

          $('.element_container').css({
            'display': 'none'
          });

          $('#songs_grid li').hover(function(){
            var element_id =  $(this).attr('id');
            /*var element_display = ($('.element_container').attr("id"));
            console.log(element_display);*/
            /*$(element_id + '.element_container').css({
              'display': 'block'
            })*/
            $(this).css({
              'width' : '250px',
              'height' : '200px'
            });
            $(this).find('.element_container').show();
            $(this).find('.element_container').css({
                'font-family': 'Roboto'+', sans-serif'
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
