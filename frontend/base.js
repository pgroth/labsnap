var store;

(function () {
    console.log("blah")
    
    var fb = new FingerBlast ('body');
    store = new Persist.Store('labsnap');
    
   
    var takePicture = document.querySelector("#browse");
    
    console.log(takePicture);
    
    if (takePicture != undefined && takePicture != null) {
    takePicture.onchange = function (event) {
        console.log("got change event");
        // Get a reference to the taken picture or chosen file
        var files = event.target.files,
            file;
            if (files && files.length > 0) {
                file = files[0];
                    // Get window.URL object
                    var URL = window.URL || window.webkitURL;
 
                    // Create ObjectURL
                    var imgURL = URL.createObjectURL(file);
                    store.set('image', imgURL);
 
            }
        
    };}
    
 
    
   // window.ondevicemotion = function(event) {
//         console.log("blah");
//         var xVal = event.accelerationIncludingGravity.x;
//         var yVal = event.accelerationIncludingGravity.y;
//         var msg = document.querySelector("#msgs");
//         if (msg) {
//             msg.innerHTML = "X: " + xVal + " Y: " + yVal;
//         }
// 
//     }

    
    
})();


function HandleBrowseClick()
{
        console.log("what's up");
         var fileinput = document.getElementById("browse");
        fileinput.click();
        
}

function Handlechange()
{
        var fileinput = document.getElementById("browse");
        var textinput = document.getElementById("filename");
        textinput.value = fileinput.value;
}

function getImageUrl() {
    imgurl = store.get('image');
	return imgurl;
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