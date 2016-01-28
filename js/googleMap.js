var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 25.05979435233689, lng: 121.53114572143547},
		//center: {lat: -120.58, lng: 23.58},
		zoom: 14
	});
  	
	$("#button2").click(function(){
		var $this = $(this);
		map.panTo({lat: 25.09, lng: 121.55});
	});
	
	var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	  var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	  };

	  infoWindow.setPosition(pos);
	  infoWindow.setContent('Location found.');
	  map.setCenter(pos);
	}, function() {
	  handleLocationError(true, infoWindow, map.getCenter());
	});
  } else {
	// Browser doesn't support Geolocation
	handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}