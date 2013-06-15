'use strict';

angular.module('shopApp')
  .controller('OrderCtrl', function ($scope, $http, ProductService) {

  	console.log("ordering started");
  	$scope.submitOrder = function() {
  		console.log("ordering...");
  		var item = {
  			name: $scope.prod_name,
  			description: $scope.prod_description,
  			price: $scope.prod_price,
  			amount: $scope.prod_amount
  		};
  		console.log("item object:");
  		console.log(item);
  		ProductService.order(item);
      return item;
  	};
  });
