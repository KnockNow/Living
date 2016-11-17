$(document).ready(function() {
  if (sessionStorage.getItem('customColor')) {
    $('.colorBg').css('backgroundColor', sessionStorage.getItem('customColor'));
    $('.color').css('color', sessionStorage.getItem('customColor'));

    // var controlActive = "#" + $('.controlActive').attr("id");
    // var borderLeft = '2px solid ' + sessionStorage.getItem('customColor');

    // $(controlActive).css('color', sessionStorage.getItem('customColor'));
    // $(controlActive).css('border-left', borderLeft);

  }

  $('#hexaColor').change(function() {
    if (sessionStorage.getItem('customColor')) {
      sessionStorage.removeItem('customColor');
    }
    sessionStorage.setItem("customColor", this.value);
    $('.colorBg').animate({backgroundColor: this.value}, 300);
    $('.color').animate({color: this.value}, 300);
    // $('.controlActive').animate({color: this.value}, 300);
    // $('.controlActive').animate({borderColor: this.value}, 300);

  })
})
