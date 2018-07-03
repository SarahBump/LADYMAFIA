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
  console.log('test')
  if($(window).innerWidth < 767){
    $('.share-this ul').addClass("visible");
  }

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
}

function newShareWindow() {
  $('.share-this ul a').click(
    function(){
    console.log('new window');
      if(!$(this).hasClass('email')){
        window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
      }
    });
}

function displayShareBtn() {
  $( window ).scroll(function() {
    if( $( ".post-wrapper, .alt-layout" ) && $(window).scrollTop() > 75){
      $('.share-this').fadeIn();

      if(window.innerWidth > 767){
        console.log('what')
        window.setTimeout(function(){
          $('.share-this ul')
            .toggleClass("visible")
            .fadeIn();
        }, 500);
      }

    }
  });
}
// Function which adds the 'animated' class to any '.animatable' in view
var doAnimations = function() {
console.log('do');
// Calc current offset and get all animatables
  var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');

  // Unbind scroll handler if we have no animatables
  if ($animatables.size() == 0) {
    $(window).off('scroll', doAnimations);
  }

  // Check all animatables and animate them if necessary
  $animatables.each(function(i) {
     var $animatable = $(this);
    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
      $animatable.removeClass('animatable').addClass('animated');
    }
  });

};

function mobileShareSize() {
console.log('scroll');
  var scrollTimeout = null;
  var scrollendDelay = 1000; // ms

$(window).scroll(function() {
      if ( scrollTimeout === null ) {
          scrollbeginHandler();
      } else {
          clearTimeout( scrollTimeout );
      }
      scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
  });

  $('html, body').on({
    'touchmove': function(e) {
        console.log($(this).scrollTop()); // Replace this with your code.
        if ( scrollTimeout === null ) {
            scrollbeginHandler();
        } else {
            clearTimeout( scrollTimeout );
        }
        scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
    }
  });

  function scrollbeginHandler() {
    // this code executes on "scrollbegin"
      $(".share-btn").stop().animate({
          zoom: 1
      });

  }

  function scrollendHandler() {
      // this code executes on "scrollend"
      if (window.scrollY > 75) {
        $(".share-btn").stop().animate({
          zoom: 1.5
      });
    }
      scrollTimeout = null;
  }
  // if(window.innerWidth < 768){
  //   $(document).scroll(function () {
  //     if (window.scrollY < 50) {
  //         $(".share-btn").stop().animate({
  //             zoom: 1
  //         });
  //     } else {
  //         $(".share-btn").stop().animate({
  //             zoom: 1.5
  //         });
  //     }
  //   });
  // }
}

function commentDisplay(numComments){
  console.log('comments');
  if(numComments > 0){
    console.log('true');
    $('.fb-comments').show();
    $('.post-details .comments').show()
  }else{
    $('.fb-comments').hide();
    $('.first-comment').show();
  }

  $('.first-comment button').click(function(){
     $('.first-comment').hide();
     $('.fb-comments').show();
   })
 }

$(document).ready(function(){
  // if( $('.header-small').length > 0) {
  //   // toggleNav();
  // };
  
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var android = /Android/.test(navigator.userAgent) && !window.MSStream;
  var url = $('.share.SMS').attr("href");
  var bodyText = 'Lady Mafia strikes again...' + url;
  if(iOS) {
    var newURL = 'sms: :&body=' + bodyText;
  }else if(android) {
    var newURL = 'sms: ?body=' + bodyText;
  }
  $('.share.SMS').attr('href', newURL);


  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');


  mobileLinkColors();
  displayShareBtn();
  shareThis();
  newShareWindow();
  if(window.innerWidth < 768){
    mobileShareSize();
  }
  
  var numComments = parseInt($('.fb_comments_count').text());
  commentDisplay(numComments);
});
