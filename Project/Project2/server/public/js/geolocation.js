//check if geolocation is available on the browser
if ('geolocation' in navigator) {
  console.log('geolocation available');

  navigator.geolocation.getCurrentPosition(position => {
    const userPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
    console.log(position);
    $('#latitude').html(userPosition.latitude);
    $('#longitude').html(userPosition.longitude);
    // Show a map centered at latitude / longitude.
  });

} else {
  console.log('geolocation not available');
}

//Handling errors
// Request repeated updates.
const watchId = navigator.geolocation.watchPosition(
  scrollMap, handleError
);

function scrollMap(position) {
  const { latitude, longitude } = position.coords;
  // Scroll map to latitude / longitude.
}

function handleError(error) {
  // Display error based on the error code.
  const { code } = error;
  switch (code) {
    case GeolocationPositionError.TIMEOUT:
      // Handle timeout.
      break;
    case GeolocationPositionError.PERMISSION_DENIED:
      // User denied the request.
      console.log('geolocation permission denied')
      break;
    case GeolocationPositionError.POSITION_UNAVAILABLE:
      // Position not available.
      break;
  }
}
