var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "  Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable. Please confirm you enabled GPS on your device and allowed this app access. Thank you."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown