'use strict';

// Declare app level module which depends on filters, and services
angular.module('ImagineIt', [
    'ngRoute'
    , 'ImagineIt.controllers'

])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', { controller: 'AppCtrl', templateUrl: 'views/partial-home.html', activeNav: 'home'  });

        $routeProvider.when('/about', { controller: 'AppCtrl', templateUrl: 'views/partial-about.html', activeNav: 'about'});
        $routeProvider.when('/portfolio', { controller: 'AppCtrl', templateUrl: 'views/portfolio/partial-portfolio.html', activeNav: 'portfolio' });
        $routeProvider.when('/services', { controller: 'AppCtrl', templateUrl: 'views/partial-services.html', activeNav: 'services'  });
        $routeProvider.when('/contact', { controller: 'AppCtrl', templateUrl: 'views/partial-contact.html', activeNav: 'contact' });

        $routeProvider.when('/portfolio/lennyreed', { controller: 'AppCtrl', templateUrl: 'views/portfolio/lenny-reed.html.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/toolWatch-shinobi', { controller: 'AppCtrl', templateUrl: 'views/portfolio/toolwatch-shinobi.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/toolWatch-ops', { controller: 'AppCtrl', templateUrl: 'views/portfolio/toolwatch-ops.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/peak1photo', { controller: 'AppCtrl', templateUrl: 'views/portfolio/peak1photo.html', activeNav: 'portfolio' });
        $routeProvider.when('/portfolio/littlereacals', { controller: 'AppCtrl', templateUrl: 'views/portfolio/littlerascals.html', activeNav: 'portfolio' });

        $routeProvider.otherwise({redirectTo: '/', activeNav: 'home' });
    }]);

