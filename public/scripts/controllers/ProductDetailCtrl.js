'use strict';

angular.module('shopApp')
  .controller('ProductDetailCtrl', function ($scope, $http, $routeParams) {

  	var item =  {};

  	$http.get("/api/product/" + $routeParams.id).
  		success(function(data) {
  			$scope.product = data[0];
  		});

  	$scope.addProduct = function(product, quantity) {
      var id = product.productid;
      console.log("id: " + id);
      console.log("quantity: " + quantity);
      $http.post("/api/order/" + id + "/" + quantity).
        success(function(data) {
          console.log("result data: " + data);
        });
  	};
  });
