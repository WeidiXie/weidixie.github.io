function init() {
	$('#aboutme').append(Handlebars.compile( $('#template_aboutme').html() )( aboutME));
	$('#aboutAwards').append(Handlebars.compile( $('#template_aboutAwards').html() )( aboutAwards));
}
init();
