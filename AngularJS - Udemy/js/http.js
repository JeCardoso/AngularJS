var app = angular.module('loja', ['ngRoute']);

app.controller('pegarResposta', function ($scope, $http) {
    $scope.pegarResposta = function () {
        $http.get("pegarResposta.html").then(function (response) {
            document.getElementById("resposta").value = "" + response.data;
        });
    };
});

app.controller('pegarResposta2', function ($scope, $http) {
    $scope.pegarResposta2 = function () {
        $http.get("pegarResposta.html").then(function (response) {
            document.getElementById("resposta2").value = "" + response.data;
            document.getElementById("resposta3").value = "" + response.status;
            document.getElementById("resposta4").value = "" + response.statusText;
        });
    };
});

app.controller('pegarRespostaErro', function ($scope, $http) {
    $scope.pegarRespostaErro = function () {
        $http.get("js/pegarRespostaJson.json")
            .then(function (response) { // resposta bem sucedida
                document.getElementById("respostaErro").value = "" + response.statusText;
            }, function (response) { // lida com erro
                document.getElementById("respostaErro").value = "" + response.statusText;
            });
    };
});

app.controller('pegarRespostaJson', function ($scope, $http) {
    $http.get("js/pegarRespostaJson.json")
        .then(function (response) { // resposta bem sucedida
            $scope.lista = response.data;
        });
});
