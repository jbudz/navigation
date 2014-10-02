'use strict';

angular.module('wwwApp')
  .controller('LocationCtrl', function($scope, $location, saved, destination) {
    $scope.locations = saved.getAll();
    $scope.go = function(index) {
      destination.set($scope.locations[index]);
      $location.path('/navigate');
    };

    $scope.remove = function(index) {
      saved.remove(index);
    };
  });