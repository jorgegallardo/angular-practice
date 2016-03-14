angular.module('FirstControllerModule', [])
.controller('FirstController', ['$scope', '$http', function($scope, $http) {
	$scope.greeting = {};
	$scope.greeting.text = 'Hello One Time';
	$scope.saveFriend = function(data) {
		console.log(data);
		// $http({method: 'POST', url: '/notes', data: note});
	};
	$http({ method: 'GET', url: 'friends.json'})
	.success(function(friendsDataResponse) {
		console.log(friendsDataResponse);
		$scope.friends = friendsDataResponse.friendsList;
	});
}]);