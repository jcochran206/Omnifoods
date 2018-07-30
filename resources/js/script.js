$(document).ready(function(){
$('.js--section-features').waypoint(function(direction){
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
});

/*scroll to button */
$('.js--scroll-to-plans').click(function(){
  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
});

$('.js--scroll-to-start').click(function(){
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
});

/*  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window')
  }, {
    offset: '25%'
  }) */


});
