$( document ).ready(function() {
    // View display : Only 'home', 'music', 'disc'
    var view = 'home';
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

    $('.panel-select').on('click', 'span', function() {
        // This statement manage the menu navigation
        var currentElement = $(this);
        var elementDisplayed = $('.panel-select span.controlActive').first();

        if (elementDisplayed.data('target') === currentElement.data('target')) {
          return false;
        }

        var targetDisplayed = elementDisplayed.data('target');

        $(targetDisplayed).addClass('hide');
        elementDisplayed.removeClass('controlActive');

        // Show main content
        var currentTarget = currentElement.data('target');

        $(currentTarget).removeClass('hide');
        currentElement.addClass('controlActive');
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
    })
<<<<<<< HEAD
=======
// <<<<<<< HEAD
//
//     // Change view
//     $('#home').click(function() {
//       changeView('home');
//     })
//
//     $('#music').click(function(){
//       changeView('music');
//     })
//
//     $('#disc').click(function(){
//       changeView('disc');
//     })
//
//     // For mobile
//     $('#homeSmall').click(function() {
//       changeMobileView('homeSmall');
//     })
//
//     $('#musicSmall').click(function(){
//       changeMobileView('musicSmall');
//     })
//
//     $('#discSmall').click(function(){
//       changeMobileView('discSmall');
//     })
// =======
// >>>>>>> 419fecc310a6404aa08c8aa79fec6e4acbc25a6d
>>>>>>> 0702b07a75bc471865e8a0e8e97ea39b9c85f431
});
