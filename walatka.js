function checkPermission() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    window.addEventListener('devicemotion', function (event) {
                        motionHandler(event);
                    }, false);
                }
            })
            .catch(console.error)

    } else {
        window.addEventListener('devicemotion', function (event) {
            motionHandler(event);
        }, false);


    }

    function motionHandler(event) {
        document.getElementById("accelerationX").innerHTML = "x " + event.accelerationIncludingGravity.x;
        document.getElementById("accelerationY").innerHTML = "y " + event.accelerationIncludingGravity.y;
        document.getElementById("accelerationZ").innerHTML = "z " + event.accelerationIncludingGravity.z;
        document.getElementById("accelerationX2").innerHTML = "x2 " + event.acceleration.x;
        document.getElementById("accelerationY2").innerHTML = "y2 " + event.acceleration.y;
        document.getElementById("accelerationZ2").innerHTML = "z2 " + event.acceleration.z;
    }
}
