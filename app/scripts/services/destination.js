'use strict';

angular.module('wwwApp')
  .factory('destination', function () {
    var destination = {};
    return {
      get: function () {
        return destination;
      },
      set: function(d) {
        destination = d;
      }
    };
  });
