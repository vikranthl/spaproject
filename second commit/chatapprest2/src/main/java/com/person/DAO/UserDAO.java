package com.person.DAO;

import java.util.List;

import com.person.entity.User;



public interface UserDAO {
	public void adduser(User user);
	public List<User> getList();

public void deleteuser(User user);
public User getUser(String userId);
public void updateUser(User user);
}