/*
    $scope é o escopo da aplicação
    $location redirecionamento entre rotas
    $routeParams são os parametros passados pela url
*/
angular.module('loja').controller('editController', function ('$scope', '$location', '$routeParams') {
    $scope.title = "Editar frutas"; // Titulo da página
    $scope.fruta = $routeParams.name; // pegando a fruta dentro da lista
    $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta); // pegando a fruta dentro da lista

    $scope.salvar = function () {
        $scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada
        $location.path('/'); // volta para o índex
    };
});
