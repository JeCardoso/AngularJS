angular.module('loja').controller('newController', function ($scope, $location) {
    $scope.title = "Nova Fruta";
    $scope.fruta = "";

    $scope.salvar = function () {
        $scope.frutas.push($scope.fruta); // adicionar nova fruta
        $location.path('/');
    }

});
