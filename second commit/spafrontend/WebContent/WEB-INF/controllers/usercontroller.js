/**
 * UserController
 */
app.controller('UserController',function($scope,UserService,$location,$rootScope,$cookieStore){

	$scope.user={}
	
	$scope.registerUser=function(){//2 //$scope can have the methods and properties which is used in html.
		console.log($scope.user)
		UserService.registerUser($scope.user)//3
		.then(function(response){
			$location.path('/login')
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.error=response.data  //ErrorClazz object in JSON
			$location.path('/register')
		})//9
	}
	
	$scope.login=function(){
		UserService.login($scope.user).then(function(response){//200,User
			console.log(response.data)
			$rootScope.currentUser=response.data
			$cookieStore.put('currentUser',response.data)
			$location.path('/home')
		},function(response){//401,500....
			if(response.status==401){
				$scope.error=response.data//errorClazz in JSON fmt
				console.log($scope.error)
				console.log(response.status)
				$location.path('/login')
			}
		})
	}
	
	$scope.updateUser=function(){
		UserService.updateUser($scope.user).then(function(response){
			alert("updated successfully")
			$location.path('/home')
		},function(response){
			console.log(response.data)
			/*
			 * For unauthorized access, 401 -> redirect the user to login page
			 * For Exception , 500  -> redirect the user to updateprofile page
			 */
			if(response.status==401)
				$location.path('/login')
			$location.path('/editprofile')
		})
	}
})







