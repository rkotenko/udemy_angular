var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])
  .factory('cityService', function () {
    return {
      city: 'New York',
      updateCity: function (city) {
        this.city = city;
      }
    };
  })
  .controller('homeController', ['$scope', 'cityService',
    function ($scope, cityService) {
      $scope.city = cityService.city;
      
      // add to scope to make the function accessible in the template.  This
      // keeps the update code for the service inside of the service itself
      $scope.cityService = cityService;  
    }])
  .controller('forecastController', ['$scope', 'cityService',
    function ($scope, cityService) {
      $scope.city = cityService.city;
    }]);