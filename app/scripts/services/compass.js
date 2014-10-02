'use strict';

angular.module('wwwApp')
  .factory('compass', function($rootScope) {
    var watchID;
    return {
      watchHeading: function(onSuccess, onError, options) {
        try {
          this.clearWatch();
        } catch (e) {
          console.warn('Unable to clear watch')
        }

        watchID = navigator.compass.watchHeading(function() {
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
        navigator.compass.clearWatch(watchID);
      },
      getCurrentHeading: function(onSuccess, onError, options) {
        navigator.compass.getCurrentHeading(function() {
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
    };
  });
