'use strict';

angular.module('shopApp')
  .controller('ShopCtrl', function ($scope, $http) {


    $http.get("/api/basket").
        success(function(data) {
          console.log("basket");
          console.log(data);
          $scope.basket = data;
        });

  	$http({method: 'GET', url: '/api/product'}).
  	success(function(data) {
  		$scope.products = data;
  	}).
  	error(function(data) {
  		$scope.products = 'error'
  	});

  	$scope.addProduct = function(product, quantity) {

      var id = product.productid;
      console.log("id: " + id);
      console.log("quantity: " + quantity);
      $http.post("/api/basket/" + id + "/" + quantity).
        success(function(data) {
          console.log("result data: " + data);
        });
  	};
  });
