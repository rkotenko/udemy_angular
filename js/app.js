// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS - the array in the 2nd parameter is needed so the function params can be
// mapped properly if the code is minified.
angularApp.controller('mainController',  ['$scope', '$filter',
function ($scope, $filter) {
  $scope.handle = '';
  $scope.lowercaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  }
}]);

