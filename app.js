angular.module('FirstSecond', ['ngRoute', 'FirstControllerModule', 'SecondControllerModule'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/first', {
		templateUrl: 'templates/pages/first.html',
		controller: 'FirstController'
	})
	.when('/second', {
		templateUrl: 'templates/pages/second.html',
		controller: 'SecondController'
	})
	.when('/', {
		templateUrl: 'templates/pages/first.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);