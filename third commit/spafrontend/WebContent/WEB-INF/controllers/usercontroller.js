/**
 * 
 */
app.controller('UserController',function($scope,UserService,$rootScope,$location){
	
		$scope.user={}
		if($rootScope.currentUser!=undefined){
			UserService.getList().then(function(response){
				$scope.user=response.data;
			},function(response){
				console.log(response.status)
				$location.path('/home')
			})
			}
		$scope.registerUser=function(){
			UserService.registerUser($scope.user).then(function(response){
				$rootScope.message="Registered successfully.. please login again"
					console.log($rootScope.message)
				$location.path('/login')
			},function(response){
				console.log(response.status)
				console.log(response.data)
				$location.path('/register')
			})
		}
		
		$scope.validateUser=function(){
			UserService.validateUser($scope.user).then(function(response){
				console.log(response.data)
				$rootScope.currentUser=response.data
				//$cookieStore.put("currentUser",response.data)
				$location.path('/home')
			},function(response){
				$scope.error=response.data
				//console.log($scope.error)
				console.log(response.status)
				$location.path('/login')
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
				$location.path('/updateuser')
			})
		}
})