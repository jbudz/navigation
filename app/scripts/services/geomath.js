'use strict';

/*
* Adapted from www.movable-type.co.uk/scripts/latlong.html
* Calculate distance, bearing and more between Latitude/Longitude points
* http://creativecommons.org/licenses/by/3.0/
* (c) Chris Veness 2002-2014
*/
angular.module('wwwApp')
  .factory('geomath', function() {
    function toDeg(n) {
      return n*180/Math.PI;
    }

    function toRad(n) {
      return n*Math.PI/180;
    }

    return {
      distance: function(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var rad = Math.PI / 180;
        var dLat = (lat2 - lat1) * rad;
        var dLon = (lon2 - lon1) * rad;
        lat1 = lat1 * rad;
        lat2 = lat2 * rad;

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return (d*0.621371192).toFixed(2);
      },
      bearing: function(lat1, lon1, lat2, lon2) {
        lat1 = toRad(lat1);
        lat2 = toRad(lat2);
        var dLon = toRad(lon2-lon1);
        var y = Math.sin(dLon) * Math.cos(lat2);
        var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
        var brng = Math.atan2(y, x);
        return ((toDeg(brng) + 360) % 360);
      }
    };
  });
