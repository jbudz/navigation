'use strict';

angular.module('wwwApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/saved', {
        templateUrl: 'views/locations.html',
        controller: 'LocationCtrl'
      })
      .when('/navigate', {
        templateUrl: 'views/navigate.html',
        controller: 'NavigateCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });