package com.person;


import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.person.DAO.UserDAO;
import com.person.entity.User;

public class UserDAOTest {
	static UserDAO userDAO;
	@BeforeClass
	public static void initialize()
	{
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.person.UserDAOTest");
		context.refresh();
		
		userDAO=(UserDAO)context.getBean("userDAO");
	}
	@Test
	public void addUserTest()
	{
		
	  User user= new User();
	  user.setUserId("Anne");
	  user.setPassword("Annie Divya");
	  user.setEmailId("anniedivya1808@gmail.com");
	  
	  
	  //assertTrue("Problem in Inserting User",userDAO.adduser(user));

	}

}
