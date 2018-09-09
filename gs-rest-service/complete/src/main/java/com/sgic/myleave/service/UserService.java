package com.sgic.myleave.service;

import java.util.List;

import com.sgic.myleave.entity.User;

public interface UserService {
	
	boolean saveUser(User user);
	
	boolean updateUser(User user);
	
	List<User> getAllUsers();
	
	boolean deleteUser(int userId);
}
