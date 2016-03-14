angular.module('SecondControllerModule', [])
.controller('SecondController', ['$scope', function($scope) {
	$scope.greeting = {};
	$scope.greeting.text = 'Hello Number 2';
}])

.directive('friend', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/friend.html',
    controller: function($scope) {
      $scope.header = 'Jorge Gallardo';
      $scope.description = 'is a really cool dude';
    }
  };
}]);