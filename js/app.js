// None of the code here is very well organized.  It is strictly being used
// for learning.

var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/second/:num?', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    });
  
});

angularApp.controller('mainController',  ['$scope', '$log', 
  function ($scope, $log) {
    $scope.person = {
        name: 'Rob K',
        address: '555 Test st, Anytown'
    };
}]);

angularApp.controller('secondController',  ['$scope', '$log', '$routeParams',
  function ($scope, $log, $routeParams) {
    
   
}]);

angularApp.directive('searchResult', function() {
  return {
    templateUrl: 'directives/searchResults.html',
    replace: true,
    scope: {
      person: '='
    }
  };
});

