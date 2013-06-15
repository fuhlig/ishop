'use strict';

angular.module('shopApp')
  .controller('BasketCtrl', function ($scope, $http, $routeParams) {

  	$http.get("/api/basket").
  		success(function(data) {
  			console.log("basket");
  			console.log(data);
  			$scope.basket = data;
  		});

  	// $http.get("/api/product").
  	// 	success(function(data) {
  	// 		console.log("product");
  	// 		console.log(data);
  	// 		$scope.product = data;
  	// 	});

  });
