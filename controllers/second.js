angular.module('SecondControllerModule', [])
.controller('SecondController', ['$scope', 'Gravatar', function($scope, Gravatar) {
	$scope.greeting = {};
	$scope.greeting.text = 'Hello Number 2';

  $scope.gravatarUrl = function(email) {
    return Gravatar(email);
  };
}])

.directive('friend', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/friend.html',
    scope: {
      gravatarUrl: '='
    },
    controller: function($scope) {
      $scope.name = 'Jorge Gallardo';
      $scope.comment = 'is a really cool dude';
    }
  };
}]);