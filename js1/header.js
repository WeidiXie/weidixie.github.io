function init() {
	document.getElementById("init").innerHTML = starter.init;
	document.getElementById("intro").innerHTML = starter.intro;
	document.getElementById("status").innerHTML = starter.status;
	$('#headeraddress').append(Handlebars.compile( $('#template_header').html() )( header));
}
init();
