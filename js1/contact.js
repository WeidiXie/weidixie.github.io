function init() {
	document.getElementById("contactEmail").innerHTML = starter.email;
	document.getElementById("contactEmail").href  ="mailto:"+ starter.email;
	document.getElementById("contactPhone").innerHTML ="Call me :"+ starter.phone;
	document.getElementById("contactAddress").innerHTML = starter.address;
	document.getElementById('iframes').src = starter.contactMapEmbadded;
}
init();
