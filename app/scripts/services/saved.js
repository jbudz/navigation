'use strict';

angular.module('wwwApp')
  .factory('saved', function () {
    var storage = window.localStorage;
    var copy = [];
    for(var i = 0; i < storage.length; i++) {
      try {
        copy.push(JSON.parse(storage.getItem(storage.key(i))));
      } catch(err) {
        console.warn('Unable to parse local storage');
      }
    }
    return {
      save: function (loc) {
        storage.setItem(storage.length, JSON.stringify(loc));
        copy.push(loc);
      },
      getAll: function () {
        return copy;
      },
      remove: function(i) {
        storage.removeItem(i);
        copy.splice(i, 1);
      },
      removeAll: function() {
        for(var i = 0; i < storage.length; i++) {
          storage.removeItem(storage.key(i));
        }
        copy = [];
      }
    };
  });
