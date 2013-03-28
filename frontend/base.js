var store;

(function () {
    console.log("blah")
    
    //var fb = new FingerBlast ('body');
    store = new Persist.Store('labsnap');
   
   window.addEventListener('push', function() {
   
            console.log("bob"); 
            
            console.log("what's up");
            
   });
   
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
                    var showPicture = document.querySelector("#show-picture");
		            showPicture.src = imgURL;
 
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
        console.log(fileinput);
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

function addRowToCsv(elementId) {
	console.log("adding row");
	var element = $('#' + elementId);
	if (element) {
		var csv = element.val();
		//count number of comma's on first row
		var numCommas = getNumCommasOnFirstRow(csv);
		var newline = " ";
		for (i = 0; i < numCommas; i++) {
			newline += ", ";
		}
		csv += "\n" + newline;
		element.val(csv);
	} else {
		console.log("no element to add row to");
	}
}

function getNumCommasOnFirstRow(csv) {
	var num = 0;
	var lines = csv.match(/^.*((\r\n|\n|\r)|$)/gm);
	//go to first line with string length
	for(i = 0; i < lines.length; i++) {
		var trimmedline = trim(lines[i]);
		if (trimmedline.length > 0) {
			num = trimmedline.match(/,/g).length;
			break;
		}
		
	}
	return num;
}

function addColToCsv(elementId) {
	var element = $('#' + elementId);
	var element = $('#' + elementId);
	if (element) {
		var csv = element.val();
		var lines = csv.match(/^.*((\r\n|\n|\r)|$)/gm);
		var newSetOfLines = [];
		for(i = 0; i < lines.length; i++) {
			newSetOfLines[i] = trim(lines[i]) + ", ";
		}
		element.val(newSetOfLines.join("\n"));
	} else {
		console.log("no element to add col to");
	}
}
function trim(string) {
	return string.replace(/^\s+|\s+$/g, '');
}