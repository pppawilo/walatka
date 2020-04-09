function checkPermission() {
    var accelerationX = 0;
    var accelerationY = 0;
    var accelerationZ = 0;

    var startTime = 0;
    document.getElementById("demo").innerHTML = d.getTime();
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    startTime = Date.now();
                    motionEvent();
                }
            })
            .catch(console.error)

    } else {
        motionEvent();


    }


    function motionEvent() {
        window.addEventListener('devicemotion', function (event) {
            if (Date.now() < startTime + 3000) {
                motionHandler(event);
            } else {
                document.getElementById("accelerationXfinal").innerHTML = "x " + accelerationX;
                document.getElementById("accelerationYfinal").innerHTML = "y " + accelerationY;
                document.getElementById("accelerationZfinal").innerHTML = "z " + accelerationZ;
            }
        }, false);
    }

    function motionHandler(event) {

        if (event.acceleration.x > accelerationX) {
            accelerationX = event.acceleration.x;
        }
        if (event.acceleration.y > accelerationY) {
            accelerationY = event.acceleration.y;
        }
        if (event.acceleration.z > accelerationZ) {
            accelerationZ = event.acceleration.Z;
        }
        document.getElementById("accelerationX").innerHTML = "x " + event.acceleration.x;
        document.getElementById("accelerationY").innerHTML = "y " + event.acceleration.y;
        document.getElementById("accelerationZ").innerHTML = "z " + event.acceleration.z;
    }
}
