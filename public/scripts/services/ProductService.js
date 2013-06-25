'use strict';

angular.module('shopApp')
  .factory('ProductService', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      findAll: function() {
        var promise = $http.get("/api/product")
          .success(function(response) {
            console.log("SUCCESS! products loaded");
          })
          .error(function(response) {
            console.log("ERROR loading products");
          }
        );
        return promise;
      },
      order: function(item) {
        console.log("receiving order...");
        console.log(item);
        var promise = $http.post("/api/order")
          .success(function(response) {
          })
          .error(function(response) {
            console.log("ERROR");
          }
        );
        return promise;
      }
    };
  });
