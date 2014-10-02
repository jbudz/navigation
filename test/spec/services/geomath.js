'use strict';

describe('Service: geomath', function () {

  // load the service's module
  beforeEach(module('wwwApp'));

  // instantiate service
  var geomath;
  beforeEach(inject(function (_geomath_) {
    geomath = _geomath_;
  }));

  it('should do something', function () {
    expect(!!geomath).toBe(true);
  });

});
