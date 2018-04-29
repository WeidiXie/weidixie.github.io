function init() {
	
	var portfoliosAll =[];
	//portfoliosAll =portfolios[0];
	for (var i = 0; i < portfolios.length; i++) {
		portfoliosAll = portfoliosAll.concat(portfolios[i]);
	}
	var portfolioMenus =[
		{
			txt :"All"
		}
	].concat(portfolioMenu);
	$('#portfolioMenu').append(Handlebars.compile( $('#templateWorksMenu').html() )( portfolioMenus));
	$('#gridAll').append(Handlebars.compile( $('#template_works').html() )( portfoliosAll));
	for (var i = 0; i < portfolios.length; i++) {
		$('#grid'+i).append(Handlebars.compile( $('#template_works').html() )( portfolios[i]));
	}
}
init();
$(document).ready(function () {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true   // 100% fit in a container
	});
	jQuery(function($) {
		$(".swipebox").swipebox();
	});
});		