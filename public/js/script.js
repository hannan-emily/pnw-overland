//RENDERING THE TRAIL MAP
function initMap() {
        //this sets the location variable from two coordinates
        var place = {lat: -25.363, lng: 131.044};

        //this is setting the map to THIS new location, using the google maps method
        //this calls the place variable (now as uluru)
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: place
        });

        //SETTING INFO INTO THE MARKER INFOWINDOW (DISPLAYS ON CLICK EVENT)
        //insert db.data.whatever into here
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        //SETTING THE CONTENT INTO THE MARKER INFOWINDO
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        //MARKERR IS TIED TO THE PLACE VARIABLE & THOSE COORDINATES (FOR NOW)
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        //ON CLICK LISTENER FOR MARRKER TO CALL THE INFOWINDOW & CONTENT
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
