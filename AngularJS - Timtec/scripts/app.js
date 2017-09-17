// Model da aplicação; entre colchetes as dependencias da aplicacao, qualquer controller pode utiliza-las
// .config -> configuração do módulo
// $stateProvideer -> cuida do gerenciamento dos estados, provê os estados para a aplicacao
var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('aplicacao_inicial', {
                name: 'aplicacao_inicial',
                url: '/inicial.html',
                templateUrl: 'views/inicial.html'
            }).state('aplicacao_listagem', {
                name: 'aplicacao_listagem',
                url: '/listagem.html',
                templateUrl: 'views/listagem-alunos.html'
            }).state('aplicacao_cadastro', {
                name: 'aplicacao_cadastro',
                url: '/cadastro.html',
                templateUrl: 'views/cadastro-aluno.html'
            }).state('aplicacao_previsao', {
                name: 'aplicacao_previsao',
                url: '/previsao.html',
                templateUrl: 'views/previsao-do-tempo.html'
            });
    });

app.run(function ($rootScope, $state) {
    $state.go("aplicacao_inicial"); // Carregar o template e estado inicial assim que a aplicação abrir
});
