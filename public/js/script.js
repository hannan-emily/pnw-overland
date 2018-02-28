// //RENDERING THE TRAIL MAP
// function initMap() {
//         //this sets the location variable from two coordinates
//         var place = {lat: -25.363, lng: 131.044};
//
//         //this is setting the map to THIS new location, using the google maps method
//         //this calls the place variable (now as uluru)
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: place
//         });
//
//         //SETTING INFO INTO THE MARKER INFOWINDOW (DISPLAYS ON CLICK EVENT)
//         //insert db.data.whatever into here
//         var contentString = '<div id="content">'+
//             '<div id="siteNotice">'+
//             '</div>'+
//             '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//             '<div id="bodyContent">'+
//             '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//             'sandstone rock formation in the southern part of the '+
//             'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//             'south west of the nearest large town, Alice Springs; 450&#160;km '+
//             '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//             'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//             'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//             'Aboriginal people of the area. It has many springs, waterholes, '+
//             'rock caves and ancient paintings. Uluru is listed as a World '+
//             'Heritage Site.</p>'+
//             '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//             'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//             '(last visited June 22, 2009).</p>'+
//             '</div>'+
//             '</div>';
//
//         //SETTING THE CONTENT INTO THE MARKER INFOWINDO
//         var infowindow = new google.maps.InfoWindow({
//           content: contentString
//         });
//
//         //MARKER IS TIED TO THE PLACE VARIABLE & THOSE COORDINATES (FOR NOW)
//         var marker = new google.maps.Marker({
//           position: place,
//           map: map,
//           title: 'Uluru (Ayers Rock)'
//         });
//
//         //ON CLICK LISTENER FOR MARRKER TO CALL THE INFOWINDOW & CONTENT
//         marker.addListener('click', function() {
//           infowindow.open(map, marker);
//         });
//       }


// //THIS MAP DISPLAYS A ROUTE, BUT DOES NOT DISPLAY MARKERS
// function initMap() {
//   var directionsService = new google.maps.DirectionsService();
//   var directionsDisplay = new google.maps.DirectionsRenderer();
//   var haight = new google.maps.LatLng(37.7699298, -122.4469157);
//   var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
//   var mapOptions = {
//     zoom: 14,
//     center: haight
//   }
//   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   directionsDisplay.setMap(map);
// }
//
// function calcRoute() {
//   // var selectedMode = document.getElementById('mode').value;
//   var request = {
//       origin: {lat: 37.77, lng: -122.447},
//       destination: {lat: 37.768, lng: -122.511},
//       // Note that Javascript allows us to access the constant
//       // using square brackets and a string value as its
//       // "property."
//       travelMode: 'DRIVING'
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }

//THIS MAP SHOULD DISPLAY POINTS & THE ROUTES, BUT ONLY DISPLAYS A SINGLE MAP
// function initMap() {
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var directionsService = new google.maps.DirectionsService;
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 14,
//           center: {lat: 37.77, lng: -122.447}
//         });
//         directionsDisplay.setMap(map);
//
//         calculateAndDisplayRoute(directionsService, directionsDisplay);
//       }
//
//       function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//
//         directionsService.route({
//           origin: {lat: 37.77, lng: -122.447},  // Haight.
//           destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
//           // Note that Javascript allows us to access the constant
//           // using square brackets and a string value as its
//           // "property."
//           travelMode: 'DRIVING'
//         }, function(response, status) {
//           if (status == 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }

var directionsService = null;
var directionsDisplay = null;

function initMap() {
  console.log("in the initMap function");
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var haight = new google.maps.LatLng(37.7699298, -122.4469157);
  var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
  var mapOptions = {
    zoom: 14,
    center: haight
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
  calcRoute();
}

function calcRoute() {
  var selectedMode = "DRIVING";
  var request = {
    origin: {lat: 37.77, lng: -122.447},  // Haight.
    destination: {lat: 37.768, lng: -122.511},
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    console.log("in the directionService.route function");
    console.log(status);
    console.log(response);
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    }
  });
}
