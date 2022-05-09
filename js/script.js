document.getElementById("year").innerHTML = (new Date().getFullYear());

$('.navTrigger').click(function(){
  $(this).toggleClass('active');
  
  $('.myNav').css("display") == "block" 
  ? $('.myNav').css("display", "none") 
  : $('.myNav').css("display", "block");
});

$('.overlay-content').click(function(){
  $('.myNav').css("display", "none");
  $('.navTrigger').toggleClass('active');
});

