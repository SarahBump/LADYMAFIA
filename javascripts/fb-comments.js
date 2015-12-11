function commentDisplay(){
  if($('.fb_comments_count').text() != 0){
    $('.first-comment').hide();
    $('.fb-comments').show();
  }else {
    $('.first-comment').show();
  }

  $('.first-comment button').click(function(){
     $('.first-comment').hide();
     $('.fb-comments').show();
   })
 }

window.fbAsyncInit = function() {
     FB.init({
       appId      : '710933359043848',
       xfbml      : true,
       version    : 'v2.5'
     });
   };

   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



    // commentDisplay();
