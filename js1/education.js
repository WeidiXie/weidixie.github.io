function init() {
	for (var i = 0; i < education.length; i++) { 
		if(i%2 ==1)
    	$('#educations').append(Handlebars.compile( $('#template_educationRight').html() )( [education[i]]));
		else
			$('#educations').append(Handlebars.compile( $('#template_educationLeft').html() )( [education[i]]));
	}
}

init();
