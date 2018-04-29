function init() {
	$('#aboutme').append(Handlebars.compile( $('#template_aboutme').html() )( aboutME));}
init();
