$( document ).ready(function() {

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
});
