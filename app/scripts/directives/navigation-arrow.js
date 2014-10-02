'use strict';

angular.module('wwwApp')
  .directive('arrow', function () {
    var current = 0;
    function rotate(el, deg) {
      //Avoid rounding errors, in some cases we are getting numbers slightly too large
      //causing the multiplier to be off by one
      if(deg > 359) {
        deg = 359;
      } else if (deg < 0) {
        deg = 0;
      }
      var currentMult = (Math.floor(current / 360) || 0) * 360;
      if(current - currentMult > 180 && deg < 180  && Math.abs(deg - (current - currentMult)) > 180) {
        deg += currentMult + 360;
      } else if(current - currentMult < 180 && deg > 180 && Math.abs(deg - (current - currentMult)) > 180) {
        deg += currentMult - 360;
      } else {
        deg += currentMult;
      }

      current = deg;

      el.style.webkitTransform = 'rotate(' + deg + 'deg)';
      el.style.MozTransform = 'rotate(' + deg + 'deg)';
      el.style.msTransform = 'rotate(' + deg + 'deg)';
      el.style.OTransform = 'rotate(' + deg + 'deg)';
      el.style.transform = 'rotate(' + deg + 'deg)';
    }
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        scope.$watch('rotate', function() {
          rotate(element[0], scope.rotate);
        });
      }
    };
  });
