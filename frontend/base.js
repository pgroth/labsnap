(function () {
    console.log("blah")
   
    var takePicture = document.querySelector("#take-picture");
    var showPicture = document.querySelector("#show-picture");
    console.log(takePicture);
    
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
 
                    // Set img src to ObjectURL
                    showPicture.src = imgURL;
 
                    // Revoke ObjectURL
            }
        
    };
    
   window.ondevicemotion = function(event) {
        console.log("blah");
        var xVal = event.accelerationIncludingGravity.x;
        var yVal = event.accelerationIncludingGravity.y;
        var msg = document.querySelector("#msgs");
        if (msg) {
            msg.innerHTML = "X: " + xVal + " Y: " + yVal;
        }

    }

    
    
})();