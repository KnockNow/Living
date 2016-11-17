$( document ).ready(function() {
    //Menu show : Only bool
    var smallMenu = false;

  if ($(window).width() < 1235) {
    $('.smallMenu').css('display', 'block');
    $('.control').css('display', 'none');
  }

  if ($(window).width() < 545) {
    $('.ion-android-search').css('display', 'none');
    $('.search').css('display', 'none');
  }

  /* Resize dynamique window */
  $(window).resize(function(){
    	var width = $(window).width(), height = $(window).height();
		  var $window = $(window);

      if ($window.width() < 1235) {
        $('.control').css('display', 'none');
        $('.smallMenu').css('display', 'block');
      }else{
        $('.control').css('display', 'block');
        $('.smallMenu').css('display', 'none');
      }

      if ($(window).width() < 545) {
        $('.ion-android-search').css('display', 'none');
        $('.search').css('display', 'none');
      }else{
        $('.ion-android-search').css('display', 'block');
        $('.search').css('display', 'block');
      }

    });

    // Change view dynamically
    $(document).on('click', '.change-view', function() {
        // This statement manage the menu navigation
        var currentElement = $(this);
        var elementDisplayed = $('.panel-select span.controlActive').first();

        if (elementDisplayed.data('target') === currentElement.data('target')) {
          return false;
        }

        var targetDisplayed = elementDisplayed.data('target');
        var menuCurrentElement = $('.panel-select span[data-target="' + targetDisplayed + '"]');

        $(targetDisplayed).addClass('hide');
        menuCurrentElement.removeClass('controlActive');

        // Show main content
        var currentTarget = currentElement.data('target');
        var menuElement = $('.panel-select span[data-target="' + currentTarget + '"]');

        $(currentTarget).removeClass('hide');
        menuElement.addClass('controlActive');
    });

    // Display Small Menu
    $('.smallMenu').click(function() {
        if(smallMenu) {
            // Hide menu
            $('.control-mobile').slideUp();
            $('#iconSmallMenu').removeClass('ion-close').addClass('ion-navicon-round');
            smallMenu = false;
        }else{
            // Show menu
            $('.control-mobile').slideDown();
            $('#iconSmallMenu').removeClass('ion-navicon-round').addClass('ion-close');
            smallMenu = true;
        }
    });
});
