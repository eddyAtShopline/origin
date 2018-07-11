var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/users",{
			templateUrl : '/views/users/users.html',
			controller: 'UsersController'
		})

		.when("/user/:id/edit",{
			templateUrl: '<user-form></user-form>',
			//controller: 'UserEditController'
		})

		.when("/users/:id",{
			templateUrl : '/views/users/user.show.html',
			controller: 'UserShowController'
		})

		.otherwise({redirectTo:'/users'});

	$locationProvider.html5Mode(true)

});




