function ProductCtrl($scope, $http) {
	$scope.products = [
		{ "name": "nexus s" },
		{ "name": "nexus 4" },
		{ "name": "samsung r522" },
		{ "name": "samsung serie 9" }
	];


	var promise = $http.get("/product")
		.success(function(response) {
			console.log("SUCCESS!");
			console.log("data: " + response);
		})
		.error(function(response) {
			console.log("ERROR");
			console.log("data: " + response);
		});
	console.log(promise);
}