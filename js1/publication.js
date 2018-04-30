function init() {
	$('#publication_module').append(Handlebars.compile( $('#template_publication').html() )( publication));
}
init();
