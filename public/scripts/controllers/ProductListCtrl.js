'use strict';

angular.module('shopApp')
  .controller('ProductListCtrl', function ($scope, $http) {

  	// ProductService.findAll().then(function(data) {
  	// 	$scope.products = data.data;
  	// });

  	// findByID
  	// order
  	$http.get("/api/product/").
  		success(function(data) {
  			console.log(data);
  			$scope.products = data;
  		});

  });
