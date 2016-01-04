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
    $('.share-action').hide();
    $('.share-this ul a')
    .toggleClass("visible")
    .toggle("slow", function(){
      // $('.share-action').hide();
    });
  })
  $('.share-btn').hover(function(){
    if(!$('.visible').length){
      $('.share-action').fadeToggle("slow");
    }
  })
}

function newShareWindow() {
  $('.share-this ul a').click( function(){
    console.log('new window')
    window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  });
}

$(document).ready(function(){
  // if( $('.header-small').length > 0) {
  //   // toggleNav();
  // };
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var android = /Android/.test(navigator.userAgent) && !window.MSStream;
  if(iOS) {
    $('.share.SMS').href("sms:123456789:&body=testing");
  }else if(android) {
    $('.share.SMS').href("sms:123456789?body=smoetexthere");
  }
  mobileLinkColors();
  shareThis();
  newShareWindow();
})
