function init() {
	$('#skillsLeft').append(Handlebars.compile( $('#template_skills').html() )( skillsLeft));
	$('#skillsRight').append(Handlebars.compile( $('#template_skills').html() )( skillsRight));
}
init();
