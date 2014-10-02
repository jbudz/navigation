'use strict';

angular.module('wwwApp')
  .factory('geolocation', function($rootScope) {
    var watchID;
    return {
      getCurrentPosition: function(onSuccess, onError, options) {
        navigator.geolocation.getCurrentPosition(function() {
            var self = this,
              args = arguments;
            if (onSuccess) {
              $rootScope.$apply(function() {
                onSuccess.apply(self, args);
              });
            }
          }, function() {
            var self = this,
              args = arguments;
            if (onError) {
              $rootScope.$apply(function() {
                onError.apply(self, args);
              });
            }
          },
          options);
      },
      watchPosition: function(onSuccess, onError, options) {
        try {
          this.clearWatch();
        } catch (e) {
          console.warn('Unable to clear geolocation');
        }

        watchID = navigator.geolocation.watchPosition(function() {
            var self = this,
              args = arguments;
            if (onSuccess) {
              $rootScope.$apply(function() {
                onSuccess.apply(self, args);
              });
            }
          }, function() {
            var self = this,
              args = arguments;

            if (onError) {
              $rootScope.$apply(function() {
                onError.apply(self, args);
              });
            }
          },
          options);
      },
      clearWatch: function() {
        navigator.geolocation.clearWatch(watchID);
      }
    };
  });
