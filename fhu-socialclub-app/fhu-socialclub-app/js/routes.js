app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/dashboard.html',
            controller: 'AppController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

});