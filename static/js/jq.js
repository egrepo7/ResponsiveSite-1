$(document).ready(function() {

  var scrollPos = 0

  $(window).scroll(function(){
    var currScrollPos = $(this).scrollTop();
    if(currScrollPos > scrollPos){
      $('#navbar-fader').fadeOut(1000);
    }
    else{
      $('#navbar-fader').fadeIn(500);
    }
  });
});
