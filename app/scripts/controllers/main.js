'use strict';

angular.module('wwwApp')
	.controller('MainCtrl', function($scope, $location) {
		$scope.go = function(loc) {
			$location.path(loc);
		};
	});