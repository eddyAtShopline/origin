
app.directive('userForm',['$http','$routeParams','$window','UserService', '$location', function($http, $routeParams, $window,UserService, $location){

	return {
		restrict: 'E',
		templateUrl: '/views/users/user.edit.html',
		scope: {
			userId: '@'
		},
		link: function($scope) {
			var userId = $location.search().userId;
			UserService.get(userId).then(response => {
				$scope.user = response.data;
			});
			// $scope.user = JSON.parse($scope.user);
			// console.log($scope);

			$scope.updateUser = function(){
			 	if ($scope.updateUserForm.$invalid) {
			 		return 
			 	}
			 	$http.put("/users/"+$scope.user.id.$oid+"/updateUser", {
			 		user: $scope.user
			 	}).then(response => {
			 		$window.location.href="/users";
			 	})
			 };
		}
	}
}])



/*
app.controller('UserEditController',['$scope','$http','$routeParams','$window','UserService',function($scope,$http,$routeParams,$window,UserService){
	$scope.userID = $routeParams.id;

	
	$scope.onInit = function(){
		UserService.get($scope.userID)
			.then(function(data){
				if (data != null){
					$scope.user=data;
				}
			});
	};

	$http.get("users/"+$scope.userID+".json").then(function (response){
		$scope.user = response.data;
	});

	$scope.updateUser = function(){
		if ($scope.updateUserForm.$invalid) {
			return 
		}
		$http.put("/users/"+$routeParams.id+"/updateUser", {
			user: $scope.user 
		}).then(function(response){
			$window.location.href='/users/'+$scope.userID;
		})
	};

	$scope.onInit();





}]);
*/

