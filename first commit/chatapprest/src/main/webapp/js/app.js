	
var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
	$routeProvider

		
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		}) 
        
		.when('/registration', {
			templateUrl : 'user/registration.html',
			controller  : 'registrationController'
		})
		.when('/login', {
			templateUrl : 'user/login.html',
			controller  : 'loginController'
		});		
});

app.controller('mainController', function($scope) {	
	$scope.message = 'This is home page';
});

