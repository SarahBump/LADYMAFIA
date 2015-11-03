$(document).ready(function(){
  $('img').mouseenter(function(){
    $('.placeholder').css('background-color', 'white');
  });

  $('img').mouseleave(function(){
    $('.placeholder').css('background-color', 'black');
  });

});
