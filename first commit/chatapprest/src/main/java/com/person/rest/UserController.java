package com.person.rest;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.person.DAO.UserDAO;

import com.person.entity.User;

@RestController
@CrossOrigin
@RequestMapping("/user")
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
}
