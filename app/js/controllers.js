angular.module('ImagineIt.controllers', ['ngRoute'])
    .controller('navCtrl', ['$scope', '$route', function ($scope, $route) {
        $scope.route = $route;
    }])

    .controller('AppCtrl', ['$scope', function ($scope) {
        var yyy = "";
    }]);


