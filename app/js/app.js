'use strict';


// Declare app level module which depends on filters, and services
angular.module('ImagineIt', [
    'ngRoute'
    , 'ImagineIt.controllers'

])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html' });

        $routeProvider.when('/about', { controller: 'AppCtrl', templateUrl: 'views/partial-about.html'});
        $routeProvider.when('/portfolio', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html' });
        $routeProvider.when('/services', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html' });
        $routeProvider.when('/pricing', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html' });
        $routeProvider.when('/contact', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html'});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);