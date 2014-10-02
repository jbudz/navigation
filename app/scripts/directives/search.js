'use strict';

angular.module('wwwApp')
  .directive('search', function () {
    return {
      template: '<div class="input-group">' +
                  '<span class="input-group-addon"><i class="fa fa-search fa-fw"></i></span>' +
                  '<input id="search" class="search form-control" type="text" ng-model="address"/>' +
                '</div>',
      restrict: 'E',
      link: function postLink(scope) {
        var input = document.getElementById('search');
        var searchBox = new google.maps.places.SearchBox((input));
        google.maps.event.addListener(searchBox, 'places_changed', function() {
          var places = searchBox.getPlaces();
          scope.options = [];
          places.map(function(e) {
            scope.options.push({
              address: e.formatted_address,
              name: e.name,
              latitude: e.geometry.location.lat(),
              longitude: e.geometry.location.lng()
            });
          });
          scope.$apply();
        });
      }
    };
  });
