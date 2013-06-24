'use strict';

angular.module('shopApp')
  .controller('BasketCtrl', function ($scope, $http, $routeParams) {

    $http.get("/api/basket").
      success(function(data) {
        console.log("basket");
        console.log(data);
        $scope.basket = data;
      });


  	$scope.remove = function(item) {
      $http.delete("/api/order/" + item.productid).
        success(function(data) {
          console.log("item removed: " + data);
        }).
        error(function(data) {
          console.log("error removing: " + data);
        });
    };

    $scope.update = function(item, quantity) {
      var id = item.productid;
      $http.post("/api/basket/" + id + "/" + quantity);
    };

  });
