'use strict';

angular.module('shopApp')
  .factory('CatalogService', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      get: function() {
        var promise = $http.get("/api/product")
          .success(function(response) {
            console.log("SUCCESS! products loaded");
          })
          .error(function(response) {
            console.log("ERROR loading products");
          }
        );
        return promise;
      }
    };
  });
