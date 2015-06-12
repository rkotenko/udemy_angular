angular.module('weatherApp')
  .controller('homeController', ['$scope', 'cityService',
    function ($scope, cityService) {
      $scope.city = cityService.city;

      // add to scope to make the function accessible in the template.  This
      // keeps the update code for the service inside of the service itself
      $scope.cityService = cityService;
  }])
  .controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
    function ($scope, $resource, $routeParams, cityService) {
      $scope.city = cityService.city;
      $scope.days = $routeParams.days || 2;

      $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        {callback: 'JSON_CALLBACK'},
        {get: {method: 'JSONP'}}
      );

      $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});

      // instead of using the API, the course is doing a function to 
      // further show how functions can be used in the template
      $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) +32);
      };

      $scope.convertToDate = function (dt) {
        // course is converting to a more readable format via
        // data filter directive in template.  Normally, I would probably
        // just use toLocalDateString
        return new Date(dt * 1000);  // dt is in ms
      };

    }]);