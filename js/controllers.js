angular.module('weatherApp')
  .controller('homeController', ['$scope', '$location', 'cityService',
    function ($scope, $location, cityService) {
      $scope.city = cityService.city;

      // add to scope to make the function accessible in the template.  This
      // keeps the update code for the service inside of the service itself
      $scope.cityService = cityService;
      
      $scope.submit = function () { 
        
        $location.path("/forecast");
      };
  }])
  .controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',
    function ($scope, $routeParams, cityService, weatherService) {
      $scope.city = cityService.city;
      $scope.days = $routeParams.days || 2;

      $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
      

    }]);