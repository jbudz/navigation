'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('save files and change path', function () {
    expect(scope.save).toBeDefined();
    expect(scope.go).toBeDefined();
  });
});
