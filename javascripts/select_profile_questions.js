function compileQuestions() {
  console.log('lollll');
  event.preventDefault();
  var questions = [];
  $( "input:checked" ).each(function( index ) {
    console.log( index + ": " + $( this ).val() ); questions.push($( this ).val());
  });
    return false;
}

