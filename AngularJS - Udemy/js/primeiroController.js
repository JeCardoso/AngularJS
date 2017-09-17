var app = angular.module('loja', []);

//config -> use este método para registrar o trabalho que precisa ser executado no carregamento do módulo

//when -> adiciona uma nova definição de rota ao serviço $ route

//otherwise -> define a definição da rota que sera usada na mudança de rota quando nenhuma outra definição de rota for feita

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "listController",
            templateUrl: "list.html"
        }) //listar
        .when("/edit/:name", {
            controller: "editController",
            templateUrl: "form.html"
        }) //editar
        .when("/new", {
            controller: "newController",
            templateUrl: "form.html"
        }) //novo
        .otherwise({
            redirectTo: "/"
        });
});

/* Registro de trabalho que deve ser realizado quando o injetor é feito carregando todos os módulos */
app.run(function ($rootScope) {
    $rootScope.frutas = ['banana', 'melancia', 'pêra'];
});


app.controller('listController', ['$scope', '$routeParams', '$rootScope', '$route', '$location',
    function ($scope, $routeParams, $rootScope, $route, $location) {

    }
]);

/*
    $scope é o escopo da aplicação
    $location redirecionamento entre rotas
    $routeParams são os parametros passados pela url
*/
app.controller('editController', ['$scope', '$routeParams', '$rootScope', '$route', '$location',
    function editController($scope, $routeParams, $rootScope, $route, $location) {
        $scope.title = "Editar frutas"; // Titulo da página
        $scope.fruta = $routeParams.name; // pegando a fruta dentro da lista
        $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta); // pegando a fruta dentro da lista

        $scope.salvar = function () {
            $scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada
            $location.path('/'); // volta para o índex
        };
    }
]);

app.controller('newController', ['$scope', '$routeParams', '$rootScope', '$route', '$location',
    function newController($scope, $routeParams, $rootScope, $route, $location) {
        $scope.title = "Nova Fruta";
        $scope.fruta = "";

        $scope.salvar = function () {
            $scope.frutas.push($scope.fruta); // adicionar nova fruta
            $location.path('/');
        };
    }
]);
