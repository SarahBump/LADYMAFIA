function toggleNav() {
  $(window).scroll(function() {
    if($(this).width() < 769 && $(this).scrollTop() > 50){
      $('.header-wrapper').hide();
      $('.post-nav').show();
    } else {
      $('.header-wrapper').show();
      $('.post-nav').hide();
    }
  });
}

function mobileLinkColors(){
  if(window.innerWidth < 767){
    $('a.post-link').on('click', function(e){
      e.preventDefault();
      $(this).parent('.post-summary').addClass('tapped');
      window.setTimeout(gotoPost($(this)), 30000);
    })
  }
}

function gotoPost(el) {
  window.location = el.attr('href');
}

function shareThis() {
  $('.share-btn').click(function(){
    console.log('shared!')
    // $('.share-action').hide();
    $('.share-this ul')
      .toggleClass("visible")
      .toggle("slow");
  })
  // $('.share-btn').hover(function(){
  //   if(!$('.visible').length){
  //     $('.share-action').fadeToggle("slow");
  //   }
  // })

  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var android = /Android/.test(navigator.userAgent) && !window.MSStream;
  if(iOS) {
    $('.share.SMS').href("sms:123456789:&body=testing");
  }else if(android) {
    $('.share.SMS').href("sms:123456789?body=smoetexthere");
  }
}

function newShareWindow() {
  $('.share-this ul a').click( function(){
    console.log('new window')
    if(!$(this).hasClass('email')){
      window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      return false;
    }
  });
}

function displayShareBtn() {
  $( window ).scroll(function() {
    if( $( ".post-wrapper" ).scrollTop() > 75){
      $('.share-this').fadeIn();

      if(window.innerWidth > 767){
        window.setTimeout(function(){
          $('.share-this ul')
            .toggleClass("visible")
            .fadeIn();
        }, 500);
      }

    }
  });
}

$(document).ready(function(){
  // if( $('.header-small').length > 0) {
  //   // toggleNav();
  // };
  mobileLinkColors();
  displayShareBtn();
  shareThis();
  newShareWindow();
})
