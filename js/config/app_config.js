 app.config(['$routeProvider', function($routeProvider) {

     $routeProvider
        .when('/Home', {
            templateUrl: 'views/Welcome.html'
        })
        .otherwise({
            redirectTo: '/Home'
        })
 }]);