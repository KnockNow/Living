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

      console.log($window.width());

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
        //Change menu
        $('#music').removeClass('controlActive');
        $('#disc').removeClass('controlActive');
        $('#home').addClass('controlActive');
        //m
        $('#musicSmall').removeClass('controlActive');
        $('#discSmall').removeClass('controlActive');
        $('#homeSmall').addClass('controlActive');

        //View
        if (view != 'home') {
            $('.myMusic').hide();
            $('.discover').hide();
            $('.main').fadeIn();
            view = 'home';
        }
    })

    $('#music').click(function(){
        //Change menu
        $('#home').removeClass('controlActive');
        $('#disc').removeClass('controlActive');
        $('#music').addClass('controlActive');
        //m
        $('#homeSmall').removeClass('controlActive');
        $('#discSmall').removeClass('controlActive');
        $('#musicSmall').addClass('controlActive');

        //View
        if (view != 'music') {
            $('.discover').hide();
            $('.main').hide();
            $('.myMusic').fadeIn();
            view = 'music';
        }
    })

    $('#disc').click(function(){
        //Change menu
        $('#music').removeClass('controlActive');
        $('#home').removeClass('controlActive');
        $('#disc').addClass('controlActive');
        //m
        $('#musicSmall').removeClass('controlActive');
        $('#homeSmall').removeClass('controlActive');
        $('#discSmall').addClass('controlActive');

        //View
        if (view != 'disc') {
            $('.main').hide();
            $('.myMusic').hide();
            $('.discover').fadeIn();
            view = 'disc';
        }
    })

    // For mobile
    $('#homeSmall').click(function() {
        $('#musicSmall').removeClass('controlActive');
        $('#discSmall').removeClass('controlActive');
        $('#homeSmall').addClass('controlActive');
        //c
        $('#music').removeClass('controlActive');
        $('#disc').removeClass('controlActive');
        $('#home').addClass('controlActive');
        //View
        if (view != 'home') {
            $('.myMusic').hide();
            $('.discover').hide();
            $('.main').show();
            view = 'home';
        }
    })

    $('#musicSmall').click(function(){
        $('#homeSmall').removeClass('controlActive');
        $('#discSmall').removeClass('controlActive');
        $('#musicSmall').addClass('controlActive');
        //c
        $('#home').removeClass('controlActive');
        $('#disc').removeClass('controlActive');
        $('#music').addClass('controlActive');
        //View
        if (view != 'music') {
            $('.discover').hide();
            $('.main').hide();
            $('.myMusic').show();
            view = 'music';
        }
    })

    $('#discSmall').click(function(){
        $('#musicSmall').removeClass('controlActive');
        $('#homeSmall').removeClass('controlActive');
        $('#discSmall').addClass('controlActive');
        //c
        $('#music').removeClass('controlActive');
        $('#home').removeClass('controlActive');
        $('#disc').addClass('controlActive');
        //View
        if (view != 'disc') {
            $('.main').hide();
            $('.myMusic').hide();
            $('.discover').show();
            view = 'disc';
        }
    })
});
