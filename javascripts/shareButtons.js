// console.log('test');
// //sharing buttons
// function shareThis() {
//   $('.share-btn').click(function(){
//     console.log('shared!')
//     $('.share-action').hide();
//     $('.share-this ul a')
//     .toggleClass("visible")
//     .toggle("slow", function(){
//       // $('.share-action').hide();
//     });
//   })
//   $('.share-btn').hover(function(){
//     if(!$('.visible').length){
//       $('.share-action').fadeToggle("slow");
//     }
//   })
// }
//
// function newShareWindow() {
//   $('.share-this ul a').click(function(){
//     console.log('new window');
//     window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
//     return false;
//   });
// }
//
// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// var android = /Android/.test(navigator.userAgent) && !window.MSStream;
// if(iOS) {
//   $('.share.SMS').href("sms8479222290:&body=testing");
// }else if(android) {
//   $('.share.SMS').href("sms:8479222290?body=smoetexthere");
// }
//
//
//   shareThis();
//   newShareWindow();
