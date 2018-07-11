app.service('UserService', function($http,$q) {
	return {
		get: function (id) {
			return $http.get("users/"+id+".json");
		},
		getAll: function () {
			return $http.get("users.json");
		}
	};

});



