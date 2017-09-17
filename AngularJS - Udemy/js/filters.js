var app = angular.module('loja', ['ngRoute']);

app.controller('personCtrl', function ($scope) {
    $scope.firstName = "Jean";
    $scope.lastName = "Silva";
});

app.controller('namesCtrl', function ($scope) {
    $scope.names = [
        {
            name: "Jani",
            country: "Norway"
        },
        {
            name: "Carl",
            country: "Sweden"
        },
        {
            name: "Margharete",
            country: "England"
        },
        {
            name: "Hege",
            country: "Norway"
        },
        {
            name: "joe",
            country: "Denmark"
        },
        {
            name: "Gustav",
            country: "Sweden"
        }
    ];

    /* Function não tem ; */
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }

});

app.controller('costCtrl', function ($scope) {
    $scope.price = 58;
});
