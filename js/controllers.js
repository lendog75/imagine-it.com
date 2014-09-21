angular.module('ImagineIt.controllers', ['ngRoute'])
    .controller('navCtrl', ['$scope', '$route', function ($scope, $route) {

    }])

    .controller('AppCtrl', ['$scope','$route', function ($scope , $route) {
        $scope.getActiveNav = function() {
            if ($route.current !== undefined) {
                return $route.current.activeNav;
            }
        };
    }]);

