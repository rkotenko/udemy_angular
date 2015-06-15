angular.module('weatherApp').factory('cityService', function () {
  return {
    city: 'New York',
    updateCity: function (city) {
      this.city = city;
    }
  };
});

angular.module('weatherApp')
  .service('weatherService', ['$resource', function ($resource) {
  this.getWeather = function (city, days) {
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
      {callback: 'JSON_CALLBACK'},
      {get: {method: 'JSONP'}}
    );

    return weatherAPI.get({q: city, cnt: days});
  };
}]);