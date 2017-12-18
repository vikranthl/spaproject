package com.person.rest;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.person.DAO.UserDAO;

import com.person.entity.User;

@RestController
public class UserController {
	@Autowired
    UserDAO userdao;
	
	@RequestMapping(value="/getAllUsers",method=RequestMethod.GET,headers="Accept=application/json")
	public List<User> getAllUser(){
		return userdao.getList();
	}
	@RequestMapping(value="/register",method=RequestMethod.POST)
	public ResponseEntity<User> createUser(@RequestBody User user){
		 userdao.adduser(user);
		return new ResponseEntity<User>(user,HttpStatus.OK);
			}
	@RequestMapping(value="/deleteuser/{userId}",method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("userId")String userId,@RequestBody User user) {
        user.setUserId(userId);
        userdao.deleteuser(user);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }
	@RequestMapping(value="/upadteuser/{userId}",method=RequestMethod.PUT)
	public ResponseEntity<User> updateUser(@PathVariable("userId") String userId, @RequestBody User user) {
        System.out.println("Updating User " + userId);
         
        User currentUser = userdao.getUser(userId);
         
        /*if (currentUser==null) {
            System.out.println("User with id " + userId + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }*/
 
        currentUser.setUserId(user.getUserId());
        currentUser.setPassword(user.getPassword());
        currentUser.setEmailId(user.getEmailId());
         
        userdao.updateUser(currentUser);
        return new ResponseEntity<User>(currentUser, HttpStatus.OK);
    }
}
