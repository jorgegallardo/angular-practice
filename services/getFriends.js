angular.module('ServiceModule', [])
.factory('GetFriends', ['$http', function GetFriendsFactory($http) {
	return {
		all: function() {
			return $http({ method: 'GET', url: 'friends.json'});
		}
	}
}]);