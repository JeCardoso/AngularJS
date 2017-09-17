var app = angular.module('loja', ['ngRoute']);

app.controller('namesController', function ($scope) {
    $scope.names = ["Daenerys", "Jhon", "Trevor"];
});

app.controller('pegarRespostaJson', function ($scope, $http) {
    $http.get("js/pegarRespostaJson.json")
        .then(function (response) { // resposta bem sucedida
            $scope.lista = response.data;
        });
});
