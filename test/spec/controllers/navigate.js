'use strict';

describe('Controller: NavigateCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var NavigateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigateCtrl = $controller('NavigateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
