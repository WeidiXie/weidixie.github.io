function init() {
	$('#header').load("html/header.html"); 
	$('#about').load("html/about_me.html"); 
	$('#work_experience').load("html/work_experience.html"); 
	$('#education').load("html/education.html"); 
	$('#skills').load("html/skills.html"); 
	$('#portfolio').load("html/portfolio.html");
	$('#contact').load("html/contact.html"); 
	$('#footer').load("html/footer.html"); 

  document.title = myself.name;
}
init();

$(window).scroll(function(e){ 
  var $el = $('.top-nav'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  var offsetHeight = document.getElementById('home').offsetHeight*1.01;
  if ($(this).scrollTop() > offsetHeight && !isPositionFixed){ 
    $('.top-nav').css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < offsetHeight && isPositionFixed)
  {
    $('.top-nav').css({'position': 'static', 'top': '0px'}); 
  } 
});