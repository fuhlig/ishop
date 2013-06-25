'use strict';

angular.module('shopApp')
  .controller('BasketCtrl', function ($scope, $http, $routeParams, BasketService) {

    BasketService.get().then(function(data) {
      console.log("basket.get");
      console.log(data.data);
      $scope.basket = data.data;
    });

    $scope.remove = function(item) {
      BasketService.remove(item).then(function(data) {
        BasketService.get();
      });
    };

    $scope.update = function(item, quantity) {
      BasketService.update(item, quantity).then(function(data) {
        console.log("basket updated");
      });
    };

  });
