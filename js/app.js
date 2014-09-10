'use strict';

// Declare app level module which depends on filters, and services
angular.module('ImagineIt', [
    'ngRoute'
    , 'ImagineIt.controllers'

])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html', activeNav: 'home'  });

        $routeProvider.when('/about', { controller: 'AppCtrl', templateUrl: 'views/partial-about.html', activeNav: 'about'});
        $routeProvider.when('/portfolio', { controller: 'AppCtrl', templateUrl: 'views/partial-portfolio.html', activeNav: 'portfolio' });
        $routeProvider.when('/services', { controller: 'AppCtrl', templateUrl: 'views/partial-services.html', activeNav: 'services'  });
        $routeProvider.when('/contact', { controller: 'AppCtrl', templateUrl: 'views/partial-contact.html', activeNav: 'contact' });

        $routeProvider.when('/portfolio/LennyReed', { controller: 'AppCtrl', templateUrl: 'views/portfolio/LennyReed.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/ToolWatch-Shinobi', { controller: 'AppCtrl', templateUrl: 'views/portfolio/ToolWatch-Shinobi.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/ToolWatch-Ops', { controller: 'AppCtrl', templateUrl: 'views/portfolio/ToolWatch-Ops.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/Peak1Photo', { controller: 'AppCtrl', templateUrl: 'views/portfolio/Peak1Photography.html', activeNav: 'portfolio' });

        $routeProvider.otherwise({redirectTo: '/', activeNav: 'home' });
    }]);


