$(document).ready(function(){
  $("button#menu-btn").click(function(){
    $("#part").toggleClass('visible', 'slow', 'linear');
  })
});
$(document).ready(function () {
  $('#btn-about').click( function(){
    $('#about').animate({
      opacity: 'toggle'
    }, 1500);
    $('#portfolio').hide();
  });
  $('#btn-portfolio').click( function(){
    $('#portfolio').animate({
      opacity: 'toggle'
    }, 1500);
    $('#about').hide();
  });
  $('#btn-contact').click( function(){
    $('#contact').toggle();
    $('#about').hide();
    $('#portfolio').hide();
  });
});