function toggleNav() {
  $(window).scroll(function() {
    if($(this).width() < 769 && $(this).scrollTop() > 150){
      $('.header-wrapper').hide();
      $('.post-nav').show();
    } else {
      $('.header-wrapper').show();
      $('.post-nav').hide();
    }
  });
}

$(document).ready(function(){
  if( $('.header-small').length ) {
    toggleNav();
  };
})
