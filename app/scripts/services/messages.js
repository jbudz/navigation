'use strict';

angular.module('wwwApp')
  .value('messages', {
    searching: 'Searching for your location',
    geoErr: 'Geolocation timeout, attemping to find your location again...',
    gpsErr: 'Unable to find GPS signal, falling back to triangulation...',
    compassErr: 'Your compass service is not working',
    noDestination: 'You need to pick a destination!'
  });