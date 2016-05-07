app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/applications', {
            templateUrl: '/views/applications.html',
            controller: 'ApplicationsController'
        })
        .when('/clubs', {
            templateUrl: '/views/clubs.html',
            controller: 'ClubsController'
        })
        .when('/dashboard', {
            templateUrl: '/views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/events', {
            templateUrl: '/views/events.html',
            controller: 'EventsController'
        })
        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'LoginController'
        })
        .when('/sports', {
            templateUrl: '/views/sports.html',
            controller: 'SportsController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

});