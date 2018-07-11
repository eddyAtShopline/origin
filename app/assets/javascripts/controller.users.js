app.controller('UsersController',['$scope', '$http', 'UserService', '$location', '$window', function($scope, $http , UserService, $location, $window ){

	UserService.getAll()
		.then(function(response){
			if (response.data != null)
				$scope.myData = response.data;
		})
	$scope.currentUser = null;
	$scope.location = $location.search();
	$scope.showForm = function(user) {
		$scope.currentUser = user;
		$scope.$broadcast('editPressed' , $scope.currentUser.id.$oid);
	}

	$scope.deleteUser = function(userId) {
		var url = ("/users/" + userId+".json").toString()
		$http.delete(url)
			.then(function(){
				$window.location.href="/users";
			})
	}



}]);