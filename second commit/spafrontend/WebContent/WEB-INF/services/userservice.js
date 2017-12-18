/**
 * UserService
 */
app.factory('UserService',function($http){
	
	var userService={}
	
	var BASE_URL="http://localhost:8080/ProjectMiddleware"
	
		userService.registerUser=function(user){
		//http://localhost:8080/project2middleware  /registeruser
		//BASE_URL                                + "/registeruser"
		console.log(user)
		return $http.post(BASE_URL + "/registeruser",user)//4
		//8
	}
	
	userService.login=function(user){
		return $http.post(BASE_URL + "/login",user)
	}
	
	userService.logout=function(){
		return $http.get(BASE_URL + "/logout")
	}
	return userService;
})