'use strict';

describe('Directive: navigationArrow', function () {

  // load the directive's module
  beforeEach(module('wwwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navigation-arrow></navigation-arrow>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the navigationArrow directive');
  }));
});
