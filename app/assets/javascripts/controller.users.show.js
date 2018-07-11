app.controller('UserShowController',['$scope', '$http', '$routeParams','UserService', function($scope, $http ,$routeParams,UserService) {
	$scope.userID = $routeParams.id;

		UserService.get($scope.userID)
			.then(function(response) {
				if (response != null) {
					$scope.myData=response.data;
				}

		});

}]);