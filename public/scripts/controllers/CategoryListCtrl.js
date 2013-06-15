'use strict';

angular.module('shopApp')
  .controller('CategoryListCtrl', function ($scope, $http) {

  	$http({method: 'GET', url: '/api/category'}).
  	success(function(data) {
  		$scope.categories = data;
  	}).
  	error(function(data) {
  		$scope.categories = 'error'
  	});
  });
