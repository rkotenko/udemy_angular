// None of the code here is well organized.  It is strictly being used
// for learning.

var angularApp = angular.module('angularApp', []);

// CONTROLLERS - the array in the 2nd parameter is needed so the function params can be
// mapped properly if the code is minified.
angularApp.controller('mainController',  ['$scope', '$filter', '$http',
function ($scope, $filter, $http) {
  $scope.handle = '';
  $scope.newRule = '';
  $scope.rulesNextId = 0; // gonna grabbed the highest id on initial fetch
  $scope.lowercaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  };
  
  $scope.characters = 5;
  
  // get the rules in descending order by id so the nextId can be set properly
  $http.get('http://localhost:5000/api?_sort=id&_order=DESC')
      .success(function (result) {
        $scope.rules = result;
        $scope.rulesNextId = result[0].id + 1;
      })
      .error(function (error, status) {
        console.log(data);
      });
  
  // this uses a mock json server.
  $scope.addRule = function () {
    $http.post('http://localhost:5000/api', {id: $scope.rulesNextId, rulename: $scope.newRule});
    $scope.rulesNextId++;
    $scope.rules.push({rulename: $scope.newRule});
    $scope.newRule = '';
  };
  
}]);

