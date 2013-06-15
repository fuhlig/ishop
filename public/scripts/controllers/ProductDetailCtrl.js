'use strict';

angular.module('shopApp')
  .controller('ProductDetailCtrl', function ($scope, $http, $routeParams) {

  	var item =  {};

  	$http.get("/api/product/" + $routeParams.id).
  		success(function(data) {
  			$scope.product = data[0];
  		});

  	$scope.addProduct = function(product) {
  		console.log("buy product");
  		console.log(product);
  	};
  });
