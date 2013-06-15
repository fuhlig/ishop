'use strict';

angular.module('shopApp')
  .controller('ShopCtrl', function ($scope, $http) {

  	$http({method: 'GET', url: '/api/product'}).
  	success(function(data) {
  		$scope.products = data;
  	}).
  	error(function(data) {
  		$scope.products = 'error'
  	});
  });
