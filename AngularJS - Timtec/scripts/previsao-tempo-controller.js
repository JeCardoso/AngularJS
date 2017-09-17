angular.module('aplicacao').controller('PrevisaoTempoController', function ($scope, $resource) {

    var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo,BR&units=metric&APPID=466178d2370a1e8677849cbdf8dc7df6');

    var getWheather = function () {
        WeatherChannel.get().$promise.then(function (response) {
            $scope.tempo = response;
            console.log(response);
        }, function (response) {
            alert("Erro na requisicao");
        })
    }

    getWheather();

});
