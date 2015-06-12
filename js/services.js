angular.module('weatherApp').factory('cityService', function () {
  return {
    city: 'New York',
    updateCity: function (city) {
      this.city = city;
    }
  };
});