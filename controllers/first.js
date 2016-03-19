angular.module('FirstControllerModule', [])
.controller('FirstController', ['$scope', 'GetFriends', function($scope, GetFriends) {
	$scope.greeting = {};
	$scope.greeting.text = 'Hello One Time';
	$scope.saveFriend = function(data) {
		console.log(data);
		// $http({method: 'POST', url: '/notes', data: note});
	};
	// $http({ method: 'GET', url: 'friends.json'})
	// .success(function(friendsDataResponse) {
	// 	console.log(friendsDataResponse);
	// 	$scope.friends = friendsDataResponse.friendsList;
	// });

	// success and error have been deprecated https://docs.angularjs.org/api/ng/service/$http

	// The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise.
	GetFriends.all()
	.then(function(response) {
		$scope.friends = response.data.friendsList;
		console.log(response);
	})
	.catch(function(response) {
		console.error('Error', response.status, response.data);
	})
	.finally(function() {
		console.log("It succeeded or failed; I'm being displayed anyway!");
	});
}]);