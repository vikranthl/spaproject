var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/register',{
		templateUrl:'views/register.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/updateuser',{
		templateUrl:'views/updateuserprofile.html',
		controller:'UserController'
	})
	.when('/getAllUsers',{
		templateUrl:'views/listofusers.html'
	})
})
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get("currentUser")
		
		$rootScope.logout=function(){
        UserService.logout().then(function(response){
        	$rootScope.logoutSuccess="Loggedout Successfully.."
        		delete $rootScope.currentUser
        		$cookieStore.remove("currentUser")
        		$location.path('/login');
        },function(response){
        	$location.path('/login')
        })		
	}		
})