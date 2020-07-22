
var text = "Check out my work!";

for(var i in text) { 
  if(text[i] === " ") {
    $(".call").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".call").append( $("<span>").text(text[i]) ); 
  }
}

$('#arrow-gsus').click(() => {
  $('html, body').animate({
    scrollTop: $('#work').offset().top
    // scrollTop: 0
  }, 400);
});


$('#menu2').click(() => {
  $('html, body').animate({
    scrollTop: $('#Animation').offset().top
    // scrollTop: 0
  }, 400);
});

$('#menu3').click(() => {
  $('html, body').animate({
    scrollTop: $('#Web').offset().top
    // scrollTop: 0
  }, 400);
});

$('#menu4').click(() => {
  $('html, body').animate({
    scrollTop: $('#Photography').offset().top
    // scrollTop: 0
  }, 500);
});

$('#menu5').click(() => {
  $('html, body').animate({
    scrollTop: $('#Bio').offset().top
    // scrollTop: 0
  }, 500);
});
