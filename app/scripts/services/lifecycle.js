'use strict';

angular.module('wwwApp')
  .factory('lifecycle', function($rootScope) {
    document.addEventListener('pause', function() {
      $rootScope.$broadcast('pause');
    }, false);
    document.addEventListener('resume', function() {
      $rootScope.$broadcast('resume');
    }, false);

    return {};
  });