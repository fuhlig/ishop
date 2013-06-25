'use strict';

angular.module('shopApp')
  .factory('BasketService', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      get: function() {
        var promise = $http.get("/api/basket")
          .success(function(data) {
            console.log("basket received");
            console.log(data);
            return data;
          })
          .error(function(response) {
            console.log("ERROR loading basket");
          }
        );
        return promise;
      },
      remove: function(item) {
        var promise = $http.delete("/api/basket/" +item.productid)
          .success(function(data) {
            console.log("item removed" + data);
          })
          .error(function(data) {
            console.log("ERROR removing item");
          }
        );
        return promise;
      },
      update: function(item, quantity) {
        var id = item.productid;
        console.log(item.productid);
        console.log(quantity);
        var promise = $http.put("/api/basket/" + id + "/" + quantity)
          .success(function(data) {
            console.log("basket updated");
          })
          .error(function(data) {
            console.log("error updating basket");
            console.log(data);
          }
        );
        return promise;
      }
    };
  });
