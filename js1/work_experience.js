function init() {
	for ( var i = 0; i < workExperience.length; i++) { 
		if(i%2 ==1)
    	$('#work_experience').append(Handlebars.compile( $('#template_work_experienceRight').html() )( [workExperience[i]]));
		else
			$('#work_experience').append(Handlebars.compile( $('#template_work_experienceLeft').html() )( [workExperience[i]]));
	}
	
}
init();
