var directionsService = null;
var directionsDisplay = null;
var start = null;
var end = null;


function initMap() {
  console.log("in the initMap function");
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  start = new google.maps.LatLng(startLat, startLng); //harrison hot springs
  end = new google.maps.LatLng(endLat, endLng); //boston bar

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: start,
      mapTypeId: 'hybrid',
      gestureHandling: 'cooperative' //this should in theory fix the zoom/scroll feature when we scroll down the page
    });

  directionsDisplay.setMap(map);
  calcRoute();

  //MARKERS IN HERE ///////
  var contentShovelCreek5km = '<div id="content">'+
      '<h5 id="firstHeading" class="firstHeading">Shovel Creek 5km ALERT</h5>'+
      '<div id="bodyContent">'+
      '<p>' +
      'WARNING: Big hole in the ground at 5.7km past Shovel Creek Head.' +
      '</p>'+
      '<a href="http://ihikebc.com/trips/2011/trip050ShovelCreekFSR.htm">2011 Guide</a>' +
      '</div>';

  var markerShovelCreek5km = new google.maps.Marker({
    position: {lat: 49.805572, lng: -121.792502},
    map: map,
    title: 'Shovel Creek 5km ALERT'
  });

  var infoShovelCreek5km = new google.maps.InfoWindow({
    content: contentShovelCreek5km
  });

  var contentShovelCreek = '<div id="content">'+
      '<h5 id="firstHeading" class="firstHeading">Shovel Creek FSR Start Point</h5>'+
      '<div id="bodyContent">'+
      '<p>' +
      'Zero your odometer at the sign, right as the Harrison East FSR merges to Shovel Creek FSR.' +
      'Travel on Shovel Creek FSR to 11.2 mark, where the road became too narrow, and there was threat of scratching our ride with large stones.' +
      '</p>'+
      '<a href="http://ihikebc.com/trips/2011/trip050ShovelCreekFSR.htm">2011 Guide</a>' +
      '</div>';

  var markerShovelCreek = new google.maps.Marker({
    position: {lat: 49.782760, lng: -121.862497},
    map: map,
    title: 'Shovel Creek'
  });

  var infoShovelCreek = new google.maps.InfoWindow({
    content: contentShovelCreek
  });

/// MARKERS IN HERE //////////

  function calcRoute() {
    var selectedMode = "DRIVING";
    var request = {
      origin: start, // Haight.
      destination: end,
      travelMode: google.maps.TravelMode[selectedMode]
    };

    preserveViewport: true;

    directionsService.route(request, function(response, status) {
      console.log("in the directionService.route function");
      console.log(status);
      console.log(response);
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
  }
  markerShovelCreek.addListener('click', function() {
    infoShovelCreek.open(map, markerShovelCreek);
  });

  markerShovelCreek5km.addListener('click', function() {
    document.getElementById('ytplayer').src = "https://www.youtube.com/embed/rN49Sxg23jQ?rel=0&amp;showinfo=0&amp;start=248&mute=1&autoplay=1";
    infoShovelCreek5km.open(map, markerShovelCreek5km);
  });
}
