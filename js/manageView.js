/* Normal view */
function changeView(view) {
  if(view == 'home') {
    //Change menu
    $('#music').removeClass('controlActive');
    $('#disc').removeClass('controlActive');
    $('#home').addClass('controlActive');
    //m
    $('#musicSmall').removeClass('controlActive');
    $('#discSmall').removeClass('controlActive');
    $('#homeSmall').addClass('controlActive');

    //View
    $('.myMusic').hide();
    $('.discover').hide();
    $('.main').fadeIn();
    view = 'home';

  }else if (view == 'music') {
    //Change menu
    $('#home').removeClass('controlActive');
    $('#disc').removeClass('controlActive');
    $('#music').addClass('controlActive');
    //m
    $('#homeSmall').removeClass('controlActive');
    $('#discSmall').removeClass('controlActive');
    $('#musicSmall').addClass('controlActive');

    //View
    $('.discover').hide();
    $('.main').hide();
    $('.myMusic').fadeIn();
    view = 'music';

  }else if (view = 'disc') {
    //Change menu
    $('#music').removeClass('controlActive');
    $('#home').removeClass('controlActive');
    $('#disc').addClass('controlActive');
    //m
    $('#musicSmall').removeClass('controlActive');
    $('#homeSmall').removeClass('controlActive');
    $('#discSmall').addClass('controlActive');

    //Before change : Clean the View
    $('#messageSuccesImport').hide();
    $('#messageImport').show();
    $('#playerId').show();

    //View
    $('.main').hide();
    $('.myMusic').hide();
    $('.discover').fadeIn();
    view = 'disc';

  }else{
    console.log('Error: View unknown');
  }
}
/* End normal view */

/* Mobile view */
function changeMobileView(view) {
  if (view == 'homeSmall') {
    $('#musicSmall').removeClass('controlActive');
    $('#discSmall').removeClass('controlActive');
    $('#homeSmall').addClass('controlActive');
    //c
    $('#music').removeClass('controlActive');
    $('#disc').removeClass('controlActive');
    $('#home').addClass('controlActive');

    //View
    $('.myMusic').hide();
    $('.discover').hide();
    $('.main').show();
    view = 'home';

  }else if (view == 'musicSmall') {
    $('#homeSmall').removeClass('controlActive');
    $('#discSmall').removeClass('controlActive');
    $('#musicSmall').addClass('controlActive');
    //c
    $('#home').removeClass('controlActive');
    $('#disc').removeClass('controlActive');
    $('#music').addClass('controlActive');
    //View
    $('.discover').hide();
    $('.main').hide();
    $('.myMusic').show();
    view = 'music';

  }else if (view == 'discSmall') {
    $('#musicSmall').removeClass('controlActive');
    $('#homeSmall').removeClass('controlActive');
    $('#discSmall').addClass('controlActive');
    //c
    $('#music').removeClass('controlActive');
    $('#home').removeClass('controlActive');
    $('#disc').addClass('controlActive');
    //View
    $('.main').hide();
    $('.myMusic').hide();
    $('.discover').show();
    view = 'disc';

  }else{
    console.log('Error: View unknown');
  }
}
/* End Mobile view */
