// this is the module object that can config routes, create custom filters, directives, get data from different sources and even create controllers
// think of a module as a container that contains the different parts
// make sure module name, is written next to ng-app

angular.module('FirstSecond', ['ngRoute', 'FirstControllerModule', 'SecondControllerModule', 'ServiceModule', 'GravatarModule'])
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
	.otherwise({
		redirectTo: '/first'
	});
}])
.config(['GravatarProvider', function(GravatarProvider) {
	GravatarProvider.setSize(100);
}]);