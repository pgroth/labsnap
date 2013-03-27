(function () {
    console.log("blah")
   
    var takePicture = document.querySelector("#browse");
    var showPicture = document.querySelector("#show-picture");
    var W3CDOM = (document.createElement && document.getElementsByTagName);

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