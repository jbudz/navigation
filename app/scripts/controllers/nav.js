'use strict';

angular.module('wwwApp')
  .controller('NavCtrl', function ($scope, $location, $rootScope) {
    $scope.showBack = ($location.path() !== '/');
    $rootScope.$on('$routeChangeStart', function() {
      $scope.showBack = ($location.path() !== '/');
    });
  });
