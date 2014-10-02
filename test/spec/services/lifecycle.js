'use strict';

describe('Service: lifecycle', function () {

  // load the service's module
  beforeEach(module('wwwApp'));

  // instantiate service
  var lifecycle;
  beforeEach(inject(function (_lifecycle_) {
    lifecycle = _lifecycle_;
  }));

  it('should do something', function () {
    expect(!!lifecycle).toBe(true);
  });

});
