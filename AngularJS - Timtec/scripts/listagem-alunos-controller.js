/* Um módulo do Model aplicacao criado no arquivo app.js, é um Controller chamado PrimeiroController que usa o módulo $scope e módulo $filter */
angular.module('aplicacao').controller('ListagemAlunosController', function ($scope, $filter, AlunosCollectionService) {

    /* Variável do $scope */
    $scope.nome = "Jean Cardoso";

    /* Criar data de hoje */
    $scope.hoje = new Date();

    /* Variavel interna desse controller*/
    var nome = "Lá Lá Lá";

    $scope.iniciado = true;
    $scope.cadastrar = false;

    $scope.finalizar = function () {
        $scope.iniciado = false;
    };

    $scope.iniciar = function () {
        $scope.iniciado = true;
    };

    $scope.alunos = AlunosCollectionService.getAlunos();

    $scope.ordenarPorNome = function () {
        AlunosCollectionService.ordenarPorNome();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.ordenarPorIdade = function () {
        AlunosCollectionService.ordenarPorIdade();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.exibeCadastro = function () {
        $scope.cadastrar = !$scope.cadastrar;
    }

});
