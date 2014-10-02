'use strict';

describe('Service: compass', function () {

  // load the service's module
  beforeEach(module('wwwApp'));

  // instantiate service
  var compass;
  beforeEach(inject(function (_compass_) {
    compass = _compass_;
  }));

  it('should do something', function () {
    expect(!!compass).toBe(true);
  });

});
