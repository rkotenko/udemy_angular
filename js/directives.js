angular.module('weatherApp')
  .directive('oneDayForecast', function () {
    return {
      templateUrl: 'directives/dayForecast.html',
      scope: {
        day: '=',
        dateFormat: '@'
      },
      controller: function ($scope) {
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
      },
      controllerAs: 'weatherApi'
    }
  });