'use strict';

// Declare app level module which depends on filters, and services
angular.module('shopApp', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'views/shop.html', controller: 'ShopCtrl'});
    $routeProvider.when('/shop', {templateUrl: 'views/shop.html', controller: 'ShopCtrl'});
    $routeProvider.when('/product-list', {templateUrl: 'views/product-list.html', controller: 'ProductListCtrl'});
    $routeProvider.when('/product-detail/:id', {templateUrl: 'views/product-detail.html', controller: 'ProductDetailCtrl'});
    $routeProvider.when('/category-list', {templateUrl: 'views/category-list.html', controller: 'CategoryListCtrl'});
    $routeProvider.when('/order', {templateUrl: 'views/order.html', controller: 'OrderCtrl'});
    $routeProvider.when('/basket', {templateUrl: 'views/basket.html', controller: 'BasketCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
    // $locationProvider.html5Mode(true);
  }]);