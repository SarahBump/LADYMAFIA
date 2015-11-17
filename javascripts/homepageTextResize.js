function resizeText() {
  window.addEventListener('resize', function() {
	var headerText = document.querySelector('h1.header-title');
	headerText.style.fontSize = "12vw";
  });
}

$(document).ready(function(){
  // resizeText();
})
