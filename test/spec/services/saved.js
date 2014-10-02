'use strict';

describe('Service: saved', function () {

  // load the service's module
  beforeEach(module('wwwApp'));

  // instantiate service
  var saved;
  beforeEach(inject(function (_saved_) {
    saved = _saved_;
  }));

  it('should do something', function () {
    expect(!!saved).toBe(true);
  });

});
