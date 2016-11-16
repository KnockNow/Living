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

    // Change view
    $('#home').click(function() {
      changeView('home');
    })

    $('#music').click(function(){
      changeView('music');
    })

    $('#disc').click(function(){
      changeView('disc');
    })

    // For mobile
    $('#homeSmall').click(function() {
      changeMobileView('homeSmall');
    })

    $('#musicSmall').click(function(){
      changeMobileView('musicSmall');
    })

    $('#discSmall').click(function(){
      changeMobileView('discSmall');
    })
});
