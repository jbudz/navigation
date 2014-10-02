'use strict';

angular.module('wwwApp')
  .controller('SearchCtrl', function($scope, $location, destination, saved) {
    $scope.go = function(index) {
      destination.set($scope.options[index]);
      $location.path('/navigate');
    };

    $scope.save = function(index) {
      saved.save($scope.options[index]);
      $scope.options[index].saved = true;
    };
  });