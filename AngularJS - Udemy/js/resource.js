var app = angular.module('loja', ['ngRoute', 'ngResource']);

app.controller('pessoaController', function ($scope, $resource) {

    /* Com serviço restfull */
    var pessoas = $resource("/pessoas/:codPessoa");

    // Com servlet
    // pessoas é a servlet
    var pessoas = $resource("angularjs-spring_mvc/pessoas/?codPessoa=:codPessoa");

    // Consultar por ID
    $scope.getPorId = function () {
        pessoas.get({
            codPessoa: $scope.codPessoa
        }, function (data) {
            $scope.objetoPessoa = data;
        });
    };

    // Consultar todas pessoas
    $scope.getPorTodos = function () {
        pessoas.quey(function (data) {
            $scope.objetoPessoa = data;
        });
    };

    // Salvar pessoa
    $scope.salvarPessoa = function () {
        p = new pessoas();
        p.numero = '5454554';
        // Serviço do resource para salvar
        p.$save();
    };

    // Deletar pessoa
    $scope.deletarPessoa = function () {
        pessoas.$delete({
            codPessoa: "60"
        });
    };

});
