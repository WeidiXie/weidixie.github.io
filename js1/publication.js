function init() {
	$('#publication').append(Handlebars.compile( $('#template_publication').html() )( publication));
}
init();
