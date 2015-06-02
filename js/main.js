var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/details', {
        templateUrl: 'templates/details.html',
        controller: 'DetailsController'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function() {

});

app.controller('DetailsController', function() {

});