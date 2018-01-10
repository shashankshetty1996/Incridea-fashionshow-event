var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.ejs',
            controller: 'dashboardController'
        })
        .when('/login', {
            templateUrl: 'views/login.ejs',
            controller: 'loginController'
        })
        .when('/hackridea', {
            templateUrl: 'views/hackridea.ejs',
            controller: 'hackrideaController'
        })
        .when('/fashion', {
            templateUrl: 'views/fashion.ejs',
            controller: 'fashionController'
        })
        .when('/bob', {
            templateUrl: 'views/bob.ejs',
            controller: 'bobController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function ($rootScope, $location, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = JSON.parse(localStorage.getItem('globals')) || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        
        // set default redirect to home if not logged in
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
});