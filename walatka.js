function checkCookie() {
    var name = document.cookie;
    if (name != "") {
        name = name.substring(5);
        document.getElementById("formName").value = name;
    }

}
function checkPermission() {
    var accelerationX = 0;
    var accelerationY = 0;
    var accelerationZ = 0;

    var startTime = 0;

    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    motionEventListener();
                }
            })
            .catch(console.error)

    } else {
        motionEventListener();


    }



    function motionEventListener() {
        startTime = Date.now();
        document.getElementById("accelerationXfinal").innerHTML = "x ";
        document.getElementById("accelerationYfinal").innerHTML = "y ";
        document.getElementById("accelerationZfinal").innerHTML = "z ";
        window.addEventListener('devicemotion', function (event) {

            if (Date.now() < (startTime + 3000)) {
                motionHandler(event);
            }
            else {
                document.getElementById("accelerationXfinal").innerHTML = "x " + accelerationX;
                document.getElementById("accelerationYfinal").innerHTML = "y " + accelerationY;
                document.getElementById("accelerationZfinal").innerHTML = "z " + accelerationZ;
                var score = Math.round(accelerationX + accelerationY + accelerationZ);
                document.getElementById("scoreP").style.display = "block";
                checkCookie();
                document.getElementById("score").value = score;
            }
        }, false);
    }

    function motionHandler(event) {

        if (Math.abs(event.acceleration.x) > accelerationX) {
            accelerationX = event.acceleration.x;
        }
        if (Math.abs(event.acceleration.y) > accelerationY) {
            accelerationY = event.acceleration.y;
        }
        if (Math.abs(event.acceleration.z) > accelerationZ) {
            accelerationZ = event.acceleration.z;
        }
        document.getElementById("accelerationX").innerHTML = "x " + event.acceleration.x;
        document.getElementById("accelerationY").innerHTML = "y " + event.acceleration.y;
        document.getElementById("accelerationZ").innerHTML = "z " + event.acceleration.z;
    }
}

function formSubmit() {
    alert("form submit");
}