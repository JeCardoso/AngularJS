var app = angular.module('loja', []);

//config -> use este método para registrar o trabalho que precisa ser executado no carregamento do módulo

//when -> adiciona uma nova definição de rota ao serviço $ route

//otherwise -> define a definição da rota que sera usada na mudança de rota quando nenhuma outra definição de rota for feita

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "listController",
            templateUrl: "/list.html"
        }) //listar
        .when("/edit/:name", {
            controller: "editController",
            templateUrl: "/form.html"
        }) //editar
        .when("/new", {
            controller: "newController",
            templateUrl: "/form.html"
        }) //novo
        .otherwise({
            redirectTo: "/"
        });
});

// Registro de trabalho que deve ser realizado quando o injetor é feito carregando todos os módulos
app.run(function ($rootScope) {
    $rootScope.frutas = ['banana', 'melancia', 'pêra'];
});
