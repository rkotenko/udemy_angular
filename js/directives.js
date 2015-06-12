angular.module('weatherApp')
  .directive('oneDayForecast', function () {
    return {
      templateUrl: 'directives/dayForecast.html',
      scope: {
        day: '=',
        convertToDate: '&',
        convertToStandard: '&',
        dateFormat: '@'
      }
    }
  });