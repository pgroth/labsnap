
function getImageUrl() {
	return "http://www.eso.org/public/archives/images/screen/eso9948d.jpg";
}

function getLocation() {
	if (navigator.geolocation) {
		position = navigator.geolocation.getCurrentPosition(showPosition);
		console.log(position);
		return position.coords.latitude + ":" + position.coords.longitude;
	}
}
function getTime() {
	var d = new Date();
	return d.getTime();
}

function getMetaData() {
	return {
		"location" : getLocation(),
		"time" : getTime()
	};
}

