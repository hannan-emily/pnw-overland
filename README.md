# PNW OVERLAND

View live app here:  https://pnw-overland.herokuapp.com/

PNW Overland is your interactive guide to backcountry road adventures in the Pacific Northwest. All you need to explore our world-famous mountain roads is a moderately high-clearance vehicle & you're set! All routes include an interactive map, real dashcam videos from the actual routes and GIS information for your upcoming trip.



### User Stories:

1. I want to find unique, adventurous driving routes near my home in the Vancouver or Seattle metro areas.

2. I want to use my truck, SUV or offroading vehicle outside of the city for it's intended use.

3. I want to explore the outdoors within the comfort of my car, instead of hiking.



### Process

Day 1 - Day 3
- Designed initial wireframes
- Built user stories
- Set initial routes for get, show
- Built trail models with data I sourced from a host of adventure route sites
- Investigated the youtube API to link in videos by location / GPS coordinates
- Built functional boilerplate for user authentication
- Added in materialize styling
- Started to work through Google Maps API documentation

Day 4 - Day 7
- Wrestling with google maps embedded and javascript api implementation - difficult to inject data programmatically from database using express and EJS
- Added get, post routes for main trail maps
- Added in markers with separate video and text content to one route
- Redo routes for PUT, since favoriteTrail no longer will work using a form within a materialize form
- Readme file created


### Technologies

Async
Bcrypt
CSS
Express
EJS
HTML
Materialize
Node.js
Postgres
Sequel

## Wireframe Sketches

### Home Page

![alt text](/public/img/screenshots/wireframe-home.png "Home")


### Trail Single Page

![alt text](/public/img/screenshots/wireframe-trail-single.png "Trail Single")

### Favorites Page

![alt text](/public/img/screenshots/wireframe-favorites.png "Favorites")


### Login Page

![alt text](/public/img/screenshots/wireframe-login.png "Login")


## Routes

![alt text](/public/img/screenshots/routes-pnw-overland.png "Routes")


## Models

![alt text](/public/img/screenshots/model-trails.png "Trails")

Associations : Has many Notes

![alt text](/public/img/screenshots/model-users.png "Users")

Associations : Has many FavoriteTrails

![alt text](/public/img/screenshots/model-favorite-trails.png "FavoriteTrails")

Associations : Belongs to one User

![alt text](/public/img/screenshots/model-notes.png "Notes")

Associations : Belongs to one Trail


## API Used

Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/
Google Maps Embed API: https://developers.google.com/maps/documentation/embed/

## Challenges

- YouTube api to embed videos by GPS data was initially thought to be feasible. But, many videos did not have the location data present.
- PUT routes for the favoriteTrail lists was difficult. Initally I tried using materialize modals with embedded forms, but the submit button layering became nearly impossible.
- Embedded maps on the landing page could't use the API, so the overlay and info windows I couldn't hide.

## Next Steps
- There are currently two edit routes that do not successfully work
- The delete route has an issue
- Add in a separate model for markers along each route. Currently only the Boston Bar route has waypoint markers with additional information and an additional video.This would have a 1:M association to the main Trails model.
