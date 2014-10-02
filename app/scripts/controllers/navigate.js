'use strict';

angular.module('wwwApp')
  .controller('NavigateCtrl', function($scope, $location, $rootScope, geolocation, geomath, compass, destination, messages, lifecycle) {
    $scope.destination = destination.get();
    $scope.distance = 0;
    var current = {};

    if (Object.keys($scope.destination).length > 0) {
      $scope.message = messages.searching;
    } else {
      $scope.message = messages.noDestination;
    }

    function watchPositionAccurate() {
      geolocation.watchPosition(function(position) {
        current.lat = position.coords.latitude;
        current.lon = position.coords.longitude;
        updateNavigator();
      }, function() {
        $scope.geoErr = messages.gpsErr;
        watchPosition();
      }, {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 0
      });
    }

    function watchPosition() {
      geolocation.watchPosition(function(position) {
        $scope.geoErr = '';
        current.lat = position.coords.latitude;
        current.lon = position.coords.longitude;
        updateNavigator();
      }, function() {
        $scope.geoErr = messages.geoErr;
        watchPosition();
      }, {
        timeout: 30000
      });
    }

    function watchCompass() {
      compass.watchHeading(function(heading) {
        $scope.compassErr = '';
        current.bearing = heading.magneticHeading;
        updateNavigator();
      }, function() {
        $scope.compassErr = messages.compassErr;
        watchCompass();
      }, {
        frequency: 10
      });
    }

    function updateNavigator() {
      if (Object.keys(current).length !== 3) {
        return;
      }
      var bearing = geomath.bearing(current.lat, current.lon, $scope.destination.latitude, $scope.destination.longitude);
      $scope.distance = geomath.distance(current.lat, current.lon, $scope.destination.latitude, $scope.destination.longitude);
      $scope.message = '';
      if (current.bearing < bearing) {
        $scope.rotate = bearing - current.bearing;
      } else {
        $scope.rotate = 360 - current.bearing + bearing;
      }
    }

    $scope.$on('pause', function() {
      geolocation.clearWatch();
      compass.clearWatch();
    });
    $scope.$on('resume', function() {
      $scope.message = messages.searching;
      current = {};
      navigate();
    });

    $rootScope.$on('$routeChangeStart', function() {
      geolocation.clearWatch();
      compass.clearWatch();
    });

    function navigate() {
      watchPositionAccurate();
      watchCompass();
    }
    document.addEventListener('deviceready', navigate, false);
  });
