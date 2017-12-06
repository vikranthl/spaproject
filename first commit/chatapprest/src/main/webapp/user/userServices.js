app.factory("userService",function($http){
    var BASE_URL="http://localhost:8081/chatapprest";
	var userService ={};
	
	
	userService.getList=function(){
		return $http.get(BASE_URL+"/user/getAllUsers");		
	}
	
	userService.adduser=function(user){
		console.log("****** inside user service--createUser()*****")
		return $http.post(BASE_URL+"/user/register",user);		
	}
	
	return userService;
});