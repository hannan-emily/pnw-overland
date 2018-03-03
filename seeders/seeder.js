'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('trails', [{
      startLat: 49.613955,
      startLng: -121.820801,
      endLat: 49.863426,
      endLng: -121.442574,
      title: 'Boston Bar to Harrison East',
      subtitle: 'Mountainous, challenging backroad about an hour outside of Vancouver, BC. Multi-part trail you definitly need a high clearance rig for. Challenging washouts, high elevation, gorgeous mountain views.',
      video: 'https://www.youtube.com/embed/yZs5xmGhXcU?rel=0&amp;showinfo=0&amp;start=145&mute=1&autoplay=1',
      sourceURL: 'http://ihikebc.com/trips/2011/trip050ShovelCreekFSR.htm',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      startLat: 48.908504,
      startLng: -121.697749,
      endLat: 48.950172,
      endLng: -121.636465,
      title: 'Twin Lakes to Mt. Baker',
      subtitle: 'Deep in the Mt. Baker-Snoqualmie National Forest, about 2.5 hours north from Seattle. Features scenic alpine lakes, a historic fire-watch lookout, and abandoned gold mines.',
      video: 'https://www.youtube.com/embed/HfOKunu22mM?rel=0&amp;showinfo=0&amp;start=71&mute=1&autoplay=1',
      sourceURL: 'https://www.trailsoffroad.com/trails/2000-twin-lakes-mt-baker-wa',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      startLat: 58.441045,
      startLng: -129.989814,
      endLat: 57.903203,
      endLng: -131.156495,
      title: 'Deese Lake to Telegraph Creek',
      subtitle: 'Commonly referred to as the Telegraph Creek Road.  Twists and turns and steep hills, along with outstanding scenery make this road popular with overland travellers.  Some of the hills have a 20% gradient. Telegraph Creek is known as the most remote town in British Columbia that is accessible by road.',
      video: 'https://www.youtube.com/embed/uMZOXuNGZ34?rel=0&amp;showinfo=0&amp;start=23&mute=1&autoplay=1',
      sourceURL: 'http://www.graveltravel.ca/index.php?option=com_content&view=article&id=38:telegraph-creek&catid=1:routes',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      startLat: 49.23824,
      startLng: -120.56246,
      endLat: 49.494917,
      endLng: -120.701012,
      title: 'Whipsaw Trail',
      subtitle: 'At 68 miles in length, Whipsaw is not exceptionally difficult. But what it lacks in axle-snapping obstacles, it makes up for by traversing some of the most scenic climes in North America.',
      video: 'https://www.youtube.com/embed/DINCz3i3HPE?rel=0&amp;showinfo=0&amp;start=89&mute=1&autoplay=1',
      sourceURL: 'https://www.alltrails.com/explore/recording/whipsaw-trail--2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      startLat: 52.468418,
      startLng: -125.329241,
      endLat: 52.368349,
      endLng: -126.749199	,
      title: 'Heckman Pass on the Bella Coola Highway	',
      subtitle: 'One of the most scenic drives in Canada, with grades of up to 18%, no guard rails, and sheer drop-offs of many hundreds of feet. Don’t stuff your belly too much. Eventually, you might feel vomiting temptations while climbing circuitous roads at higher altitudes.',
      video: 'https://www.youtube.com/embed/GlUMFZQWheY?rel=0&amp;showinfo=0&mute=1&autoplay=1',
      sourceURL: 'http://www.dangerousroads.org/north-america/canada/1049-heckman-pas-canada.html',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },


  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
