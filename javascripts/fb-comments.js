function commentDisplay(){
  if(parseInt($('.fb_comments_count').text()) === 0){
    $('.first-comment').show();
  }

  $('.first-comment button').click(function(){
    console.log('hello');
    $('.first-comment').hide();
    $('.fb-comments').show();
  })
};

$(document).ready(function(){
  commentDisplay();
})
