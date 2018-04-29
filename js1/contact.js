function init() {
	document.getElementById("contactEmail").innerHTML = starter.email;
	document.getElementById("contactEmail").href  ="mailto:"+ starter.email;
	document.getElementById("contactAddress").innerHTML = starter.address;
}
init();
