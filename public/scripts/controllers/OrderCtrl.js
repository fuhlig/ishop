'use strict';

angular.module('shopApp')
  .controller('OrderCtrl', function ($scope, $http, BasketService) {

    BasketService.get().then(function(data) {
      console.log("order getting basket");
      console.log(data.data);
      $scope.basket = data.data;
    });

 //  	$http.get("/api/order/")
 //  	.success(function(data) {
	// 	$scope.order = data.data;
	// });


 //    BasketService.get().then(function(data) {
 //      console.log("order getting basket");
 //      console.log(data.data);
 //      $scope.basket = data.data;
 //    });
  });

